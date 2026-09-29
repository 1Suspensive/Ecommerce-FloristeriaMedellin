# PLAN.md — E-commerce Floristería Medellín

Fase actual: **Fase 0 — Bases (en curso)**. No adelantar fases sin confirmación (AGENTS.md §10).

## Fase 0 — Bases del proyecto
- [x] Estructura de carpetas según AGENTS.md §3
- [x] Toolchain Node 22.12+ y Astro verificados
- [x] Página Hola Mundo + build + `astro check` limpios
- [x] `site` configurado en `astro.config.mjs` (placeholder, pendiente dominio real)
- [x] Paleta `colors.md` como variables CSS + tokens Tailwind
- [x] `BaseLayout` SEO base (canonical, OG, JSON-LD Florist/LocalBusiness)
- [x] README + .gitignore listos

## Fase 1 — Home y sistema visual
- Sistema de diseño con paleta oficial, tipografías y componentes base
- Home: hero, categorías, destacados, confianza (envíos, pagos), testimonios
- Layout con header/footer, responsive mobile-first, accesibilidad AA
- Criterio: LCP < 2,5 s, CLS < 0,1, sin animar imagen principal

## Fase 2 — Catálogo y fichas
- Categorías y fichas prerenderizadas, URLs en español (`/ramos/rosas-rojas`)
- `Product` + `Offer` JSON-LD, BreadcrumbList, productos no disponibles sin compra
- Filtros, búsqueda y estados (carga, error, vacío)

## Fase 3 — Carrito, checkout y Bold
- Monto calculado en servidor, hash de integridad solo en servidor
- Webhook con firma HMAC-SHA256 sobre cuerpo crudo + idempotencia
- `noindex` en carrito/checkout/resultado, pruebas de hash/firma/mismatch

## Fase 4 — Admin y pedidos
- Auth con librería establecida, sesiones HttpOnly/Secure/SameSite
- Estados: `pendiente_pago` → `pagado` → `en_preparacion` → `en_camino` → `entregado` + `cancelado`/`reembolsado`
- Rate limiting en login/checkout/API pública

## Reglas transversales
- Seguridad pagos/datos > SEO/velocidad > visual > velocidad desarrollo
- Dinero en entero COP, Zod en toda entrada, sin secretos en repo
- Revisión humana obligatoria en auth/pagos/webhook antes de entregar
