export const siteName = 'Travel App'

export const navigation = [
  { href: '#inicio', label: 'Início' },
  { href: '#mapa', label: 'Mapa' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#guia', label: 'Guia' },
]

export const disciplines = ['Esportiva', 'Tradicional', 'Boulder'] as const

type Discipline = typeof disciplines[number]

export type ClimbingSpot = {
  id: string
  name: string
  location: string
  discipline: Discipline
  description: string
  mapQuery: string
  image?: { src: string; alt: string }
}

export const climbingSpots: ClimbingSpot[] = [
  {
    id: 'pedra-do-bau',
    name: 'Pedra do Baú',
    location: 'São Bento do Sapucaí, SP',
    discipline: 'Tradicional',
    description: 'Paredões de granito e vias de várias enfiadas em um dos cartões-postais da Serra da Mantiqueira.',
    mapQuery: 'Pedra do Baú, São Bento do Sapucaí, SP',
    image: { src: '/climbing-bau.webp', alt: 'Paredões da Pedra do Baú acima da mata da Mantiqueira' },
  },
  {
    id: 'serra-do-cipo',
    name: 'Serra do Cipó',
    location: 'Santana do Riacho, MG',
    discipline: 'Esportiva',
    description: 'Um dos polos brasileiros da escalada esportiva em calcário, com vários setores e estilos de via.',
    mapQuery: 'Grupo 3 Escalada, Serra do Cipó, Santana do Riacho, MG',
    image: { src: '/climbing-cipo.webp', alt: 'Paisagem rochosa da Serra do Cipó, em Minas Gerais' },
  },
  {
    id: 'igatu',
    name: 'Igatu',
    location: 'Andaraí, BA',
    discipline: 'Boulder',
    description: 'Blocos rochosos espalhados pelos campos e arredores da vila histórica na Chapada Diamantina.',
    mapQuery: 'Igatu, Andaraí, BA',
    image: { src: '/climbing-igatu.webp', alt: 'Formações rochosas na região de Igatu, na Chapada Diamantina' },
  },
  {
    id: 'morro-da-urca',
    name: 'Morro da Urca',
    location: 'Rio de Janeiro, RJ',
    discipline: 'Tradicional',
    description: 'Vias em rocha com vista para a Baía de Guanabara, no mesmo complexo do Pão de Açúcar.',
    mapQuery: 'Morro da Urca, Rio de Janeiro, RJ',
  },
  {
    id: 'anhangava',
    name: 'Morro do Anhangava',
    location: 'Quatro Barras, PR',
    discipline: 'Esportiva',
    description: 'Clássico da escalada paranaense, com setores de rocha ao longo do morro, na Serra da Baitaca.',
    mapQuery: 'Morro do Anhangava, Quatro Barras, PR',
  },
  {
    id: 'cocalzinho',
    name: 'Cocalzinho de Goiás',
    location: 'Cocalzinho de Goiás, GO',
    discipline: 'Boulder',
    description: 'Blocos de quartzito entre os campos do Cerrado, na região da Serra dos Pireneus.',
    mapQuery: 'Cidade de Pedra, Cocalzinho de Goiás, GO',
  },
]
