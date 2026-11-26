import { navigation, siteName } from '@/constants/climbing'
import ClimbingIcon from './ClimbingIcon'

const photos = [
  {
    name: 'Pedra do Baú (capa)',
    author: 'Rodrigorosa85',
    source: 'https://commons.wikimedia.org/wiki/File:Monumento_Natural_Estadual_da_Pedra_do_Ba%C3%BA_Rodrigo_Rosa_(01).jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    name: 'Pedra do Baú (destino)',
    author: 'Nancy Ayumi Kunihiro',
    source: 'https://commons.wikimedia.org/wiki/File:MONA_Estadual_da_Pedra_do_Ba%C3%BA_-_NANCY_AYUMI_KUNIHIRO(003).jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    name: 'Serra do Cipó',
    author: 'upslon',
    source: 'https://commons.wikimedia.org/wiki/File:Parque_Nacional_da_Serra_do_Cip%C3%B3_(32099569004).jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  {
    name: 'Rampa do Caim, Igatu',
    author: 'Boa Viagem Tropical',
    source: 'https://commons.wikimedia.org/wiki/File:Rampa_do_Caim,_Igatu,_Chapada_Diamantina,_Bahia,_Brasil.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-main">
          <div>
            <a className="brand" href="#inicio" aria-label={`${siteName} — início`}>
              <span className="brand-mark"><ClimbingIcon name="mountain" width="22" height="22" /></span>
              <span>{siteName}<span className="brand-dot" aria-hidden="true">.</span></span>
            </a>
            <p>Guia brasileiro de escalada em rocha.</p>
          </div>
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a href="#inicio" className="footer-top" aria-label="Voltar ao início"><ClimbingIcon name="up" width="19" height="19" /></a>
        </div>
        <div className="footer-bottom">
          <p>{siteName} · Escalada no Brasil</p>
          <details className="footer-credits">
            <summary>Créditos das fotos</summary>
            <ul>
              {photos.map(({ name, author, source, license, licenseUrl }) => (
                <li key={source}><a href={source}>{name}</a> · {author} · <a href={licenseUrl}>{license}</a></li>
              ))}
              <li>Imagens redimensionadas e convertidas para WebP.</li>
            </ul>
          </details>
        </div>
      </div>
    </footer>
  )
}
