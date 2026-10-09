import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Frutería, inicio">
          <span className="brand-mark" aria-hidden="true">f.</span>
          <span className="brand-name">Frute<span>ría</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink className={linkClass} end to="/">Inicio</NavLink>
          <NavLink className={linkClass} to="/productos">Productos</NavLink>
          <NavLink className={linkClass} to="/categoria/frutas">Frutas</NavLink>
          <NavLink className={linkClass} to="/categoria/verduras">Verduras</NavLink>
          <NavLink className={linkClass} to="/contacto">Contacto</NavLink>
          <a className="nav-link nav-about" href="#nosotros">Nosotros</a>
        </nav>
        <a className="header-note" href="#catalogo"><span aria-hidden="true">↘</span> Fresco, cerca y de estación</a>
      </div>
    </header>
  )
}
