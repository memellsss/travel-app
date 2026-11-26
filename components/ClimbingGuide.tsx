import ClimbingIcon from './ClimbingIcon'

const tips = [
  {
    icon: 'sun',
    title: 'Olhe a previsão',
    description: 'Cheque chuva e vento para a região. Se o tempo virar, tenha um plano para adiar ou mudar de setor.',
  },
  {
    icon: 'compass',
    title: 'Confirme o acesso',
    description: 'Procure o croqui do setor e confirme com o parque ou a comunidade local os horários, restrições e caminhos de aproximação.',
  },
  {
    icon: 'shield',
    title: 'Escolha a via com calma',
    description: 'Confira o grau e o equipamento exigido. Se for sua primeira vez na rocha, procure instrução e vá com alguém experiente.',
  },
] as const

export default function ClimbingGuide() {
  return (
    <section className="section guide-section" id="guia" aria-labelledby="guide-title">
      <div className="site-shell guide-inner">
        <div>
          <p className="eyebrow"><ClimbingIcon name="layers" /> Guia de campo</p>
          <h2 id="guide-title">Antes de ir.</h2>
          <p className="guide-intro">Achou seu pico? Três coisas para checar antes de pôr o pé na trilha.</p>
          <a href="#mapa" className="action action-lime">Voltar ao mapa <ClimbingIcon name="arrow" width="17" height="17" /></a>
        </div>
        <ol className="guide-tips">
          {tips.map(({ icon, title, description }) => (
            <li key={title}>
              <span className="guide-icon"><ClimbingIcon name={icon} /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
