import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default function Layout() {
  return (
    <div className="site-shell">
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
