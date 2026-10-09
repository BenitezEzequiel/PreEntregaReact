import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Byte Morón, inicio">
          <span className="brand-mark" aria-hidden="true">b.</span>
          <span className="brand-name">byte<span>morón</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink className={linkClass} end to="/">Inicio</NavLink>
          <NavLink className={linkClass} to="/productos">Productos</NavLink>
          <NavLink className={linkClass} to="/categoria/memorias">Memorias</NavLink>
          <NavLink className={linkClass} to="/categoria/discos-rigidos">Discos rígidos</NavLink>
          <NavLink className={linkClass} to="/contacto">Contacto</NavLink>
          <a className="nav-link nav-about" href="#nosotros">Nosotros</a>
        </nav>
        <Link className="header-note" to="/contacto"><span aria-hidden="true">↘</span> Local en Morón</Link>
      </div>
    </header>
  )
}
