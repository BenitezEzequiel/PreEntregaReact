import ItemListContainer from '../components/ItemListContainer.jsx'

export default function ProductsPage() {
  return (
    <>
      <section className="page-intro category-intro">
        <p className="eyebrow">Tienda / Productos</p>
        <h1>La selección <em>fresca.</em></h1>
        <p>Frutas y verduras de estación, elegidas cada mañana con productores locales.</p>
      </section>
      <ItemListContainer title="Todo lo que está en temporada" />
    </>
  )
}
