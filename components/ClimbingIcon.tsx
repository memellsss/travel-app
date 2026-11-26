import type { SVGProps } from 'react'

const artwork = {
  mountain: <><path d="m2 19 7.5-13 4 7 2.5-4L22 19H2Z" /><path d="m7.2 10 2.3 2.1 2.3-2.1" /></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15m6-12v15" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <><path d="M4 12h15m-6-6 6 6-6 6" /></>,
  external: <><path d="M6 18 18 6M7 6h11v11" /></>,
  down: <><path d="M12 4v15m-6-6 6 6 6-6" /></>,
  up: <><path d="M12 20V5m-6 6 6-6 6 6" /></>,
  chevron: <path d="m9 5 7 7-7 7" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  shield: <><path d="M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10Z" /><path d="m9 12 2 2 4-4" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5" /></>,
  search: <><circle cx="10.5" cy="10.5" r="5.5" /><path d="m15 15 5 5" /></>,
}

export default function ClimbingIcon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: keyof typeof artwork }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {artwork[name]}
    </svg>
  )
}
