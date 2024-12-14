"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import React, { useState } from "react";
import jsPDF from "jspdf";

interface Comunicado {
  title: string;
  content: string;
  date: string;
  imageSrc?: string;
}

function Modal({ isOpen, onClose, title, content, imageSrc, date }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-justify">
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
            width={300}
            height={200}
            className="border-4 border-solid border-[#3299D9] rounded-lg shadow-lg object-contain"
            style={{ maxWidth: "45%", height: "45%" }}
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

export default function Comunicados() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComunicado, setActiveComunicado] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");
  

  const handleOpenModal = (index: number) => {
    setActiveComunicado(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveComunicado(null);
  };

  const handleDownloadPDF = (comunicado: Comunicado) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(comunicado.title, 10, 10);
    doc.setFontSize(12);
    doc.text(`Fecha: ${comunicado.date}`, 10, 20);
    doc.text(`Descripción: ${comunicado.content}`, 10, 30);
    doc.save(`${comunicado.title}.pdf`);
  };

  const handleShare = (comunicado: Comunicado) => {
    const url = window.location.href;
    const text = `Mira este comunicado: ${comunicado.title}\n${url}`;
    if (navigator.share) {
      navigator.share({ title: comunicado.title, text, url });
    } else {
      alert("Tu navegador no soporta la función de compartir.");
    }
  };

  const comunicados = [
    {
      title: "Comunicado de Bienvenida",
      content:
        "Estimados padres y estudiantes, Es un placer darles la bienvenida al nuevo año escolar en nuestro colegio. Estamos emocionados de comenzar este nuevo ciclo y trabajar juntos para lograr grandes cosas. Les recordamos que el primer día de clases es el lunes 5 de septiembre a las 8:00 am. Por favor, asegúrense de llegar a tiempo y con todos los materiales necesarios.",
        date: "18-08-2024",
      relevance: "high",
      imageSrc: "/mensaje.jpg",
    },
    {
      title: "Comunicado de Evento Escolar",
      content:
        "Se invita a la población en general a participar de la Elección y Coronación de Capullo, Flor Ernestina y Boy Ernestino 2024, por conmemorarse el septuagésimo Aniversario Bodas de Titanio de la I.E. Luis E. Pinto Sotomayor.",
      date: "26-09-2024",
      relevance: "medium",
      imageSrc: "/mensaje1.jpg",
    },
    {
      title: "Comunicado de Suspensión de Clases",
      content:
        "Se informa a toda la comunidad educativa que las clases serán suspendidas el día 15 de octubre debido a trabajos de mantenimiento en las instalaciones eléctricas del colegio. Este cierre temporal tiene como objetivo garantizar la seguridad de los estudiantes, docentes y personal administrativo. Agradecemos su comprensión y colaboración.",
      date: "18-10-2024",
      relevance: "low",
      imageSrc: "/mensaje2.jpg",
    },
    {
      title: "Comunicado de Actividades Extracurriculares",
      content:
        "Nos complace anunciar que el colegio ha organizado una serie de actividades extracurriculares para enriquecer la experiencia educativa de nuestros estudiantes. Entre las actividades programadas se encuentran:",
      content1: "- Taller de Robótica.",
      content2: "- Clases de Música y Danza.",
      content3: "- Competencias Deportivas Interescolares.",
      date: "18-10-2024",
      relevance: "low",
      imageSrc: "/mensaje3.jpg",
    },
  ];

  const filteredComunicados = comunicados.filter((comunicado) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return new Date(comunicado.date) > new Date();
    if (filter === "relevance") return comunicado.relevance === "high";
    return false;
  });

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

          <div className="mb-4 flex justify-center">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="all">Todos</option>
              <option value="upcoming">Próximos</option>
              <option value="relevance">Alta Relevancia</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredComunicados.map((comunicado, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 shadow rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {comunicado.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-justify">
                  {comunicado.content.slice(0, 100)}...
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleOpenModal(index)}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    Leer más →
                  </button>
                  <button
                    onClick={() => handleDownloadPDF(comunicado)}
                    className="text-green-600 dark:text-green-400"
                  >
                    Descargar PDF
                  </button>
                  <button
                    onClick={() => handleShare(comunicado)}
                    className="text-red-600 dark:text-red-400"
                  >
                    Compartir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {isModalOpen && activeComunicado !== null && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={comunicados[activeComunicado].title}
          content={comunicados[activeComunicado].content}
          imageSrc={comunicados[activeComunicado].imageSrc}
          date={comunicados[activeComunicado].date}
        />
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
