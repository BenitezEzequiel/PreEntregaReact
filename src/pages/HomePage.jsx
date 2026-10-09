import { Link } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer.jsx'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Frutas y verduras frescas en un mercado" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Frutas y verduras · De estación</p>
          <h1>Lo fresco<br />se elige <em>cerca.</em></h1>
          <p className="hero-description">Frutas y verduras de temporada, seleccionadas en su punto y traídas de productores que conocemos.</p>
          <Link className="button button-light" to="/productos">Ver productos <span aria-hidden="true">↗</span></Link>
        </div>
        <span className="hero-index">01 / 03</span>
        <span className="hero-side-note">De la tierra a tu mesa</span>
      </section>

      <div className="origin-strip" aria-label="Nuestro compromiso">
        <span>De estación</span><i />
        <span>Productores locales</span><i />
        <span>Selección diaria</span><i />
        <span>Comercio justo</span>
      </div>

      <ItemListContainer
        title="La huerta llega a tu mesa."
        description="Frutas y verduras frescas, elegidas con cuidado y listas para disfrutar."
      />

      <section className="story-band" id="nosotros">
        <div className="story-image" role="img" aria-label="Ingredientes frescos de estación" />
        <div className="story-copy">
          <p className="eyebrow">Un poco de nosotros</p>
          <h2>Del productor.<br /><em>A tu mesa.</em></h2>
          <p>En Frutería creemos que comer rico empieza por elegir bien. Trabajamos con productores de la zona para acercarte productos frescos, de temporada y con una historia que vale la pena conocer.</p>
          <Link className="text-link" to="/contacto">Conocé nuestras sedes <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}
