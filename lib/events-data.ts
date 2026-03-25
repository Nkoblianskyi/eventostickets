export type EventCategory = 'Concierto' | 'Deporte' | 'Teatro' | 'Festival' | 'Comedia'

export interface TicketOffer {
  partner: string
  price: number
  url: string
  available: boolean
}

export interface Event {
  id: string
  title: string
  artist?: string
  category: EventCategory
  date: string
  time: string
  venue: string
  city: string
  image: string
  description: string
  offers: TicketOffer[]
  featured?: boolean
}

export const partners = [
  {
    name: 'Ticketmaster España',
    url: 'https://www.ticketmaster.es',
    description: 'Venta oficial de entradas para conciertos, deportes y espectáculos en toda España.',
  },
  {
    name: 'Eventim España',
    url: 'https://www.eventim.es',
    description: 'Plataforma europea con amplio catálogo de eventos en Madrid, Barcelona y más ciudades.',
  },
  {
    name: 'Entradas.com',
    url: 'https://www.entradas.com',
    description: 'Agregador español muy utilizado para teatro, música y experiencias en vivo.',
  },
  {
    name: 'El Corte Inglés Entradas',
    url: 'https://www.elcorteingles.es/entradas/',
    description: 'Canal de confianza para entradas culturales y de entretenimiento en España.',
  },
  {
    name: 'Fnac Entradas',
    url: 'https://www.fnac.es/comprar-entradas-con-fnac',
    description: 'Entradas para conciertos, festivales y espectáculos con cobertura nacional.',
  },
  {
    name: 'Atrapalo',
    url: 'https://www.atrapalo.com/entradas/',
    description: 'Ofertas y comparación de planes de ocio, incluidos muchos eventos con entrada.',
  },
]

