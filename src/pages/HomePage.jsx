import { Link } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer.jsx'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Componentes electrónicos para computadora" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Hardware · Asesoramiento local</p>
          <h1>Más velocidad.<br />Más <em>espacio.</em></h1>
          <p className="hero-description">Memorias RAM y discos para actualizar tu computadora. Te ayudamos a encontrar el componente compatible con tu equipo.</p>
          <Link className="button button-light" to="/productos">Ver productos <span aria-hidden="true">↗</span></Link>
        </div>
        <span className="hero-index">01 / 03</span>
        <span className="hero-side-note">De la tierra a tu mesa</span>
      </section>

      <div className="origin-strip" aria-label="Nuestro compromiso">
        <span>Marcas seleccionadas</span><i />
        <span>Compatibilidad asesorada</span><i />
        <span>Retiro en Morón</span><i />
        <span>Atención personalizada</span>
      </div>

      <ItemListContainer
        title="Actualizá tu equipo."
        description="Memorias y almacenamiento para que tu computadora acompañe lo que necesitás hacer."
      />

      <section className="story-band" id="nosotros">
        <div className="story-image" role="img" aria-label="Componentes internos de una computadora" />
        <div className="story-copy">
          <p className="eyebrow">Tecnología cerca tuyo</p>
          <h2>Tu equipo.<br /><em>Bien armado.</em></h2>
          <p>Somos un local de Morón especializado en memorias y discos. Te damos una mano para revisar compatibilidad, elegir capacidad y llevarte el componente indicado para tu PC o notebook.</p>
          <Link className="text-link" to="/contacto">Visitá el local en Morón <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}
