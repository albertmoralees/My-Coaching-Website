export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mi Coaching. Todos los derechos reservados.
      </div>
    </footer>
  )
}
