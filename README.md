# Floristería — E-commerce en Medellín

Tienda online de una floristería en Medellín, Colombia, con envíos en el Valle de Aburrá y a nivel nacional. Proyecto construido con Astro, TypeScript estricto y Tailwind CSS.

## Requisitos

- Node.js `>= 22.12.0`
- npm
- Acceso a una base de datos MySQL compatible con Drizzle
- Llaves de pruebas de Bold para pagos en desarrollo

## Puesta en marcha

1. Instala dependencias:

```bash
npm install
```

2. Crea tu archivo local de entorno:

```bash
copy .env.example .env
```

Completa los valores en `.env`. Nunca subas este archivo al repositorio.

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:4321/`.

## Variables de entorno

| Variable | Uso |
|---|---|
| `DATABASE_URL` | Conexión MySQL. |
| `BOLD_API_KEY` | API de Bold, solo servidor. |
| `BOLD_SECRET_KEY` | Firma/hash de Bold, solo servidor. |
| `PUBLIC_BOLD_API_KEY` | Llave pública de Bold que puede exponerse al navegador. |

No uses el prefijo `PUBLIC_` para secretos. Usa llaves de pruebas fuera de producción.

## Scripts

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | Desarrollo local. |
| `npm run check` | Verificación de tipos. |
| `npm run build` | Build de producción. |
| `npm run preview` | Previsualizar el build generado. |

Antes de entregar, ejecuta tipos y build:

```bash
npm run check
npm run build
```

## Estructura

```text
src/
├── pages/
│   └── api/
├── components/
├── layouts/
├── server/
│   ├── db/
│   ├── bold/
│   ├── orders/
│   ├── auth/
│   └── security/
├── lib/
└── middleware.ts
```

La lógica de negocio vive en `src/server/`. Los endpoints en `src/pages/api/` solo reciben, validan y delegan.

## Producción

El proyecto usa el adaptador Node en modo `standalone`. El flujo esperado es:

1. Configurar las variables de entorno en el servidor.
2. Ejecutar `npm install`.
3. Ejecutar `npm run build`.
4. Iniciar la aplicación Node generada según la documentación del hosting.

No subas `node_modules/`, `dist/`, archivos `.env` ni archivos locales del editor.
