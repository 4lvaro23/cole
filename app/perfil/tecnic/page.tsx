"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TecnicoProfile() {
  const router = useRouter();
  const user = {
    name: "Técnico",
    email: "tecnico@colegio.com",
    avatar: "/perfil-tecnico.png",
  };
  const [visitCount, setVisitCount] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("solicitudes");

  useEffect(() => {
    const currentVisitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    setVisitCount(currentVisitCount);
    localStorage.setItem("visitCount", (currentVisitCount + 1).toString());
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  const [selectedDate, setSelectedDate] = useState<string>("");
const [maintenanceDetail, setMaintenanceDetail] = useState<string>("");
const [maintenanceRecords, setMaintenanceRecords] = useState<
  { date: string; detail: string }[]
>([]);

const handleSaveMaintenance = () => {
  if (!selectedDate || !maintenanceDetail.trim()) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const newRecord = { date: selectedDate, detail: maintenanceDetail };
  setMaintenanceRecords((prevRecords) => [...prevRecords, newRecord]);

  alert("Mantenimiento guardado correctamente.");
  setSelectedDate("");
  setMaintenanceDetail("");
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
          <MobileMenu />
        </div>
      </header>

      <div className="min-h-screen bg-gray-100 flex">
        <div className="w-64 bg-[#51abcb] text-white p-6">
          <div className="flex flex-col items-center mb-8">
            <Image src={user.avatar} alt="Avatar" width={100} height={100} className="rounded-full border-4 border-blue-500" />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
            <p className="text-lg text-center mb-4">Visitas: {visitCount}</p>
          </div>
          <nav className="flex flex-col space-y-4">
            <button onClick={() => handleNavigation("solicitudes")} className="text-lg font-medium hover:text-[#BF1F2C]">Solicitudes</button>
            <button onClick={() => handleNavigation("mantenimientos")} className="text-lg font-medium hover:text-[#BF1F2C]">Programación de Mantenimientos</button>
            <button onClick={() => handleNavigation("reportes")} className="text-lg font-medium hover:text-[#BF1F2C]">Reportes</button>
          </nav>
          <button onClick={handleLogout} className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Cerrar sesión
          </button>
        </div>

        <div className="flex-1 p-8">
          {activeSection === "solicitudes" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Gestión de Solicitudes</h2>
              <p>Aquí se mostrarán las solicitudes recibidas.</p>
            </div>
          )}
          {activeSection === "mantenimientos" && (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Programación de Mantenimientos</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveMaintenance();
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="maintenance-date" className="block text-sm font-medium text-gray-700">
          Seleccionar Fecha
        </label>
        <input
          type="date"
          id="maintenance-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="maintenance-detail" className="block text-sm font-medium text-gray-700">
          Detalle del Mantenimiento
        </label>
        <textarea
          id="maintenance-detail"
          rows={4}
          value={maintenanceDetail}
          onChange={(e) => setMaintenanceDetail(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Escribe los detalles del mantenimiento..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Guardar Mantenimiento
      </button>
    </form>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Recordatorios Guardados</h3>
      {maintenanceRecords.length > 0 ? (
        <ul className="space-y-2">
          {maintenanceRecords.map((record, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
              <strong>Fecha:</strong> {record.date}
              <br />
              <strong>Detalle:</strong> {record.detail}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No hay mantenimientos programados.</p>
      )}
    </div>
  </div>
)}
          {activeSection === "reportes" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Generación de Reportes</h2>
              <p>Aquí se podrán generar y visualizar reportes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
