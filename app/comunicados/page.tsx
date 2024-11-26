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
                                    className="text-gray-900 dark:text-white font-bold"
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
                        Comunicados
                    </h1>
                    <div className="space-y-8">
                        {/* Comunicados dinámicos */}
                        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
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


                        <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Comunicado de Evento Escolar
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Estimados padres y estudiantes,
                                Es un placer anunciar que nuestro colegio estará organizando un festival cultural el viernes 23 de octubre. El evento comenzará a las 6:00 pm y contará con música, baile, comida y actividades para todos.
                                Les invitamos a unirse a nosotros para celebrar la diversidad cultural de nuestra comunidad escolar. Por favor, asegúrense de llegar a tiempo y con sus familias.
                                Si tienen alguna pregunta o inquietud, no duden en hacérselo saber.
                                Atentamente,
                                Director Wilson Herrera Jimenez
                            </p>
                            {showFullText && (
                                <>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                                        Si tienen alguna pregunta o inquietud, no duden en hacérselo saber.
                                        Atentamente,
                                        Director Wilson Herrera Jimenez
                                    </p>
                                </>
                            )}
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
