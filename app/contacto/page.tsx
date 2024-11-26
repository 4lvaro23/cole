import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
              I.E Luis E. Pinto Sotomayor
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/comunicados"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Comunicados
                </a>
              </li>
              <li>
                <a
                  href="/eventos"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-gray-900 dark:text-white font-bold"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Contacto
          </h1>
          <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Si tienes preguntas, comentarios o necesitas más información,
              ponte en contacto con nosotros. Estamos aquí para ayudarte.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              © 2024 Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
