"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as XLSX from "xlsx"; // Importar librería para manejar Excel

export default function DocenteProfile() {
  const router = useRouter();
  const user = {
    name: "Docente",
    email: "docente@colegio.com",
    avatar: "/perfil-docente.jpg",
  };
  const [visitCount, setVisitCount] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("estudiantes");
  const [students, setStudents] = useState([
    { id: 1, name: "Lucas García Pérez" },
    { id: 2, name: "María Fernández López" },
    { id: 3, name: "Sofía Martínez Torres" },
    { id: 4, name: "Diego Ramírez Sánchez" },
    { id: 5, name: "Valentina Gómez Rodríguez" },
    { id: 6, name: "Mateo Díaz Castro" },
    { id: 7, name: "Camila Morales Jiménez" },
    { id: 8, name: "Julián Herrera Vargas" },
    { id: 9, name: "Isabella Ortiz Mendoza" },
    { id: 10, name: "Leonardo Vargas Romero" },
    { id: 11, name: "Sebastián Torres Muñoz" },
    { id: 12, name: "Ana Beltrán Cordero" },
  ]);

  const [attendance, setAttendance] = useState<any>(
    students.reduce((acc, student) => {
      acc[student.id] = "No registrado"; // Estado inicial
      return acc;
    }, {})
  );

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

  const handleAttendanceChange = (studentId: number, value: string) => {
    setAttendance((prevAttendance: any) => ({
      ...prevAttendance,
      [studentId]: value,
    }));
  };

  const handleSubmitAttendance = () => {
    console.log("Asistencia registrada: ", attendance);
    alert("Asistencia registrada correctamente.");
  };

  const downloadExcel = () => {
    const data = students.map((student) => ({
      Estudiante: student.name,
      Estado: attendance[student.id] || "No registrado",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Asistencia");
    XLSX.writeFile(workbook, "asistencia_estudiantes.xlsx");
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
            <button onClick={() => handleNavigation("estudiantes")} className="text-lg font-medium hover:text-[#BF1F2C]">Lista de Estudiantes</button>
            <button onClick={() => handleNavigation("asistencia")} className="text-lg font-medium hover:text-[#BF1F2C]">Gestionar Asistencia</button>
            <button onClick={() => handleNavigation("mensajes")} className="text-lg font-medium hover:text-[#BF1F2C]">Enviar Mensajes</button>
          </nav>
          <button onClick={handleLogout} className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Cerrar sesión
          </button>
        </div>

        <div className="flex-1 p-8">
          {activeSection === "asistencia" && (
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Gestionar Asistencia</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmitAttendance(); }} className="space-y-4">
                <ul className="space-y-2">
                  {students.map((student) => (
                    <li key={student.id} className="flex justify-between items-center">
                      <span>{student.name}</span>
                      <select
                        value={attendance[student.id]}
                        onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                        className="border rounded-lg p-2"
                      >
                        <option value="No registrado">Seleccionar</option>
                        <option value="Presente">Presente</option>
                        <option value="Tardanza">Tardanza</option>
                        <option value="Ausente">Ausente</option>
                      </select>
                    </li>
                  ))}
                </ul>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Registrar Asistencia</button>
              </form>
              <button onClick={downloadExcel} className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">Descargar Excel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
