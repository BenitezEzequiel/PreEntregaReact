import { useState } from 'react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Lucía Peralta', role: 'Selección y calidad', initials: 'LP' },
  { name: 'Tomás Ríos', role: 'Productores locales', initials: 'TR' },
  { name: 'Malena Soto', role: 'Atención y comunidad', initials: 'MS' },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true">f.</span>
            <span className="brand-name">Frute<span>ría</span></span>
          </Link>
          <p>Fresco y de estación.<br />Cerca de quienes producen.</p>
          <a className="footer-email" href="mailto:hola@fruteria.com.ar">hola@fruteria.com.ar ↗</a>
        </div>

        <div className="footer-column">
          <h2>La tienda</h2>
          <Link to="/productos">Todos los productos</Link>
          <Link to="/categoria/frutas">Frutas de estación</Link>
          <Link to="/categoria/verduras">Verduras y hortalizas</Link>
          <a href="mailto:hola@fruteria.com.ar?subject=Privacidad">Política de privacidad</a>
          <a href="mailto:hola@fruteria.com.ar?subject=Terminos%20y%20condiciones">Términos y condiciones</a>
        </div>

        <div className="footer-column footer-locations" id="sedes">
          <h2>Encontranos</h2>
          <p>Palermo<br />Gurruchaga 812, Buenos Aires</p>
          <p>Villa Crespo<br />Forest 420, Buenos Aires</p>
          <a href="mailto:hola@fruteria.com.ar">Cómo llegar ↗</a>
        </div>

        <div className="newsletter" id="newsletter">
          <p className="eyebrow">Una carta breve, cada tanto</p>
          <h2>Novedades frescas.</h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="visually-hidden" htmlFor="newsletter-email">Tu correo electrónico</label>
            <input id="newsletter-email" type="email" placeholder="Tu correo electrónico" required disabled={subscribed} />
            <button type="submit" aria-label="Suscribirme" disabled={subscribed}>{subscribed ? '✓' : '↗'}</button>
          </form>
          <p className="newsletter-status" role="status">{subscribed ? '¡Listo! Ya estás en la lista.' : 'Novedades de temporada, directo a tu correo.'}</p>
        </div>
      </div>

      <div className="team-section">
        <div className="team-heading">
          <p className="eyebrow">Las personas detrás de cada elección</p>
          <h2>Un trabajo <em>compartido.</em></h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.initials}>
              <span className="team-avatar" aria-hidden="true">{person.initials}</span>
              <div><h3>{person.name}</h3><p>{person.role}</p></div>
              <span className="team-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>

      <div className="footer-bottom" id="privacidad">
        <p>© 2026 Frutería. Marca y contenido protegidos por propiedad intelectual.</p>
        <p>Hecho despacio en Buenos Aires, Argentina.</p>
      </div>
    </footer>
  )
}
