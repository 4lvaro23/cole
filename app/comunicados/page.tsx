"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { useState } from "react";


export default function Comunicados() {

    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText((prevState) => !prevState);
    };

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
                                 href="/comunicados"
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
                        Comunicados
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Comunicados dinámicos */}
                        <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Comunicado de Bienvenida
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Estimados padres y estudiantes,
                                Es un placer darles la bienvenida al nuevo año escolar en nuestro colegio. Estamos emocionados de comenzar este nuevo ciclo y trabajar juntos para lograr grandes cosas.
                                Les recordamos que el primer día de clases es el lunes 5 de septiembre a las 8:00 am. Por favor, asegúrense de llegar a tiempo y con todos los materiales necesarios.
                            </p>
                            {showFullText && (
                                <>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                                        Si tienen alguna pregunta o inquietud, no duden en hacérselo saber.
                                        Atentamente,
                                        Director Wilson Herrera Jimenez
                                    </p>
                                    <Image src="/mensaje.jpg" alt="Logo" width={300} height={300} />
                                </>
                            )}
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleToggleText();
                                }}
                            >
                                {showFullText ? "Leer menos ←" : "Leer más →"}
                            </a>
                        </div>


                        <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Comunicado de Evento Escolar
                            </h2>
                            <p 
                            className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                            Se invita a la  población en general a participar de la Elección 
                            y Coronación de Capullo, Flor Ernestina y Boy Ernestino 2024, por 
                            conmemorarse el septuagésimo Aniversario "Bodas de Titanio" de la 
                            I.E. Luis E. Pinto Sotomayor.
                            </p>
                            {showFullText && (
                                <>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                                        Si tienen alguna pregunta o inquietud, no duden en hacérselo saber.
                                        Atentamente,
                                        Director Wilson Herrera Jimenez
                                    </p>
                                    <Image src="/mensaje1.jpg" alt="Logo" width={300} height={300} />
                                </>
                            )}
                            <p className="text-gray-600 dark:text-gray-300 mt-1">
                            <strong>Fecha:</strong> 26 de septiembre, 2024

                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleToggleText();
                                }}
                            >
                                {showFullText ? "Leer menos ←" : "Leer más →"}
                            </a>
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
