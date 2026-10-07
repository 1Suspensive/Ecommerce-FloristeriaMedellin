// Datos de ejemplo para Fase 1. En fases posteriores vendrán de la base de datos.

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  /** Entero en COP, sin decimales (regla AGENTS.md §4). */
  priceCop: number;
  image: string;
  badge?: { label: string; tone: "offer" | "tag" };
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const categories: Category[] = [
  {
    slug: "ramos",
    name: "Ramos",
    description: "Rosas, girasoles, lirios y arreglos de temporada armados el mismo día por nuestros floristas, con follaje fresco y empaque de regalo incluido.",
    image: "/img/category-ramos.svg",
  },
  {
    slug: "flores",
    name: "Flores",
    description: "Rosas, lirios, gerberas y flores de temporada seleccionadas cada mañana, listas para armar el ramo que imagines.",
    image: "/img/category-flores.svg",
  },
  {
    slug: "eventos",
    name: "Eventos",
    description: "Decoración floral completa para bodas, cumpleaños y eventos corporativos: diseño, montaje y desmontaje coordinados con tu equipo.",
    image: "/img/category-eventos.svg",
  },
  {
    slug: "regalos",
    name: "Regalos y detalles",
    description: "Anchetas, chocolates artesanales, peluches y tarjetas personalizadas escritas a mano para acompañar cualquier arreglo floral.",
    image: "/img/category-regalos.svg",
  },
];

export const featuredProducts: Product[] = [
  {
    slug: "ramo-aurora",
    name: "Ramo Aurora",
    description: "12 rosas rojas premium de tallo largo, seleccionadas una a una, con follaje de eucalipto y envoltura coreana en tonos crema.",
    priceCop: 145000,
    image: "/img/product-1.svg",
    badge: { label: "Más vendido", tone: "tag" },
  },
  {
    slug: "ramo-brisa",
    name: "Ramo Brisa",
    description: "Girasoles frescos con margaritas blancas y un toque de solidago amarillo: un ramo alegre ideal para cumpleaños y agradecimientos.",
    priceCop: 98000,
    image: "/img/product-2.svg",
    badge: { label: "Oferta", tone: "offer" },
  },
  {
    slug: "orquidea-serena",
    name: "Orquídea Serena",
    description: "Phalaenopsis blanca de dos varas en maceta de cerámica artesanal, con musgo decorativo y tarjeta de cuidados incluida.",
    priceCop: 120000,
    image: "/img/product-3.svg",
  },
  {
    slug: "ramo-atardecer",
    name: "Ramo Atardecer",
    description: "Mezcla cálida de lirios naranjas, claveles y rosas spray en tonos durazno, terminada con follaje de ruscus y listón de tela.",
    priceCop: 110000,
    image: "/img/product-4.svg",
  },
  {
    slug: "ramo-encanto",
    name: "Ramo Encanto",
    description: "24 rosas rosadas de tallo largo con gipsofila, un clásico para aniversarios y pedidas de perdón.",
    priceCop: 165000,
    image: "/img/product-5.svg",
  },
  {
    slug: "ramo-sol",
    name: "Ramo Sol de Medellín",
    description: "Girasoles grandes y luminosos con follaje fresco: puro sol paisa para alegrar cualquier día.",
    priceCop: 85000,
    image: "/img/product-6.svg",
  },
  {
    slug: "ramo-nube",
    name: "Ramo Nube Blanca",
    description: "Hortensias y lisianthus blancos con toques verde menta, elegante para condolencias o celebraciones serenas.",
    priceCop: 132000,
    image: "/img/product-7.svg",
    badge: { label: "Nuevo", tone: "tag" },
  },
  {
    slug: "ramo-pasion",
    name: "Ramo Pasión",
    description: "50 rosas rojas premium en envoltura negra mate, nuestra declaración más intensa para grandes ocasiones.",
    priceCop: 260000,
    image: "/img/product-8.svg",
    badge: { label: "Premium", tone: "tag" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Pedí un ramo a las 10 de la mañana y a la 1 ya estaba en la oficina de mi mamá. Llegó fresquísimo, tal cual la foto.",
    name: "Camila Restrepo",
    detail: "El Poblado, Medellín",
  },
  {
    quote:
      "Me asesoraron por WhatsApp con toda la paciencia del mundo y la tarjeta con mi mensaje quedó preciosa. De una vuelvo a pedir.",
    name: "Andrés Mejía",
    detail: "Envigado",
  },
  {
    quote:
      "Encargamos la decoración del matrimonio y quedó mejor de lo que soñamos. Cumplieron a la hora en punto, eso vale oro.",
    name: "Laura y Santiago",
    detail: "Laureles, Medellín",
  },
  {
    quote:
      "Se me olvidó el aniversario y me salvó la tarde: pedí después de almuerzo y el ramo llegó el mismo día. Mi esposa feliz.",
    name: "Juan Pablo Gómez",
    detail: "Sabaneta",
  },
  {
    quote:
      "Tercera vez que pido y siempre llega todo impecable. Precio justo y la atención es de verdad, no un robot contestando.",
    name: "Valentina Ortiz",
    detail: "Belén, Medellín",
  },
  {
    quote:
      "La orquídea que le mandé a mi suegra dura divina y ella no para de hablar de eso. Quedé como un rey, parce.",
    name: "Felipe Cardona",
    detail: "Itagüí",
  },
  {
    quote:
      "Vivo en Bogotá y les encargué flores para mi hermana en Medellín. Me mandaron foto antes de entregarlas. Confianza total.",
    name: "Carolina Duque",
    detail: "Bogotá (envío a Medellín)",
  },
];
