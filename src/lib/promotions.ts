// Promociones de fechas especiales de Colombia.
// Fase 4: migrar a la base de datos y editar desde el panel de administración;
// la estructura (una promo activa, resto en espera) ya está pensada para eso.

export interface Promotion {
  /** Identificador único, p. ej. "amor-amistad-2027". */
  id: string;
  /** Nombre de la fecha especial, p. ej. "Amor y Amistad". */
  occasion: string;
  title: string;
  /** Fecha legible para el usuario, p. ej. "Tercer sábado de septiembre". */
  dateLabel: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  /** Solo una promoción debe estar activa a la vez. */
  active: boolean;
}

export const promotions: Promotion[] = [
  {
    id: "navidad-2026",
    occasion: "Navidad",
    title: "Arreglos y anchetas de Navidad",
    dateLabel: "Diciembre 2026 · Novena, Navidad y Año Nuevo",
    description:
      "Anchetas con chocolates, centros de mesa navideños y ramos de fin de año para sorprender en diciembre. Agenda tu entrega con anticipación: en estas fechas la demanda vuela.",
    ctaLabel: "Ver arreglos navideños",
    ctaHref: "/regalos",
    image: "/img/promo-navidad.svg",
    imageAlt: "Arreglo navideño con flores rojas, follaje verde y detalles dorados",
    active: true,
  },
  {
    id: "amor-amistad-2027",
    occasion: "Amor y Amistad",
    title: "Amor y Amistad",
    dateLabel: "Tercer sábado de septiembre",
    description:
      "La fecha más romántica de Colombia: rosas rojas, anchetas con chocolates y tarjetas escritas a mano con tu mensaje. Agenda tu entrega antes de que se agoten las franjas.",
    ctaLabel: "Ver ramos para Amor y Amistad",
    ctaHref: "/ramos",
    image: "/img/promo-amor-amistad.svg",
    imageAlt: "Ramo de rosas en tonos coral y rosa con un corazón decorativo",
    active: false,
  },
];

export const activePromotion = promotions.find((p) => p.active);