const EVENTS_RAW: Event[] = [
  {
    id: '1',
    title: 'Madrid Open Cup - Final',
    artist: undefined,
    category: 'Deporte',
    date: '2026-06-20',
    time: '21:00',
    venue: 'WiZink Center',
    city: 'Madrid',
    image: '/EL-WIZINK-CENTER-DE-MADRID-VIBRA-CON-LAS-FINALES-DE-LA-KINGS-Y-QUEENS-LEAGUE-5.jpg',
    description:
      'Final nacional con gran expectacion en Madrid: ambiente competitivo y aforo completo.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 72, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 78, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 75, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '2',
    title: 'Real Madrid - LaLiga EA Sports',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-26',
    time: '21:00',
    venue: 'Santiago Bernabéu',
    city: 'Madrid',
    image: '/w_900x700_29093014madrid_web.jpg',
    description:
      'Ambiente de élite en el templo blanco: encuentro de liga con la exigencia y el ritual que solo el Bernabéu sabe crear.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 95, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 102, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '3',
    title: 'Liga Nacional de Baloncesto - Jornada Estelar',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-09',
    time: '17:00',
    venue: 'Lope de Vega',
    city: 'Madrid',
    image: '/LNB_Logo.png',
    description:
      'Partido destacado de baloncesto con duelo directo por posiciones de playoff.',
    featured: true,
    offers: [
      { partner: 'El Corte Inglés Entradas', price: 68, url: 'https://www.elcorteingles.es/entradas/', available: true },
      { partner: 'Entradas.com', price: 71, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '5',
    title: 'Copa Iberica de Natacion',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-14',
    time: '21:30',
    venue: 'Teatro Real',
    city: 'Madrid',
    image: '/Hannah-Bellard-By-Jack-Spitser-DSC08826-scaled.jpg',
    description:
      'Meeting de natacion con pruebas individuales y relevos en jornada nocturna.',
    offers: [
      { partner: 'Eventim España', price: 58, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 62, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '6',
    title: 'FC Barcelona - LaLiga',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-03',
    time: '18:30',
    venue: 'Estadi Olímpic Lluís Companys',
    city: 'Barcelona',
    image: '/participantes-fcbarcelona-tickets2.jpg',
    description:
      'Ritual culé en Montjuïc: hinchada, mosaic y un partido de alto voltaje en la élite del fútbol español.',
    offers: [
      { partner: 'Ticketmaster España', price: 88, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 94, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '7',
    title: 'Derbi Catalan - Copa Regional',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-18',
    time: '21:00',
    venue: 'Palau de la Música Catalana',
    city: 'Barcelona',
    image: '/erwetwetwet.png',
    description:
      'Encuentro regional de alta intensidad con fuerte presencia de aficion local.',
    offers: [
      { partner: 'Entradas.com', price: 48, url: 'https://www.entradas.com', available: true },
      { partner: 'Atrapalo', price: 52, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '8',
    title: 'Madrid City Marathon 2026',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-09',
    time: '16:00',
    venue: 'IFEMA / Villaverde',
    city: 'Madrid',
    image: '/bRFtlw_medio-maraton-de-madrid.jpg',
    description:
      'Prueba de fondo por el centro de Madrid con miles de participantes y categorias por tiempo.',
    offers: [
      { partner: 'Ticketmaster España', price: 289, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 295, url: 'https://www.eventim.es', available: true },
      { partner: 'Fnac Entradas', price: 292, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '9',
    title: 'Open Nacional de Tenis - Cuartos',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-22',
    time: '20:30',
    venue: 'Teatro Apolo',
    city: 'Madrid',
    image: '/img_6893.webp',
    description:
      'Cuadros finales del torneo con partidos eliminatorios y ranking nacional.',
    offers: [
      { partner: 'Entradas.com', price: 35, url: 'https://www.entradas.com', available: true },
      { partner: 'El Corte Inglés Entradas', price: 38, url: 'https://www.elcorteingles.es/entradas/', available: true },
    ],
  },
  {
    id: '11',
    title: 'Bilbao Rugby Cup 2026',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-10',
    time: '17:00',
    venue: 'Kobetamendi',
    city: 'Bilbao',
    image: '/entradd (1).jpg',
    description:
      'Torneo de rugby con clubes invitados y formato eliminatorio de fin de semana.',
    offers: [
      { partner: 'Eventim España', price: 178, url: 'https://www.eventim.es', available: true },
      { partner: 'Ticketmaster España', price: 185, url: 'https://www.ticketmaster.es', available: true },
    ],
  },
  {
    id: '12',
    title: 'Barcelona Indoor Athletics',
    artist: undefined,
    category: 'Deporte',
    date: '2026-06-07',
    time: '19:00',
    venue: 'Teatre Coliseum',
    city: 'Barcelona',
    image: '/Euros-9767.jpg',
    description:
      'Jornada de atletismo indoor con pruebas de velocidad, salto y medio fondo.',
    offers: [
      { partner: 'Entradas.com', price: 28, url: 'https://www.entradas.com', available: true },
      { partner: 'Fnac Entradas', price: 30, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '13',
    title: 'Sevilla Stadium Classic',
    artist: undefined,
    category: 'Deporte',
    date: '2026-07-25',
    time: '22:00',
    venue: 'Estadio La Cartuja',
    city: 'Sevilla',
    image: '/Sevilla-stadium-Sevilla-FC-Stadium-Ramon-Sanchez-Pizjuan-Stadium-Football-Ground-Guide-4.jpg',
    description:
      'Partido especial de temporada en estadio con maxima asistencia prevista.',
    offers: [
      { partner: 'Ticketmaster España', price: 45, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 49, url: 'https://www.eventim.es', available: true },
      { partner: 'Atrapalo', price: 47, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '14',
    title: 'Copa Nacional de Gimnasia Artistica',
    artist: undefined,
    category: 'Deporte',
    date: '2026-05-30',
    time: '20:00',
    venue: 'Teatro de la Zarzuela',
    city: 'Madrid',
    image: '/unnamed.jpg',
    description:
      'Competicion nacional de gimnasia con pruebas de suelo, barra y anillas.',
    offers: [
      { partner: 'El Corte Inglés Entradas', price: 42, url: 'https://www.elcorteingles.es/entradas/', available: true },
      { partner: 'Entradas.com', price: 45, url: 'https://www.entradas.com', available: true },
    ],
  },
  {
    id: '15',
    title: 'Mutua Madrid Open - Tenis ATP/WTA',
    artist: undefined,
    category: 'Deporte',
    date: '2026-04-28',
    time: '11:00',
    venue: 'Caja Mágica',
    city: 'Madrid',
    image: '/unnamed (1).jpg',
    description:
      'Tierra batida de primer nivel: sesiones diurnas, ambiente internacional y la oportunidad de ver a las mejores raquetas del mundo.',
    offers: [
      { partner: 'Ticketmaster España', price: 38, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Fnac Entradas', price: 41, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '16',
    title: 'US Stadium Soccer Tour - Los Angeles',
    artist: undefined,
    category: 'Deporte',
    date: '2026-08-14',
    time: '20:00',
    venue: 'SoFi Stadium',
    city: 'Los Angeles',
    image: '/thumb-0fab6f1c38.webp',
    description:
      'Parada estadounidense de gira internacional de futbol en formato estadio.',
    featured: true,
    offers: [
      { partner: 'Ticketmaster España', price: 320, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Eventim España', price: 345, url: 'https://www.eventim.es', available: true },
      { partner: 'Atrapalo', price: 338, url: 'https://www.atrapalo.com/entradas/', available: true },
    ],
  },
  {
    id: '17',
    title: 'US Basketball Showcase - New York',
    artist: undefined,
    category: 'Deporte',
    date: '2026-09-05',
    time: '19:30',
    venue: 'MetLife Stadium',
    city: 'New York',
    image: '/step-inside-metlife-stadium.png',
    description:
      'Exhibicion internacional de baloncesto con jugadores top y alta demanda.',
    offers: [
      { partner: 'Ticketmaster España', price: 210, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Entradas.com', price: 228, url: 'https://www.entradas.com', available: true },
      { partner: 'Fnac Entradas', price: 222, url: 'https://www.fnac.es/comprar-entradas-con-fnac', available: true },
    ],
  },
  {
    id: '18',
    title: 'US Hockey Global Series - Chicago',
    artist: undefined,
    category: 'Deporte',
    date: '2026-10-11',
    time: '20:30',
    venue: 'United Center',
    city: 'Chicago',
    image: '/unnamed (2).jpg',
    description:
      'Serie global de hockey con duelo internacional y formato oficial de temporada.',
    offers: [
      { partner: 'Eventim España', price: 165, url: 'https://www.eventim.es', available: true },
      { partner: 'Ticketmaster España', price: 172, url: 'https://www.ticketmaster.es', available: true },
    ],
  },
  {
    id: '19',
    title: 'US Tennis Masters - Miami',
    artist: undefined,
    category: 'Deporte',
    date: '2026-08-28',
    time: '21:00',
    venue: 'Hard Rock Stadium',
    city: 'Miami',
    image: '/image.jpg',
    description:
      'Masters de tenis en pista dura con cuadros de alto nivel y fase final de gran seguimiento.',
    offers: [
      { partner: 'Ticketmaster España', price: 295, url: 'https://www.ticketmaster.es', available: true },
      { partner: 'Atrapalo', price: 305, url: 'https://www.atrapalo.com/entradas/', available: true },
      { partner: 'Entradas.com', price: 299, url: 'https://www.entradas.com', available: true },
    ],
  },
]

/** Orden estable: fecha ASC, luego título (catálogo, home y enlaces usan este orden). */
export const events: Event[] = [...EVENTS_RAW].sort(
  (a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title, 'es')
)

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)
}

export function getMinPrice(offers: TicketOffer[]): number {
  const available = offers.filter((o) => o.available)
  if (available.length === 0) return 0
  return Math.min(...available.map((o) => o.price))
}

export function getCategoryColor(category: EventCategory): string {
  const map: Record<EventCategory, string> = {
    Concierto: 'bg-[#2a2a2f] text-[#e8e4dc] border border-[#5c5c62]',
    Deporte: 'bg-[#d6b24c] text-[#0a0a0c] border-2 border-[#0a0a0c] font-display font-bold uppercase tracking-wide',
    Teatro: 'bg-[#2a2a2f] text-[#e8e4dc] border border-[#5c5c62]',
    Festival: 'bg-[#2a2a2f] text-[#e8e4dc] border border-[#5c5c62]',
    Comedia: 'bg-[#2a2a2f] text-[#e8e4dc] border border-[#5c5c62]',
  }
  return map[category]
}
