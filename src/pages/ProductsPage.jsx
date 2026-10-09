import ItemListContainer from '../components/ItemListContainer.jsx'

export default function ProductsPage() {
  return (
    <>
      <section className="page-intro category-intro">
        <p className="eyebrow">Tienda / Productos</p>
        <h1>Componentes para tu <em>equipo.</em></h1>
        <p>Memorias RAM y discos para PC y notebook, con asesoramiento en nuestro local de Morón.</p>
      </section>
      <ItemListContainer title="Todo el hardware" />
    </>
  )
}
