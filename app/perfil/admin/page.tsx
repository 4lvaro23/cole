"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminitradorProfile() {
  const router = useRouter();
  const user = {
    name: "Administrador",
    email: "luisernestopinto1954@gmail.com",
    avatar: "/perfil.png",
  };
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventMedia, setEventMedia] = useState<File | null>(null);
  const [comunicadoTitle, setComunicadoTitle] = useState("");
  const [comunicadoDescription, setComunicadoDescription] = useState("");
  const [comunicadoDate, setComunicadoDate] = useState("");
  const [comunicadoMedia, setComunicadoMedia] = useState<File | null>(null);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    setMessages(storedMessages);
    const currentVisitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    setVisitCount(currentVisitCount);
    localStorage.setItem("visitCount", (currentVisitCount + 1).toString());
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      media: eventMedia ? URL.createObjectURL(eventMedia) : null,
    };
    localStorage.setItem("events", JSON.stringify([...events, newEvent]));
    router.push("/eventos");
  };

  const handleComunicadoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comunicados = JSON.parse(localStorage.getItem("comunicados") || "[]");
    const newComunicado = {
      title: comunicadoTitle,
      description: comunicadoDescription,
      media: comunicadoMedia ? URL.createObjectURL(comunicadoMedia) : null,
    };
    localStorage.setItem("comunicados", JSON.stringify([comunicados, newComunicado]));
    router.push("/comunicados");
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const idDocument = (document.getElementById("idDocument") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLInputElement).value;
    const date = new Date().toLocaleString();

    const newMessage = {
      name,
      lastName,
      email,
      message,
      date,
    };

    const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    localStorage.setItem("contactMessages", JSON.stringify([storedMessages, newMessage]));
    setMessages([storedMessages, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#66B5E5] dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:row py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-semibold text-white">
              I.E Luis E. Pinto Sotomayor
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
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
                <a href="/contacto" className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>
      <div className="flex flex-col lg:flex-row justify-around items-start py-12 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Nuevo Evento</h2>
          <form onSubmit={handleEventSubmit}>
            <input
              type="text"
              placeholder="Título del evento"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <textarea
              placeholder="Descripción del evento"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              placeholder="Fecha"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              type="file"
              onChange={(e) => setEventMedia(e.target.files?.[0] || null)}
              className="mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Subir Evento
            </button>
          </form>
        </div>
        <div className="bg-[#D5E7F2] p-8 rounded-xl shadow-lg w-full lg:w-1/3 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src={user.avatar}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Bienvenido, {user.name}
          </h2>
          <p className="text-lg text-center mb-4">Email: {user.email}</p>
          <p className="text-lg text-center mb-4">Visitas: {visitCount}</p>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Cerrar sesión
          </button>
          <button
            onClick={toggleModal}
            className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700"
          >
            Buzón de mensajes
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Nuevo Comunicado</h2>
          <form onSubmit={handleComunicadoSubmit}>
            <input
              type="text"
              placeholder="Título del comunicado"
              value={comunicadoTitle}
              onChange={(e) => setComunicadoTitle(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <textarea
              placeholder="Descripción del comunicado"
              value={comunicadoDescription}
              onChange={(e) => setComunicadoDescription(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              placeholder="Fecha"
              type="date"
              value={comunicadoDate}
              onChange={(e) => setComunicadoDate(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              type="file"
              onChange={(e) => setComunicadoMedia(e.target.files?.[0] || null)}
              className="mb-4"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Subir Comunicado
            </button>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-900">Buzón de mensajes</h2>
            {messages.length > 0 ? (
              <div className="mt-4 space-y-4 text-justify">
                {messages.map((msg, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-md text-justify">
                    <p className="font-bold">Nombre y Apellido: {msg.name} {msg.lastName}</p>
                    <p className="text-gray-600 text-justify">Correo: {msg.email}</p>
                    <p className="text-gray-600">DNI: {msg.documentId}</p>
                    <p className="text-gray-600">Teléfono: {msg.phone}</p>
                    <p>Mensaje: {msg.message}</p>
                    <p className="text-sm text-gray-500">Enviado el: {msg.datetime}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-gray-500">No hay mensajes.</p>
            )}
            <div className="mt-4 flex justify-between">
              <button
                onClick={toggleModal}
                className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}