"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { useState } from "react";


export default function Comunicados() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeComunicado, setActiveComunicado] = useState<number | null>(null);
    const handleOpenModal = (index: number) => {
      setActiveComunicado(index);
      setIsModalOpen(true);
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setActiveComunicado(null);
    };
    return (
        <div className="min-h-screen flex flex-col dark:bg-gray-900">
            <header className="bg-[#66B5E5] dark:bg-gray-800 shadow-sm">
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
                        Comunicados
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Comunicado de Bienvenida
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                Estimados padres y estudiantes, Es un placer darles la bienvenida al nuevo año escolar en nuestro colegio...
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(0);
                }}
              >
                Leer más →
              </a>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Comunicado de Evento Escolar
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Se invita a la población en general a participar de la Elección y Coronación de Capullo...
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(1);
                }}
              >
                Leer más →
              </a>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Comunicado de Suspensión de Clases
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                 Las clases serán suspendidas debido a...
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(2);
                }}
              >
                Leer más →
              </a>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                 Comunicado de Actividades Extracurriculares
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                 Invitamos a los estudiantes a participar en...
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(3);
                }}
              >
                Leer más →
              </a>
            </div>

                    </div>
                </div>
            </main>
            {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-11/12 max-w-3xl overflow-y-auto"
             style={{ maxHeight: '90vh' }}
             >
            {activeComunicado === 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Comunicado de Bienvenida
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                Estimados padres y estudiantes,
                Es un placer darles la bienvenida al nuevo año escolar 
                en nuestro colegio. Estamos emocionados de comenzar este 
                nuevo ciclo y trabajar juntos para lograr grandes cosas.
                Les recordamos que el primer día de clases es el lunes 5 
                de septiembre a las 8:00 am. Por favor, asegúrense de llegar 
                a tiempo y con todos los materiales necesarios.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Atentamente.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Director Wilson Herrera Jimenez.
                </p>
                <Image src="/mensaje.jpg" alt="Logo" width={300} height={300} className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg"
                />
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Fecha:</strong> 28 de agosto, 2024
                </p>
              </div>
            )}
            {activeComunicado === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Comunicado de Evento Escolar
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                Se invita a la  población en general a participar de la Elección 
                y Coronación de Capullo, Flor Ernestina y Boy Ernestino 2024, por 
                conmemorarse el septuagésimo Aniversario "Bodas de Titanio" de la 
                I.E. Luis E. Pinto Sotomayor.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Atentamente.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Director Wilson Herrera Jimenez.
                </p>
                <Image src="/mensaje1.jpg" alt="Logo" width={300} height={300} className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg"
                />
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Fecha:</strong> 26 de septiembre, 2024
                </p>
              </div>
            )}
            {activeComunicado === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Comunicado de Suspensión de Clases
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                Se informa a toda la comunidad educativa que las clases serán 
                suspendidas el día 15 de octubre debido a trabajos de mantenimiento 
                en las instalaciones eléctricas del colegio. Este cierre temporal 
                tiene como objetivo garantizar la seguridad de los estudiantes, 
                docentes y personal administrativo.
                Agradecemos su comprensión y colaboración.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Atentamente.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Director Wilson Herrera Jimenez.
                </p>
                <Image src="/mensaje2.jpg" alt="Logo" width={300} height={300} className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg"
                />
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Fecha:</strong> 15 de octubre, 2024
                </p>
              </div>
            )}
            {activeComunicado === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Comunicado de Actividades Extracurriculares
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                Nos complace anunciar que el colegio ha organizado una serie de 
                actividades extracurriculares para enriquecer la experiencia 
                educativa de nuestros estudiantes. Entre las actividades programadas 
                se encuentran:
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                 - Taller de Robótica.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  - Clases de Música y Danza.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  - Competencias Deportivas Interescolares.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Atentamente.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Director Wilson Herrera Jimenez.
                </p>
                <Image src="/mensaje3.jpg" alt="Logo" width={300} height={300} className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg"
                />
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Fecha:</strong> 18 de octubre, 2024
                </p>
              </div>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

            <footer className="bg-[#66B5E5] dark:bg-gray-800">
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
