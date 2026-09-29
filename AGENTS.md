# AGENTS.md — Ecommerce de floristería en Medellin

Instrucciones para cualquier agente de IA que trabaje en este repositorio. Léelas completas antes de escribir código. Si algo aquí entra en conflicto con lo que te pidan en un prompt, avisa del conflicto antes de actuar.

## 1. Contexto del proyecto

- Tienda online de una floristería, construida desde cero con asistencia de IA.
- Mercado: Colombia. Moneda: COP. Zona horaria: `America/Bogota`. Idioma de la interfaz: español.
- Hosting: Hostinger, plan "Hosting de apps web" (Node.js gestionado + MySQL administrado).
- Pasarela de pagos: Bold (Colombia).
- Prioridades, en este orden: **seguridad de pagos y datos > SEO y velocidad > experiencia visual > velocidad de desarrollo**.

## 2. Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro (modo híbrido: páginas de contenido prerenderizadas, resto en servidor) |
| Adaptador | `@astrojs/node` (modo `standalone`) |
| Estilos | Tailwind CSS |
| Lenguaje | TypeScript en modo estricto |
| Base de datos | MySQL administrado de Hostinger |
| ORM | Drizzle |
| Validación | Zod en toda entrada externa |
| Pagos | Bold (botón de pagos con Embedded Checkout + webhook) |
| Node.js | 22.12 o superior (verificar el requisito vigente de Astro al iniciar) |

No agregues frameworks o librerías grandes (React, Vue, librerías de UI, etc.) sin pedir aprobación. Astro con componentes `.astro` es la opción por defecto. Usa JavaScript en el cliente solo cuando sea imprescindible (islas).

## 3. Estructura de carpetas

```
src/
├── pages/            # Rutas del front
│   └── api/          # Endpoints de servidor (checkout, webhook Bold, admin)
├── components/       # UI reutilizable (Astro + Tailwind)
├── layouts/          # Layouts base (SEO, metadatos, cabecera, pie)
├── server/           # TODA la lógica de backend. No importar desde el cliente.
│   ├── db/           # Esquema, migraciones, consultas
│   ├── bold/         # Hash de integridad, verificación de firma del webhook
│   ├── orders/       # Pedidos, precios, stock, estados
│   ├── auth/         # Sesiones y autorización del admin
│   └── security/     # Cabeceras, rate limiting, utilidades
├── lib/              # Utilidades compartidas sin secretos
└── middleware.ts     # Cabeceras de seguridad, sesión, control de acceso
```

Regla: `src/pages/api/*` solo recibe, valida y delega. La lógica de negocio vive en `src/server/`.

## 4. Reglas de seguridad (obligatorias)

### Secretos
- Ninguna llave, contraseña o token va en el código ni en el repositorio. Todo en variables de entorno del servidor.
- En Astro, solo las variables con prefijo `PUBLIC_` llegan al navegador. **Nunca** uses ese prefijo para llaves secretas ni para la llave secreta de Bold.
- `.env` debe estar en `.gitignore`. Mantén un `.env.example` con nombres de variables y sin valores.
- No imprimas secretos, cabeceras de autorización ni datos personales en logs.

### Entradas y salidas
- Valida con Zod todo lo que entra: formularios, query params, cuerpos JSON, cabeceras relevantes.
- Solo consultas parametrizadas mediante el ORM. Prohibido concatenar SQL.
- No uses `set:html` ni HTML crudo con contenido escrito por usuarios (por ejemplo el mensaje de la tarjeta de dedicatoria).
- Mantén activa la protección CSRF/verificación de origen de Astro.
- Cabeceras de seguridad desde `middleware.ts`: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors`. Si el Embedded Checkout de Bold requiere ajustar la CSP, hazlo de forma mínima y documenta el motivo.
- Rate limiting en login, checkout, creación de pedidos y endpoints públicos.

### Autenticación y autorización (panel admin)
- Usa una librería de autenticación establecida. **No escribas criptografía ni gestión de sesiones propias.**
- Contraseñas con argon2id o bcrypt. Cookies `HttpOnly`, `Secure`, `SameSite`. Sesiones con expiración.
- Verifica la autorización en cada endpoint del servidor. Ocultar un botón en la interfaz no es control de acceso.

### Base de datos
- El usuario de MySQL de la app tiene permisos mínimos. Sin acceso remoto abierto.
- Dinero siempre como **entero en COP** (sin decimales flotantes).
- Guarda solo los datos personales necesarios de compradores y destinatarios.

### Dependencias
- Antes de instalar un paquete, verifica que existe, que es el correcto, que tiene mantenimiento activo y que es ampliamente usado. Los nombres inventados o parecidos a paquetes populares pueden ser maliciosos.
- Mantén el archivo lock en el repositorio. Ejecuta `npm audit` antes de cada entrega de fase.
- No agregues dependencias para algo que se resuelve en pocas líneas.

## 5. Reglas de pagos con Bold

Documentación oficial: `https://developers.bold.co`. Léela antes de implementar y sigue los pasos vigentes; no los recuerdes de memoria.

