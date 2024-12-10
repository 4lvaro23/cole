"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminitradorProfile() {
  const router = useRouter();
  const user = {
    name: "Administrador",
    email: "admin@colegio.com",
    avatar: "/perfil-administrador.jpg",
  };
  const [visitCount, setVisitCount] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("mensajes");
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [eventData, setEventData] = useState({ title: "", description: "", date: "", file: null });
  const [communiqueData, setCommuniqueData] = useState({ title: "", content: "", file: null });


  useEffect(() => {
    const currentVisitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    setVisitCount(currentVisitCount);
    localStorage.setItem("visitCount", (currentVisitCount + 1).toString());
    const storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    setContactMessages(storedMessages);
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Evento creado exitosamente");
    setEventData({ title: "", description: "", date: "", file: null });
  };

  const handleCommuniqueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Comunicado creado exitosamente");
    setCommuniqueData({ title: "", content: "", file: null });
  };

  const [messages, setMessages] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const storedReports = JSON.parse(localStorage.getItem("reports") || "[]");
    setMessages(storedMessages);
    setReports(storedReports);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#66B5E5] dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-semibold text-white">
              I.E Luis E. Pinto Sotomayor
            </span>
          </div>
          <MobileMenu />
        </div>
      </header>

      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#51abcb] text-white p-6">
          <div className="flex flex-col items-center mb-8">
            <Image src={user.avatar} alt="Avatar" width={100} height={100} className="rounded-full border-4 border-blue-500" />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
            <p className="text-lg text-center mb-4">Visitas: {visitCount}</p>
          </div>
          <nav className="flex flex-col space-y-4">
            <button onClick={() => handleNavigation("mensajes")} className="text-lg font-medium hover:text-[#BF1F2C]">
              Buzón de Mensajes
            </button>
            <button onClick={() => handleNavigation("eventos")} className="text-lg font-medium hover:text-[#BF1F2C]">
              Nuevo Evento
            </button>
            <button onClick={() => handleNavigation("comunicados")} className="text-lg font-medium hover:text-[#BF1F2C]">
              Nuevo Comunicado
            </button>
            <button onClick={() => handleNavigation("reportes")} className="text-lg font-medium hover:text-[#BF1F2C]">
              Reportes
            </button>
          </nav>
          <button onClick={handleLogout} className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Cerrar sesión
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {activeSection === "mensajes" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Buzón de Mensajes</h2>
              {contactMessages.length > 0 ? (
                <ul>
                  {contactMessages.map((msg, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-md mb-2">
                      <p><strong>Nombre:</strong> {msg.name} {msg.lastName}</p>
                      <p><strong>Email:</strong> {msg.email}</p>
                      <p><strong>Mensaje:</strong> {msg.message}</p>
                      <p className="text-sm text-gray-500">Enviado el: {msg.date}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No hay mensajes disponibles.</p>
              )}
            </div>
          )}
                 {activeSection === "eventos" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Formulario de Eventos</h2>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Título</label>
                  <input
                    type="text"
                    value={eventData.title}
                    onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                    className="w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Descripción</label>
                  <textarea
                    value={eventData.description}
                    onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                    className="w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Fecha</label>
                  <input
                    type="date"
                    value={eventData.date}
                    onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                    className="w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Archivo (Imagen o Video)</label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setEventData({ ...eventData, file: e.target.files?.[0] || null })}
                    className="w-full"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                  Crear Evento
                </button>
              </form>
            </div>
          )}
                   {activeSection === "comunicados" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Formulario de Comunicados</h2>
              <form onSubmit={handleCommuniqueSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Título</label>
                  <input
                    type="text"
                    value={communiqueData.title}
                    onChange={(e) => setCommuniqueData({ ...communiqueData, title: e.target.value })}
                    className="w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Contenido</label>
                  <textarea
                    value={communiqueData.content}
                    onChange={(e) => setCommuniqueData({ ...communiqueData, content: e.target.value })}
                    className="w-full border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Archivo (Imagen o Video)</label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setCommuniqueData({ ...communiqueData, file: e.target.files?.[0] || null })}
                    className="w-full"
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg">
                  Crear Comunicado
                </button>
              </form>
            </div>
          )}
          {activeSection === "reportes" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Reportes Llegados</h2>
              {reports.length > 0 ? (
                <ul>
                  {reports.map((report, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-md mb-2">
                      <p><strong>Asunto:</strong> {report.subject}</p>
                      <p><strong>Descripción:</strong> {report.description}</p>
                      <p className="text-sm text-gray-500">Enviado por: {report.technician}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No hay reportes disponibles.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
