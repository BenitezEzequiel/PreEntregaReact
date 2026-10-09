import { Link } from 'react-router-dom'

const locations = [
  { neighborhood: 'Palermo', address: 'Gurruchaga 812', hours: 'Lun a sáb · 9 a 20 h' },
  { neighborhood: 'Villa Crespo', address: 'Forest 420', hours: 'Lun a sáb · 9 a 20 h' },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-intro contact-intro">
        <p className="eyebrow">Estamos cerca</p>
        <h1>Pasá a saludar<em>.</em></h1>
        <p>Te esperamos para elegir juntos algo rico y de estación.</p>
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
          <p>Escribinos por productos, pedidos especiales o para conocer más sobre nuestros productores.</p>
          <a className="text-link" href="mailto:hola@fruteria.com.ar">hola@fruteria.com.ar <span aria-hidden="true">↗</span></a>
          <p className="contact-phone">+54 11 4321 5678</p>
          <Link className="button button-dark" to="/productos">Ver productos <span aria-hidden="true">↗</span></Link>
        </aside>
      </section>
    </>
  )
}
