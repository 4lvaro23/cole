"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [documentId, setDocumentId] = useState(""); 
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && lastName.trim() && email.trim() && message.trim() && datetime.trim()) {
      const newMessage = {
        name: name,
        lastName: lastName,
        email: email,
        documentId: documentId,
        phone: phone,
        message: message,
        datetime: datetime,
      };

      const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      storedMessages.push(newMessage);
      localStorage.setItem("contactMessages", JSON.stringify(storedMessages));
      setName("");
      setLastName("");
      setEmail("");
      setDocumentId("");
      setPhone("");
      setMessage("");
      setDatetime("");
      alert("Mensaje enviado exitosamente!");
    } else {
      alert("Por favor, complete todos los campos antes de enviar.");
    }
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
                <a href="/" className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/comunicados" className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg">
                  Comunicados
                </a>
              </li>
              <li>
                <a href="/eventos" className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg">
                  Eventos
                </a>
              </li>
              <li>
                <a href="/login" className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg">
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
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Contacto</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6 md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contáctanos</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                Si tienes preguntas, comentarios o necesitas más información, ponte en contacto con nosotros.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombres:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  placeholder="Escribe tu nombre aqui" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Apellidos:</label>
                  <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  placeholder="Escribe tu apellido aqui" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white" 
                  placeholder="ejemplo@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="documentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Documento de Identidad(DNI):</label>
                  <input type="text" id="documentId" value={documentId} onChange={(e) => setDocumentId(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white" 
                  placeholder="Escribe tu documento de identidad" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teléfono:</label>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white" 
                  placeholder="Escribe tu teléfono" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje:</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  placeholder="Escribe tu mensaje aqui" required />
                </div>
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha y Hora:</label>
                  <input type="datetime-local" id="datetime" value={datetime} onChange={(e) => setDatetime(e.target.value)} className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white" required />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white dark:bg-gray-900 shadow rounded-lg p-6 md:w-2/3 w-full ml-4 felx flex-col">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Dirección Social</h2>
              <div className="flex-grow">

              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4968185467333!2d-70.93237375645296!3d-17.194671423703415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91449c72999f6a2d%3A0x4880193ddc92edf7!2sI.E.%20Luis%20E.%20Pinto%20Sotomayor!5e0!3m2!1ses!2spe!4v1732833396887!5m2!1ses!2spe"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <p className="text-gray-700 dark:text-gray-300 mt-4">Calle Tacna, 9na cuadra</p>
              <p className="text-gray-700 dark:text-gray-300">Teléfono: (053) 479796</p>
              <p className="text-gray-700 dark:text-gray-300 text-justify">Email: luisernestopinto1954@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#66B5E5] dark:bg-gray-800">
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
