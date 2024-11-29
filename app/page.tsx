"use client";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { BookOpen, GraduationCap, Users, Clock, School, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Búsqueda:", searchQuery); 
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
                <a
                  href="/leps"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
                >
                  LEPS
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
                <button
              onClick={handleSearchToggle}
              className="text-white hover:text-[#BF1F2C] focus:outline-none"
              aria-label="Abrir búsqueda"
            >
              <Search className="w-6 h-6" />
            </button>
            {searchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white dark:bg-gray-700 px-4 py-2"
          >
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#66B5E5] hover:bg-[#2477A8] text-white font-bold px-4 py-2 rounded-md ml-2"
              >
                Buscar
              </button>
            </div>
          </form>
        )}
              
            </ul>
           </nav>
         <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">
        <section
          className="bg-gray-50 dark:bg-gray-800 py-16"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/colegiopinto-2024.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left lg:pl-16">
            <h1 className="text-4xl font-bold text-gray-100 dark:text-white mb-4 text-center">
              Bienvenidos a la Institución Luis E. Pinto Sotomayor
            </h1>
            <p className="text-xl text-gray-200 dark:text-gray-300 mb-8">
              Formando líderes del mañana con educación de calidad
            </p>
            <Button className="bg-[#3299D9] hover:bg-[#2477A8] text-white font-bold px-8 py-5 rounded-md shadow-lg">
              Conoce más
            </Button>
          </div>

            <div className="flex flex-col space-y-4">
              <a
                href="https://www.gremoquegua.edu.pe/portaldrem/web/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-[#3299D9] hover:bg-[#2477A8] text-white font-bold py-4 px-4 rounded-full w-20 h-20 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/dremo.png" // Ruta de la imagen
                  alt="DREMO"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-sm mt-2">DREMO</span>
              </a>

              <a
                href="https://www.perueduca.pe/#/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-[#F2E205] hover:bg-[#D2C204] text-white font-bold py-4 px-4 rounded-full w-20 h-20 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/peru-educa.jpeg" 
                  alt="PERUEDUCA"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-sm mt-2">PERUEDUCA</span>
              </a>

              <a
                href="https://www.offlineconectaideas.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-[#F20505] hover:bg-[#C40404] text-white font-bold py-4 px-4 rounded-full w-20 h-20 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/conectaideas.png" 
                  alt="ConectaIdeas"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-sm mt-2">ConectaIdeas</span>
              </a>

              <a
                href="https://sice.minedu.gob.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center bg-[#8C232C] hover:bg-[#C40404] text-white font-bold py-4 px-4 rounded-full w-20 h-20 shadow-lg transform hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/sice.png" 
                  alt="SICE"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-sm mt-2">SICE</span>
              </a>

            </div>
          </div>

        </section>

        <section className="py-16 bg-[#D5E7F2] dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <School className="h-12 w-12 text-[#3299D9] dark:text-[#3299D9] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Sobre Nosotros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  Nosotros, en la "Institución Educativa Luis Ernesto Pinto Sotomayor", nos
                  enorgullecemos de ofrecer una educación integral y de calidad,
                  que fomente el desarrollo personal, académico y social de cada
                  uno de nuestros estudiantes. Somos una comunidad educativa
                  comprometida con el aprendizaje y el bienestar de todos,
                  creando un ambiente inclusivo y libre de violencia, donde se
                  promueven valores fundamentales como el respeto, la
                  solidaridad, la responsabilidad y la tolerancia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F2F2F2] dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Nuestra Esencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Misión
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  Lograr que todas y todos los estudiantes de la I.E. “Luis
                  Ernesto Pinto Sotomayor” culminen la escolaridad
                  satisfactoriamente en los niveles de inicial, primaria y
                  secundaria de la EBR, siendo competentes afianzando los
                  aprendizajes establecidos en el currículo nacional y alcancen
                  su desarrollo integral (perfil de egreso) en espacios seguros,
                  inclusivos, de sana convivencia y libres de violencia,
                  evidenciando la práctica de valores y actitudes en su vida
                  diaria. Para ello, se aplicarán diversas estrategias y
                  herramientas tecnológicas que aseguren el acceso de todos los
                  estudiantes en la medida de lo posible.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Visión
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  La I.E. Luis E. Pinto Sotomayor en el año 2024 es una
                  institución educativa con liderazgo pedagógico. Brinda una
                  educación en valores como el respeto y la solidaridad.
                  Incentiva la lectura, la práctica deportiva, cultural y el
                  cuidado del medio ambiente. Fomenta la resiliencia, el cuidado
                  de la salud y la práctica de las medidas de bioseguridad.
                  Promueve el uso adecuado de las herramientas tecnológicas con
                  autonomía y responsabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#D5E7F2] dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-[#3299D9] dark:text-[#3299D9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Excelencia Académica
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Programas educativos de alta calidad
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-[#3299D9] dark:text-[#3299D9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Comunidad Inclusiva
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ambiente acogedor y diverso
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-[#3299D9] dark:text-[#3299D9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Desarrollo Integral
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Formación académica y personal
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F2F2F2] dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Horario de Atención
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-[#3299D9] dark:text-[#3299D9] mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Oficina Administrativa
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Telefono: (053) 479796</li>
                <li>Lunes a Viernes: 7:00 AM - 4:00 PM</li>
                <li>Sabados, Domingos y Feriados: Cerrado</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

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

