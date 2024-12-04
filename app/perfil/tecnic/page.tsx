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

  useEffect(() => {
    const currentVisitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    setVisitCount(currentVisitCount);
    localStorage.setItem("visitCount", (currentVisitCount + 1).toString());
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#66B5E5] dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:row py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-semibold text-white">I.E Luis E. Pinto Sotomayor</span>
          </div>
          <MobileMenu />
        </div>
      </header>

      <div className="flex flex-col items-center py-12">
        <div className="bg-[#D5E7F2] p-8 rounded-xl shadow-lg w-full lg:w-1/3 text-center">
          <div className="flex justify-center mb-6">
            <Image src={user.avatar} alt="Avatar" width={100} height={100} className="rounded-full border-4 border-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Bienvenido, {user.name}</h2>
          <p className="text-lg text-center mb-4">Email: {user.email}</p>
          <p className="text-lg text-center mb-4">Visitas: {visitCount}</p>
          <button onClick={handleLogout} className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Cerrar sesión
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-1/3 mt-8">
          <h2 className="text-xl font-semibold mb-4">Gestión de Soporte Técnico</h2>
          <ul className="list-disc pl-5">
            <li>Gestión de tickets</li>
            <li>Programación de mantenimiento</li>
            <li>Monitoreo de infraestructura tecnológica</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
