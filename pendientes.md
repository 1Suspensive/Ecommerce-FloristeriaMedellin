# Pendientes

Tareas identificadas durante la Fase 1 que requieren datos reales o decisiones del negocio.

## Entorno de desarrollo (importante)

- [ ] **`NODE_ENV=production` está definido en el entorno de esta máquina.** Eso hace que `npm install`/`npm ci` omitan las devDependencies silenciosamente y rompan el proyecto (ya pasó una vez: faltaban tailwindcss, typescript, @astrojs/check, etc.). Quitar esa variable de entorno del sistema, o instalar siempre con `npm install --include=dev`.
- [ ] Actualizar Node a ≥ 22.19 (warning `EBADENGINE` de `undici`; hoy hay 22.17.0).
- [ ] Configurar lint y framework de pruebas (AGENTS.md §11 los exige; imprescindible antes de la Fase 3 de pagos).
- [ ] Revisión visual con navegador del header entre 768–900px (posible saturación con 6 ítems + logo).

## Datos reales del negocio

- [x] Nombre definitivo de la floristería: confirmado "Floristería Medellín" (header, footer y metadatos).
- [x] Número de WhatsApp real aplicado: `+57 300 526 7555` en hero, CTA final, footer, 404 y botón flotante.
- [ ] Correo de contacto real (placeholder `hola@tufloristeria.co` en footer).
- [x] Teléfono en el JSON-LD `Florist` de `BaseLayout.astro`: `+573005267555`, más `streetAddress`, `url` y `openingHoursSpecification` reales.
- [x] Horario y dirección física reales en el footer: Cra. 39 #49-24, segundo piso · Lunes a viernes 8:00 a. m. – 7:00 p. m. · Sábados y domingos 9:00 a. m. – 2:00 p. m.
- [ ] Hora límite real para envíos el mismo día (se asumió 3:00 p. m.).
- [ ] Productos, categorías, precios y testimonios reales (los de `src/lib/catalog.ts` son inventados).

## Assets

- [ ] Fotografías reales de productos y categorías para reemplazar los SVG de `public/img/` (mantener `width`/`height` explícitos y formatos modernos con `astro:assets`).
- [ ] Imagen `/public/og-default.jpg` para Open Graph (referenciada en `BaseLayout.astro`).
- [ ] Imagen del hero definitiva (la actual es un placeholder SVG).
- [ ] Evaluar auto-hospedar las fuentes Crimson Pro e IBM Plex Sans en lugar de Google Fonts (TODO en `BaseLayout.astro`, mejora LCP y privacidad).

## Configuración

- [x] Dominio real en `site` de `astro.config.mjs`: `https://www.floristeria-medellin.com` (canonical, OG y sitemap).

## Páginas enlazadas pero aún no creadas

Estas rutas aparecen en header/footer/tarjetas y hoy devuelven 404:

- [ ] `/ramos`, `/flores`, `/eventos`, `/regalos` (Fase 2)
- [ ] `/producto/<slug>` fichas de producto (Fase 2)
- [ ] `/carrito` (Fase 3)
- [x] `/contacto`
- [ ] `/envios`, `/preguntas-frecuentes`, `/terminos`, `/privacidad`

## Verificación pendiente de la Fase 1

- [ ] Medir Core Web Vitals con contenido real (objetivo: LCP < 2,5 s, CLS < 0,1, INP < 200 ms).
- [ ] Revisión visual contra la imagen de referencia (no llegó adjunta en la conversación).
- [x] `npm audit` antes de entregar la fase (regla AGENTS.md §4). ✅ 0 vulnerabilidades tras `npm audit fix` (http-cache-semantics 4.3.0, source-map-js 1.2.2).

## Mejoras menores reportadas por QA/SEO (no bloquean)

- [ ] Centralizar datos del negocio en `src/lib/site.ts` (nombre, WhatsApp, correo, horario) y consumirlo desde layout y componentes (NAP consistente).
- [ ] Completar JSON-LD `Florist` con `url`, `image`, `geo`, `openingHoursSpecification`, `sameAs` y `@id` cuando haya datos reales.
- [ ] Recortar la meta description de la home a ≤160 caracteres.
- [ ] Anclas con contexto: "Explorar" → "Explorar Ramos", "Ver detalles" → "Ver detalles de Ramo Aurora" (visible o `aria-label`).
- [ ] Menú móvil `<details>`: cerrar con Escape y al hacer clic fuera (requiere un script mínimo).
- [ ] ProductCard tiene 3 enlaces al mismo destino (imagen, título, "Ver detalles"): reducir tabulación redundante.
- [ ] `og:image:width/height/alt` y `twitter:image` en BaseLayout.
- [ ] Mencionar la cobertura nacional en contenido visible (hoy solo está en el JSON-LD).
