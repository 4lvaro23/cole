import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";

export default function Eventos() {
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
                  className="text-gray-900 dark:text-white font-bold"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
            Eventos
          </h1>
          <div className="space-y-8">
            {/* Eventos dinámicos */}
            <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Evento 1: Feria Educativa
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Únase a nuestra feria educativa anual, donde los estudiantes
                mostrarán sus proyectos e investigaciones. Habrá actividades
                para toda la familia.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>Fecha:</strong> 10 de diciembre, 2024
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
              >
                Leer más →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Evento 2: Concierto Navideño
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Acompáñenos en un concierto lleno de magia y espíritu navideño,
                organizado por nuestros talentosos estudiantes y profesores.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>Fecha:</strong> 20 de diciembre, 2024
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
              >
                Leer más →
              </a>
            </div>
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
