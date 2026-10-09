import { useEffect, useState } from 'react'
import Item from './Item.jsx'

export default function ItemListContainer({ title, description, category }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetch('/productos.json', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('No pudimos cargar el catálogo.')
        return response.json()
      })
      .then(setProductos)
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') setError(fetchError.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  const visibleProducts = category
    ? productos.filter((producto) => producto.categoria === category)
    : productos

  return (
    <section className="catalog-section" id="catalogo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Byte Morón · Componentes disponibles</p>
          <h2>{title}</h2>
          {description && <p className="section-description">{description}</p>}
        </div>
        {!category && <span className="catalog-count">{productos.length} productos</span>}
      </div>
      {loading && <p className="catalog-message" role="status">Preparando la selección...</p>}
      {error && <p className="catalog-message error-message" role="alert">{error}</p>}
      {!loading && !error && visibleProducts.length === 0 && (
        <p className="catalog-message">Todavía no hay productos en esta categoría.</p>
      )}
      {!loading && !error && visibleProducts.length > 0 && (
        <div className="product-grid">
          {visibleProducts.map((producto) => <Item key={producto.id} producto={producto} />)}
        </div>
      )}
    </section>
  )
}
