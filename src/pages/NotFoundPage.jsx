import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="page-intro not-found">
      <p className="eyebrow">Error 404</p>
      <h1>Por acá no hay cosecha.</h1>
      <p>La página que buscás no está en el menú.</p>
      <Link className="button button-dark" to="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
    </section>
  )
}
