import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Mi Coaching</h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className="hover:text-green-600">Inicio</NavLink></li>
          <li><NavLink to="/services" className="hover:text-green-600">Servicios</NavLink></li>
          <li><NavLink to="/blog" className="hover:text-green-600">Blog</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-green-600">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
