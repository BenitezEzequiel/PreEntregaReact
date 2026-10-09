import { Link, useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer.jsx'

const categories = {
  memorias: { label: 'Memorias RAM', intro: 'Módulos para actualizar tu PC o notebook. Te ayudamos a confirmar compatibilidad.' },
  'discos-rigidos': { label: 'Discos rígidos', intro: 'Más espacio para tu equipo, con opciones de almacenamiento para distintos usos.' },
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
