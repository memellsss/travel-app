'use client'

import { useState } from 'react'
import Image from 'next/image'
import { climbingSpots, disciplines } from '@/constants/climbing'
import ClimbingIcon from './ClimbingIcon'

type Filter = 'Todos' | typeof disciplines[number]

const filters: Filter[] = ['Todos', ...disciplines]
const featuredSpots = climbingSpots.filter((spot) => spot.image)
const embedKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY?.trim()

function normalized(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export default function ClimbingExplorer() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(climbingSpots[0].id)
  const searchText = normalized(search.trim())
  const visibleSpots = climbingSpots.filter((spot) =>
    (filter === 'Todos' || spot.discipline === filter) &&
    normalized(`${spot.name} ${spot.location}`).includes(searchText)
  )
  const selected = visibleSpots.find((spot) => spot.id === selectedId) ?? visibleSpots[0]
  const query = selected ? encodeURIComponent(selected.mapQuery) : ''
  const embedUrl = embedKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(embedKey)}&q=${query}&zoom=14&language=pt-BR&region=BR`
    : `https://www.google.com/maps?q=${query}&z=14&hl=pt-BR&output=embed`

  function clearFilters() {
    setSearch('')
    setFilter('Todos')
  }

  return (
    <>
      <section className="section explorer-section" id="mapa" aria-labelledby="map-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><ClimbingIcon name="compass" /> Mapa de escalada</p>
              <h2 id="map-title">Encontre seu próximo pico.</h2>
            </div>
            <p>Filtre por modalidade ou busque por cidade. Escolha um destino para explorar a região no mapa.</p>
          </div>

          <div className="explorer">
            <div className="explorer-sidebar">
              <div className="explorer-tools">
                <div className="explorer-list-heading">
                  <h3>Pontos de escalada</h3>
                  <span className="result-count" aria-live="polite">
                    {visibleSpots.length} {visibleSpots.length === 1 ? 'local' : 'locais'}
                  </span>
                </div>
                <label className="search-field">
                  <ClimbingIcon name="search" width="18" height="18" />
                  <span className="sr-only">Buscar destino, cidade ou estado</span>
                  <input type="search" placeholder="Buscar destino ou cidade" value={search} onChange={(event) => setSearch(event.target.value)} />
                </label>
                <div className="filters" role="group" aria-label="Filtrar por modalidade">
                  {filters.map((option) => (
                    <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>
                  ))}
                </div>
              </div>
              {visibleSpots.length > 0 ? (
                <ul className="spot-list">
                  {visibleSpots.map((spot) => (
                    <li key={spot.id}>
                      <button type="button" className="spot-option" aria-pressed={selected?.id === spot.id} onClick={() => setSelectedId(spot.id)}>
                        <span className="spot-icon"><ClimbingIcon name="pin" width="19" height="19" /></span>
                        <span className="spot-label"><strong>{spot.name}</strong><small>{spot.location}</small></span>
                        <ClimbingIcon name="chevron" width="15" height="15" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-results">
                  <p>Nenhum pico encontrado.</p>
                  <button type="button" onClick={clearFilters}>Limpar filtros</button>
                </div>
              )}
            </div>
            <div className="map-panel">
              {selected ? (
                <>
                  <div className="map-viewport">
                    <iframe
                      key={selected.id}
                      title={`Google Maps — ${selected.name}`}
                      src={embedUrl}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="map-details">
                    <div className="map-description" aria-live="polite">
                      <span className="spot-type">{selected.discipline}</span>
                      <h3>{selected.name}</h3>
                      <p>{selected.description}</p>
                    </div>
                    <div className="map-actions">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noopener noreferrer" className="map-link">
                        Google Maps <ClimbingIcon name="external" width="16" height="16" />
                      </a>
                      <a href={`https://www.google.com/maps/dir/?api=1&destination=${query}`} target="_blank" rel="noopener noreferrer" className="map-link">
                        Como chegar <ClimbingIcon name="arrow" width="16" height="16" />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="map-viewport map-empty">
                  <ClimbingIcon name="map" width="32" height="32" />
                  <p>Ajuste a busca ou os filtros para mostrar um destino no mapa.</p>
                </div>
              )}
            </div>
          </div>
          <p className="map-note"><ClimbingIcon name="pin" width="15" height="15" /> Os pontos indicam a região de escalada. Confirme a aproximação e o acesso ao setor antes de sair.</p>
        </div>
      </section>

      <section className="section destinations-section" id="destinos" aria-labelledby="destinations-title">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><ClimbingIcon name="mountain" /> Destinos em destaque</p>
              <h2 id="destinations-title">Três jeitos de ir pra rocha.</h2>
            </div>
            <a className="text-link" href="#mapa" onClick={clearFilters}>Ver todos no mapa <ClimbingIcon name="arrow" width="18" height="18" /></a>
          </div>
          <div className="destination-grid">
            {featuredSpots.map((spot) => spot.image && (
              <article className="destination-card" key={spot.id}>
                <div className="destination-image">
                  <Image src={spot.image.src} alt={spot.image.alt} fill unoptimized />
                  <span className="destination-tag">{spot.discipline}</span>
                </div>
                <div className="destination-body">
                  <p className="destination-location"><ClimbingIcon name="pin" width="15" height="15" /> {spot.location}</p>
                  <h3>{spot.name}</h3>
                  <p>{spot.description}</p>
                  <a className="text-link" href="#mapa" aria-label={`Ver ${spot.name} no mapa`} onClick={() => {
                    clearFilters()
                    setSelectedId(spot.id)
                  }}>Ver no mapa <ClimbingIcon name="arrow" width="16" height="16" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
