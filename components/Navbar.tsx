'use client'

import { useEffect, useRef, useState } from 'react'
import { navigation, siteName } from '@/constants/climbing'
import ClimbingIcon from './ClimbingIcon'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function updateSection() {
      setActiveSection(window.location.hash || '#inicio')
    }

    updateSection()
    window.addEventListener('hashchange', updateSection)
    return () => window.removeEventListener('hashchange', updateSection)
  }, [])

  return (
    <header className="site-header">
      <div className="site-shell header-inner" onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButton.current?.focus()
        }
      }}>
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label={`${siteName} — início`}>
          <span className="brand-mark"><ClimbingIcon name="mountain" width="22" height="22" /></span>
          <span>{siteName}<span className="brand-dot" aria-hidden="true">.</span></span>
        </a>
        <button
          type="button"
          ref={menuButton}
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ClimbingIcon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <nav id="site-navigation" className="site-nav" data-open={menuOpen} aria-label="Navegação principal">
          <ul>
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <a href={href} aria-current={activeSection === href ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="action action-header" href="#mapa">
          Explorar mapa <ClimbingIcon name="external" width="16" height="16" />
        </a>
      </div>
    </header>
  )
}
