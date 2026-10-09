import { useState } from 'react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Ezequiel Benítez', role: 'Atención y ventas', initials: 'EB' },
  { name: 'Lucía Peralta', role: 'Compatibilidad de hardware', initials: 'LP' },
  { name: 'Tomás Ríos', role: 'Servicio técnico', initials: 'TR' },
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
            <span className="brand-mark" aria-hidden="true">b.</span>
            <span className="brand-name">byte<span>morón</span></span>
          </Link>
          <p>Hardware y asesoramiento.<br />A unas cuadras de casa.</p>
          <a className="footer-email" href="mailto:hola@bytemoron.com.ar">hola@bytemoron.com.ar ↗</a>
        </div>

        <div className="footer-column">
          <h2>Componentes</h2>
          <Link to="/productos">Todos los productos</Link>
          <Link to="/categoria/memorias">Memorias RAM</Link>
          <Link to="/categoria/discos-rigidos">Discos rígidos</Link>
          <a href="mailto:hola@bytemoron.com.ar?subject=Privacidad">Política de privacidad</a>
          <a href="mailto:hola@bytemoron.com.ar?subject=Terminos%20y%20condiciones">Términos y condiciones</a>
        </div>

        <div className="footer-column footer-locations" id="sedes">
          <h2>Encontranos</h2>
          <p>Morón centro<br />Buen Viaje 780, Morón</p>
          <p>Morón sur<br />Av. Rivadavia 18000, Morón</p>
          <a href="mailto:hola@bytemoron.com.ar">Cómo llegar ↗</a>
        </div>

        <div className="newsletter" id="newsletter">
          <p className="eyebrow">Novedades del local</p>
          <h2>Stock y tecnología.</h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="visually-hidden" htmlFor="newsletter-email">Tu correo electrónico</label>
            <input id="newsletter-email" type="email" placeholder="Tu correo electrónico" required disabled={subscribed} />
            <button type="submit" aria-label="Suscribirme" disabled={subscribed}>{subscribed ? '✓' : '↗'}</button>
          </form>
          <p className="newsletter-status" role="status">{subscribed ? '¡Listo! Ya estás en la lista.' : 'Productos nuevos y ofertas, directo a tu correo.'}</p>
        </div>
      </div>

      <div className="team-section">
        <div className="team-heading">
          <p className="eyebrow">El equipo de Byte Morón</p>
          <h2>Tecnología con <em>respaldo.</em></h2>
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
        <p>© 2026 Byte Morón. Marca y contenido protegidos por propiedad intelectual.</p>
        <p>Morón, Buenos Aires, Argentina.</p>
      </div>
    </footer>
  )
}