1. **El monto lo calcula el servidor** a partir de precios en la base de datos y del costo de envío por zona. Nunca confíes en montos, precios ni descuentos enviados por el navegador.
2. **El hash de integridad se genera solo en el servidor**, con el identificador único del pedido, el monto y la divisa. La llave secreta nunca sale del servidor.
3. **Un pedido pasa a "pagado" solo desde el webhook verificado**, jamás por el simple retorno del cliente a la página de resultado.
4. **Verifica la firma del webhook** con el procedimiento de la documentación de Bold (HMAC-SHA256 sobre el cuerpo, comparado con el encabezado `X-Bold-Signature`), usando la llave que indique la documentación vigente. Calcula la firma sobre el cuerpo crudo, antes de parsear el JSON. Compara con una función de tiempo constante.
5. **Idempotencia:** guarda el id de cada notificación y descarta las repetidas. Un reintento nunca debe procesar dos veces el mismo pago.
6. **Valida el contenido del webhook:** el monto y el identificador deben coincidir con el pedido. Maneja los eventos de venta aprobada, venta rechazada y anulaciones.
7. Nunca recibas, almacenes ni registres datos de tarjeta.
8. Usa llaves de **pruebas** en desarrollo y staging. Las llaves de producción solo existen como variables de entorno en producción.
9. Escribe pruebas automáticas para: generación del hash, verificación de firma (válida, inválida, cuerpo alterado), idempotencia y mismatch de monto.

## 6. Reglas de SEO

- Prerenderiza catálogo, categorías, fichas de producto y páginas de contenido. Usa renderizado en servidor solo para carrito, checkout, cuenta, admin y API.
- Cada página tiene `<title>`, meta description, URL canónica y Open Graph únicos. URLs limpias y en español (`/ramos/rosas-rojas`).
- Datos estructurados JSON-LD: `Product` con `Offer` en cada ficha; `Florist`/`LocalBusiness` a nivel de sitio; `BreadcrumbList` en categorías y productos.
- `@astrojs/sitemap` y `robots.txt`. Carrito, checkout, admin y páginas de resultado de pago llevan `noindex`.
- Un solo `<h1>` por página y jerarquía de encabezados correcta. Texto alternativo descriptivo en imágenes.
- Imágenes con `astro:assets`: formatos modernos (WebP/AVIF), tamaños responsivos, `width` y `height` explícitos, carga diferida excepto la imagen principal visible.
- Objetivo Core Web Vitals: LCP < 2,5 s, CLS < 0,1, INP < 200 ms.

## 7. Animaciones y rendimiento

- Preferir CSS y las View Transitions de Astro. Librerías como GSAP o Motion solo en componentes concretos y con aprobación.
- Anima únicamente `transform` y `opacity`. Reserva el espacio de los elementos para no provocar saltos de diseño.
- No animes la imagen principal de la página (afecta el LCP).
- Respeta siempre `prefers-reduced-motion`.
- Prohibido: vídeos pesados de fondo, efectos 3D, carruseles automáticos grandes.

## Paleta de colores

- La paleta oficial vive en `.commandcode/context/colors.md`. Léela antes de cualquier elección de color en componentes, páginas o estilos, y usa sus variables CSS como fuente única.
- No introduzcas colores nuevos sin una razón de diseño clara.
- La paleta del proyecto prevalece sobre cualquier paleta generada por skills externas.

## 8. Reglas de negocio de la floristería

- El pedido incluye: fecha y franja de entrega, dirección y zona, datos del destinatario, mensaje de la tarjeta y datos del comprador.
- El costo de envío depende de la zona de entrega.
- Existe una hora límite para pedidos con entrega el mismo día.
- Los productos pueden estar temporalmente no disponibles (por temporada o stock). Una ficha no disponible sigue existiendo para SEO pero no se puede comprar.
- Estados del pedido: `pendiente_pago` → `pagado` → `en_preparacion` → `en_camino` → `entregado`, más `cancelado` y `reembolsado`.

## 9. Convenciones de código

- Identificadores, nombres de archivos y commits en inglés; textos de interfaz y comentarios en español.
- TypeScript estricto: sin `any` salvo justificación comentada.
- Funciones pequeñas y con una sola responsabilidad. Sin código muerto ni comentarios que repitan lo que hace el código.
- Tailwind: reutiliza componentes en lugar de repetir cadenas largas de clases.
- Commits pequeños y descriptivos, uno por cambio lógico.

## 10. Cómo trabajar

1. Antes de empezar una tarea, lee `PLAN.md`, identifica la fase actual y no adelantes fases sin que te lo pidan.
2. Antes de cambios grandes (esquema de base de datos, autenticación, pagos, dependencias nuevas), explica brevemente qué vas a hacer y espera confirmación.
3. Al terminar, ejecuta lint, verificación de tipos, pruebas y build. Si algo falla, corrígelo o repórtalo; no lo ocultes.
4. Si no sabes algo (documentación de Bold, requisitos del plan de Hostinger, versiones), consúltalo o pregunta. No lo inventes.
5. **No hagas nunca:** subir secretos al repositorio, desactivar validaciones o cabeceras de seguridad para "que funcione", usar llaves de producción en desarrollo, borrar datos o hacer migraciones destructivas sin confirmación explícita.

## 11. Definición de "terminado" para una tarea

- Cumple los criterios de aceptación de su fase en `PLAN.md`.
- Pasa lint, tipos, pruebas y build.
- Respeta las secciones 4 a 7 de este archivo.
- Los cambios en autenticación, pagos o webhook fueron revisados por una persona.
- No añade secretos ni dependencias sin verificar.
