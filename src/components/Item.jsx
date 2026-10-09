import { Link } from 'react-router-dom'

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export default function Item({ producto }) {
  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/producto/${producto.id}`} aria-label={`Ver ${producto.nombre}`}>
        <img className="product-image" src={producto.imagen} alt={`${producto.nombre}, ${producto.marca}`} loading="lazy" />
        <span className="product-tag">{producto.etiqueta}</span>
        <span className="product-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="product-copy">
        <p className="product-origin">{producto.marca} · {producto.capacidad}</p>
        <div className="product-title-row">
          <h3><Link to={`/producto/${producto.id}`}>{producto.nombre}</Link></h3>
          <span className="product-price">{priceFormatter.format(producto.precio)}</span>
        </div>
        <p className="product-notes">{producto.especificaciones} · {producto.interfaz}</p>
      </div>
    </article>
  )
}
