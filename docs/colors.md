# Paleta de colores — Floristería

Esta paleta define los colores base para el diseño visual de la página web de la floristería. Debe utilizarse como referencia para mantener consistencia entre páginas, componentes, botones, fondos, textos y elementos decorativos.

## Paleta principal

| Color | HEX | Uso |
|---|---|---|
| 🔴 Rojo coral | `#FE5556` | Fondos grandes cuando sea necesario destacar una sección o crear un bloque visual importante. |
| 🔴 Rojo oscuro | `#D63C45` | Botones con texto blanco, especialmente acciones principales. |
| 🟤 Borgoña | `#7B323B` | Barra superior, logo, títulos y pie de página. |
| 🟥 Rojo vino | `#8B0915` | Precios y etiquetas. |
| 🌸 Rosa | `#D87990` | Detalles decorativos y elementos de apoyo visual. |
| 🟫 Beige | `#CD9D83` | Fondos suaves y bordes. |
| 🟠 Naranja dorado | `#F6A908` | Insignias de ofertas y elementos destacados. Usar texto oscuro encima. |
| 🟢 Verde oliva | `#425D23` | Confirmaciones y botón de WhatsApp. |
| 🟢 Verde menta | `#8AF7C6` | Detalles decorativos. |
| ⚪ Blanco cálido | `#F5ECE5` | Fondo principal de la página. |

## Variables CSS

Para implementar la paleta en el sitio, utilizar preferentemente variables CSS en lugar de repetir los valores HEX directamente:

```css
:root {
  /* Colores principales */
  --color-coral: #FE5556;
  --color-red-dark: #D63C45;
  --color-burgundy: #7B323B;
  --color-wine: #8B0915;

  /* Colores secundarios */
  --color-pink: #D87990;
  --color-beige: #CD9D83;
  --color-gold: #F6A908;
  --color-olive: #425D23;
  --color-mint: #8AF7C6;

  /* Fondos */
  --color-background: #F5ECE5;
}
```

## Guía de uso

### `#FE5556` — Coral principal

**Uso:** fondos grandes de secciones que necesiten protagonismo visual.

- Usar en bloques o secciones amplias.
- Evitar utilizarlo simultáneamente con demasiados colores intensos.
- Puede combinarse con blanco cálido, borgoña o tonos neutros.

### `#D63C45` — Rojo oscuro

**Uso:** botones principales con texto blanco.

Ejemplo:

```css
.button-primary {
  background-color: var(--color-red-dark);
  color: #FFFFFF;
}
```

Debe reservarse principalmente para acciones importantes como:

- Comprar
- Agregar al carrito
- Reservar
- Solicitar información
- Ver catálogo

### `#7B323B` — Borgoña

**Uso:** elementos estructurales y de identidad visual.

Principalmente:

- Barra superior
- Logo
- Títulos
- Pie de página
- Elementos de navegación destacados

Este color debe ayudar a establecer la identidad de la marca.

### `#8B0915` — Rojo vino

**Uso:** información de precio y etiquetas.

Principalmente:

- Precios
- Etiquetas
- Información promocional
- Indicadores relacionados con productos

### `#D87990` — Rosa

**Uso:** detalles decorativos.

Puede utilizarse para:

- Elementos florales
- Separadores
- Detalles gráficos
- Pequeños acentos visuales
- Estados decorativos

### `#CD9D83` — Beige

**Uso:** superficies suaves y bordes.

Principalmente:

- Fondos secundarios
- Bordes
- Tarjetas
- Separadores
- Áreas que necesiten menor contraste visual

### `#F6A908` — Naranja dorado

**Uso:** ofertas e información destacada.

Principalmente:

- Insignias de oferta
- Descuentos
- Productos destacados
- Elementos que requieran llamar la atención

**Importante:** utilizar texto oscuro sobre este color para mantener una buena legibilidad.

Ejemplo:

```css
.badge-offer {
  background-color: var(--color-gold);
  color: #2B2B2B;
}
```

### `#425D23` — Verde oliva

**Uso:** confirmaciones y comunicación por WhatsApp.

Principalmente:

- Confirmaciones
- Mensajes de éxito
- Botón de WhatsApp
- Estados positivos

### `#8AF7C6` — Verde menta

**Uso:** detalles decorativos.

Debe utilizarse como color de acento y no como color dominante de la interfaz.

### `#F5ECE5` — Blanco cálido

**Uso:** fondo principal.

Este color funciona como base general de la página y ayuda a evitar el aspecto excesivamente blanco de un fondo `#FFFFFF`.

```css
body {
  background-color: var(--color-background);
}
```

## Jerarquía visual

La combinación recomendada para mantener una identidad coherente es:

1. **Fondo principal:** `#F5ECE5`
2. **Estructura e identidad:** `#7B323B`
3. **Acciones principales:** `#D63C45`
4. **Destacados y promociones:** `#F6A908`
5. **Precios:** `#8B0915`
6. **Confirmaciones / WhatsApp:** `#425D23`
7. **Decoración:** `#D87990`, `#8AF7C6`
8. **Fondos secundarios y bordes:** `#CD9D83`
9. **Fondos destacados:** `#FE5556`

## Reglas generales

- Mantener `#F5ECE5` como fondo predominante de la interfaz.
- No utilizar todos los colores simultáneamente en un mismo componente.
- Reservar los colores intensos (`#D63C45`, `#8B0915`, `#F6A908`) para elementos que realmente necesiten destacar.
- Usar `#7B323B` como color principal de identidad y estructura.
- Los botones principales deben utilizar `#D63C45` con texto blanco.
- Las ofertas deben utilizar `#F6A908` con texto oscuro.
- Las confirmaciones y el botón de WhatsApp deben utilizar `#425D23`.
- Los colores rosa y verde menta deben funcionar principalmente como acentos decorativos.
- Los bordes y superficies secundarias deben utilizar `#CD9D83` sin dominar visualmente la interfaz.
- Priorizar contraste y legibilidad antes que la aplicación estricta de la paleta.

## Resumen rápido para agentes de código

Cuando se desarrollen nuevos componentes para esta página, utilizar estas variables como fuente única de colores:

```text
--color-coral      #FE5556  → fondos grandes destacados
--color-red-dark   #D63C45  → botones principales + texto blanco
--color-burgundy   #7B323B  → navbar + logo + títulos + footer
--color-wine       #8B0915  → precios + etiquetas
--color-pink       #D87990  → decoración
--color-beige      #CD9D83  → fondos suaves + bordes
--color-gold       #F6A908  → ofertas + destacados + texto oscuro
--color-olive      #425D23  → confirmaciones + WhatsApp
--color-mint       #8AF7C6  → decoración
--color-background #F5ECE5  → fondo principal
```

> **Regla de contexto:** Esta paleta es parte del sistema visual de la floristería. Al crear o modificar componentes, reutilizar primero estas variables y evitar introducir nuevos colores sin una razón de diseño clara.
