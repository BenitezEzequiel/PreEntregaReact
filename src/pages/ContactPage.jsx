import { Link } from 'react-router-dom'

const locations = [
  { neighborhood: 'Morón centro', address: 'Buen Viaje 780', hours: 'Lun a sáb · 9 a 19 h' },
  { neighborhood: 'Morón sur', address: 'Av. Rivadavia 18000', hours: 'Lun a sáb · 9 a 19 h' },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-intro contact-intro">
        <p className="eyebrow">Estamos cerca</p>
        <h1>Pasá a saludar<em>.</em></h1>
        <p>Estamos en Morón para ayudarte a encontrar el componente compatible con tu equipo.</p>
      </section>
      <section className="contact-section">
        <div className="contact-main">
          <p className="eyebrow">Nuestras sedes</p>
          <div className="contact-locations">
            {locations.map((location) => (
              <article className="contact-location" key={location.neighborhood}>
                <span className="contact-number">0{locations.indexOf(location) + 1}</span>
                <div>
                  <h2>{location.neighborhood}</h2>
                  <p>{location.address}, Buenos Aires</p>
                  <p>{location.hours}</p>
                </div>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">¿Tenés una consulta?</p>
          <h2>Hablemos.</h2>
          <p>Escribinos por disponibilidad, compatibilidad, pedidos o servicio técnico.</p>
          <a className="text-link" href="mailto:hola@bytemoron.com.ar">hola@bytemoron.com.ar <span aria-hidden="true">↗</span></a>
          <p className="contact-phone">+54 11 4321 5678</p>
          <Link className="button button-dark" to="/productos">Ver productos <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>
    </>
  )
}
