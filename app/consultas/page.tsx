"use client";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { useState } from "react";

export default function ConsultaAlumnos() {
  const [dni, setDni] = useState("");
  const [nivel, setNivel] = useState("primaria");
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const mockDataPrimaria = {
      "77962416": {
        notas: ["Matemáticas: 18", "Historia: 16", "Ciencias: 19"],
        horarios: ["Lunes: 8am-12pm", "Miércoles: 10am-2pm"],
        asistencia: "90% de asistencia",
        libreta: "/libretas/RAYMUNDO_TIMANA_YOSIMAR_RAMOS-00000077962416.pdf",
      },
    };

    const mockDataSecundaria = {
      "74798823": {
        notas: ["Matemáticas: 15", "Historia: 14", "Física: 17"],
        horarios: ["Martes: 9am-1pm", "Jueves: 11am-3pm"],
        asistencia: "85% de asistencia",
        libreta: "/libretas/RAYMUNDO_TIMANA_YOAN_JUAN_CARLOS-00000074798823.pdf",
      },
    };

    const data = nivel === "primaria" ? mockDataPrimaria[dni] : mockDataSecundaria[dni];
    if (data) {
      setResult(data);
    } else {
      setResult({ error: "No se encontraron datos para el DNI ingresado." });
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
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Consulta de Alumnos</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#F2F2F2] dark:bg-gray-900 shadow rounded-lg p-6 md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Realiza tu consulta</h2>
              <form onSubmit={handleSearch} className="space-y-6">
                <div>
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700 dark:text-gray-300">DNI del Alumno:</label>
                  <input
                    type="text"
                    id="dni"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="Ingrese el DNI del alumno"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="nivel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nivel Educativo:</label>
                  <select
                    id="nivel"
                    value={nivel}
                    onChange={(e) => setNivel(e.target.value)}
                    className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
                  >
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Consultar
                  </button>
                </div>
              </form>

              {result && (
                <div className="mt-8">
                  {result.error ? (
                    <p className="text-red-500 font-bold">{result.error}</p>
                  ) : (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Resultados:</h3>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li><strong>Notas:</strong> {result.notas.join(", ")}</li>
                        <li><strong>Horarios:</strong> {result.horarios.join(", ")}</li>
                        <li><strong>Asistencia:</strong> {result.asistencia}</li>
                        <li><strong>Libreta:</strong>
                          <div className="mt-4">
                            <iframe
                              src={result.libreta}
                              width="100%"
                              height="500px"
                              className="border rounded-md"
                            ></iframe>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
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
