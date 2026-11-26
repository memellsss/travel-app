import Image from 'next/image'
import ClimbingIcon from './ClimbingIcon'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-image">
        <Image src="/climbing-hero.webp" alt="" fill priority unoptimized />
      </div>
      <div className="site-shell hero-inner">
        <div className="hero-content">
          <p className="hero-kicker"><span /> Guia de escalada no Brasil</p>
          <h1 id="hero-title">O próximo passo<br /> <em>é pra cima.</em></h1>
          <p className="hero-copy">Descubra lugares para escalar pelo Brasil, do primeiro boulder às grandes paredes.</p>
          <div className="hero-actions">
            <a href="#mapa" className="action action-lime"><ClimbingIcon name="map" /> Explorar o mapa <ClimbingIcon name="arrow" width="18" height="18" /></a>
            <a href="#destinos" className="action action-glass">Ver destinos <ClimbingIcon name="down" width="17" height="17" /></a>
          </div>
        </div>
        <div className="hero-caption">
          <span className="hero-compass"><ClimbingIcon name="compass" width="34" height="34" /></span>
          <span>SERRA DA MANTIQUEIRA<br /><strong>PEDRA DO BAÚ · SP</strong></span>
        </div>
      </div>
    </section>
  )
}
