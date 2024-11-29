"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import React, { useState } from "react";
export default function Eventos() {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <header className="bg-[#3299D9] dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-semibold text-white">
              I.E Luis E. Pinto Sotomayor
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
            <li>
                <a
                  href="/leps"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  LEPS
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/comunicados"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  Comunicados
                </a>
              </li>
              <li>
                <a
                  href="/eventos"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  Ingresar
                </a>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow bg-[#D5E7F2] dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Eventos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Coronación Miss y Mister Ernestino 2024
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                 Elección y Coronación de Miss y Mister Ernestino 2024, 
                 ven y se participe de Evento muy importante , donde se 
                 elegirá   nuestra Soberana Ernestina y nuestro Soberano 
                 Ernestino.
                 {showFullText && (
          <>
            <br />
            <Image src="/evento1.jpg" alt="Logo" width={200} height={200} />
          </>
        )}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>Fecha:</strong> 10 de diciembre, 2024

              </p>
              <button
        onClick={() => setShowFullText(!showFullText)}
        className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
      >
        {showFullText ? "Leer menos ←" : "Leer más →"}
      </button>
            </div>

            <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        GRAN CONCURSO DE DANZAS ERNESTINAS 2024
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
        VEN Y PARTICIPA DE ESTE MARAVILLOSO EVENTO, NUESTROS ESTUDIANTES DEL
        NIVEL SECUNDARIO DEMOSTRARÁN SU DESTREZA EN LAS DANZAS NACIONALES E
        INTERNACIONALES...
        {showFullText && (
          <>
            <br />
            TE ESPERAMOS
            <br />
            VENTA DE ENTRADAS EN LA I.E. NIVEL SECUNDARIA
            <Image src="/evento2.jpg" alt="Logo" width={200} height={200} />
          </>
        )}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mt-1">
        <strong>Fecha:</strong> 28 de octubre, 2024
      </p>

      <button
        onClick={() => setShowFullText(!showFullText)}
        className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
      >
        {showFullText ? "Leer menos ←" : "Leer más →"}
      </button>
    </div>
    <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        INVITACIÓN AL GRAN CONCURSO GASTRONÓMICO 2024
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
         Hacemos extensiva la invitación a toda la comunidad educativa 
         de la I.E. Luis E. Pinto Sotomayor y público en general a participar 
         y disfrutar del concurso gastronómico Orgnazido por los Estudiantes 
         del NIVEL SECUNDARIO.
        {showFullText && (
          <>
            <br />
            <Image src="/evento3.jpg" alt="Logo" width={200} height={200} />
          </>
        )}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mt-1">
        <strong>Fecha:</strong> 17 de julio, 2024
      </p>

      <button
        onClick={() => setShowFullText(!showFullText)}
        className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
      >
        {showFullText ? "Leer menos ←" : "Leer más →"}
      </button>
    </div>
  
          </div>
        </div>
      </main>

      <footer className="bg-[#3299D9] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white dark:text-gray-300 mb-4 md:mb-0 font-bold">
              © 2024 Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold"
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
