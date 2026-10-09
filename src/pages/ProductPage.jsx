import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export default function ProductPage() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetch('/productos.json', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('No pudimos cargar este producto.')
        return response.json()
      })
      .then((productos) => {
        const match = productos.find((item) => item.id === id)
        if (!match) throw new Error('No encontramos ese producto.')
        setProducto(match)
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') setError(fetchError.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [id])

  if (loading) return <p className="catalog-message" role="status">Cargando producto...</p>
  if (error) return <section className="page-intro"><p className="error-message">{error}</p><Link className="text-link" to="/">Volver al catálogo <span aria-hidden="true">↗</span></Link></section>

  const categoryLabel = producto.categoria === 'memorias' ? 'Memorias RAM' : 'Discos rígidos'

  return (
    <section className="product-detail">
      <div className="detail-image-wrap">
        <img src={producto.imagen} alt={`${producto.nombre}, ${producto.marca}`} />
        <span className="product-tag">{producto.etiqueta}</span>
      </div>
      <div className="detail-copy">
        <p className="eyebrow"><Link to={`/categoria/${producto.categoria}`}>Productos / {categoryLabel}</Link></p>
        <h1>{producto.nombre}<em>.</em></h1>
        <p className="detail-origin">Marca: {producto.marca}</p>
        <p className="detail-notes">{producto.especificaciones} · {producto.interfaz}</p>
        <p className="detail-description">{producto.descripcion}</p>
        <div className="detail-price-row"><strong>{priceFormatter.format(producto.precio)}</strong><span>{producto.capacidad}</span></div>
        <p className="detail-note">Retiro y asesoramiento en nuestro local de Morón. Verificá la compatibilidad con tu equipo antes de comprar.</p>
        <Link className="button button-dark" to={`/categoria/${producto.categoria}`}>Seguir explorando <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  )
}
