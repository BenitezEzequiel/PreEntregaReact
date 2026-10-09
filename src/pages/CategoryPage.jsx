import { Link, useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer.jsx'

const categories = {
  frutas: { label: 'Frutas de estación', intro: 'Fruta fresca, elegida en su punto y directo de productores locales.' },
  verduras: { label: 'Verduras y hortalizas', intro: 'Productos de huerta para cocinar rico, simple y de temporada.' },
}

export default function CategoryPage() {
  const { categoria } = useParams()
  const current = categories[categoria]

  if (!current) {
    return (
      <section className="page-intro">
        <p className="eyebrow">Colección</p>
        <h1>Esta categoría no existe.</h1>
        <Link className="text-link" to="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
      </section>
    )
  }

  return (
    <>
      <section className="page-intro category-intro">
        <p className="eyebrow">Tienda / Colección</p>
        <h1>{current.label}<em>.</em></h1>
        <p>{current.intro}</p>
      </section>
      <ItemListContainer title={current.label} category={categoria} />
    </>
  )
}
