"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import React, { useState } from "react";

function Modal({ isOpen, onClose, title, content, imageSrc, date }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-justify mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-justify mb-4">
          {content}
        </p>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Evento"
            layout="responsive"
            width={200}
            height={100}
            className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg object-contain"
            style={{ maxWidth: "40%", height: "40%" }}
          />
        )}
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <strong>Fecha:</strong> {date}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default function Eventos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setActiveEvent(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveEvent(null);
  };

  const eventos = [
    {
      title: "Coronación Miss y Mister Ernestino 2024",
      content:
        "Elección y Coronación de Miss y Mister Ernestino 2024. Ven y participa de este evento muy importante, donde se elegirá a nuestra Soberana Ernestina y nuestro Soberano Ernestino.",
      date: "10 de diciembre, 2024",
      imageSrc: "/evento1.jpg",
    },
    {
      title: "Gran Concurso de Danzas Ernestinas 2024",
      content:
        "Ven y participa de este maravilloso evento, donde nuestros estudiantes del nivel secundario demostrarán su destreza en las danzas nacionales e internacionales.",
      date: "28 de octubre, 2024",
      imageSrc: "/evento2.jpg",
    },
    {
      title: "Invitación al Gran Concurso Gastronómico 2024",
      content:
        "Hacemos extensiva la invitación a toda la comunidad educativa y público en general a participar y disfrutar del concurso gastronómico organizado por los estudiantes del nivel secundario.",
      date: "17 de julio, 2024",
      imageSrc: "/evento3.jpg",
    },
  ];

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
            {eventos.map((evento, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 shadow rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {evento.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                  {evento.content.slice(0, 100)}...
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModal(index);
                  }}
                >
                  Leer más →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {isModalOpen && activeEvent !== null && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={eventos[activeEvent].title}
          content={eventos[activeEvent].content}
          imageSrc={eventos[activeEvent].imageSrc}
          date={eventos[activeEvent].date}
        />
      )}

<footer className="bg-[#3299D9] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white dark:text-gray-300 mb-4 md:mb-0 font-bold">
              © 2024 Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold"
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