import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";

export default function InfografiaYHimnosPage() {
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
              <li>
                <a
                  href="/perfil"
                  className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold"
                >
                <Image
                  src="/perfil.jpeg"
                  alt="Perfil"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                </a>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16 bg-[#D5E7F2] dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Biografia de Luis Ernesto Pinto Sotomayor.
            </h2>
            <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-300 mb-4  max-w-prose leading-relaxed text-justify">
              Nace el 08 de octubre de 1887 en la ciudad de Moquegua, 
              realizó sus estudios Secundarios en el Colegio Nacional “La Libertad”, 
              hoy Institución Educativa Emblemática “Simón Bolívar”; al terminar cursó sus 
              estudios profesionales en la primera Escuela Normal de Varones de Lima donde 
              se graduó en el año 1908 como Profesor Normalista no solamente fue alumno sino 
              también fundador de dicha escuela conjuntamente con José Antonio Encinas, 
              Luis E. Infantas, Amador Merino Reyna y los moqueguanos Raúl Pinto Manchego y 
              José Manuel Cornejo.  Se inició como docente en la Escuela Nº 8710 de Torata 
              donde desempeño en cargo de Director.   Durante los años 1909 a 1939, desempeñó 
              el cargo de Director del Centro Escolar de Varones Nº 971 de la ciudad de Moquegua, 
              que posteriormente se denominó Escuela de 2do. grado de Varones Nº 971 hoy 
              Institución Educativa “Rafael Díaz”.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify max-w-prose leading-relaxed">
               En el año de 1930 le dan el cargo de Inspector Visitador de las provincias de 
               Tacna y Moquegua.  En 1940 por medio de un concurso y obtener una alta calificación
               le designan Inspector de Educación del departamento de Moquegua.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify max-w-prose leading-relaxed">
                 Durante sus años que trabajó como Educador, él encontró una Escuela que se dedicaba 
                 a transmitir conocimientos y a suministrar la lectura, escritura, el cálculo y 
                 ciertos instrumentos necesarios para la vida social “cuya preocupación fundamental 
                 es la formación de la personalidad humana, preparando al niño para todas las vicisitudes 
                 de la vida”.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify max-w-prose leading-relaxed">
                 Escribió las obras Organización Escolar, Plan de Estudios, Urbanidad.  En una de sus 
                 obras se inspiró en sus maestras Elena Hurtado de Solari y Victoria Solari, en las ideas 
                 de trabajo, rectitud, honestidad y lealtad aprendida de sus padres; unidas a la devoción 
                 y cariño.  Fue considerado “la máxima figura del magisterio primario moqueguano, maestro 
                 que ha dedicado los días más preciados de su vida a la ardua e ingrata tarea de educar 
                 conciencias y burilar virtudes, el colega que supo hacer culto del compañerismo, 
                 comprensivo y armonioso; una cualidad que lo caracterizó era el espíritu de Tolerancia 
                 y Respeto para las ideas más opuestas”.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify max-w-prose leading-relaxed">
                 Al terminar sus servicios magisteriales dijo: “sois vosotros, discípulos de ayer, colegas 
                 de hoy y amigos de siempre, los jueces imparciales de mi obra”.  A los maestros dice: 
                 “La experiencia me vuelve a deciros que mantengáis unión estrecha, fraterna y solidaria 
                 a favor de la cultura de Moquegua, que vuestros esfuerzos cotidianos no se aminoricen un 
                 punto; que vuestro ejemplo sea un estímulo constante para vuestros discípulos agradecidos”.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify max-w-prose leading-relaxed">
                 En la incursión del periodismo fue Director del Seminario “Ferrocarril”, colaboró con la
                 “Voz Moqueguana”, “La Reforma” y el “Heraldo”. Durante la fecha del terremoto desempeñó 
                 el cargo de Alcalde de Moquegua en 1948.  En reconocimiento a su enseñanza fue obsequiado 
                 con una Tarjeta de Plata Dorada entregada por Don Hugo Díaz Vargas, entonces Director de 
                 la Escuela Nº 971 que era presidida por Angela Barrios Vda. de Espinoza.  Posteriormente 
                 se retiró a radicar a Lima en donde falleció el 02 de junio de 1958.
              </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
              <Image
                src="/perfil.png"
                alt="Infografía Institucional"
                width={1000}
                height={1000}
                className="rounded-lg shadow-md border-4 border-gray-300 dark:border-gray-600"
              />
            </div>
            </div>
          </div>
        </section>

        {/* Sección de los himnos */}
        <section className="py-16 bg-[#F2F2F2] dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Himnos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Himno Nacional del Perú
                </h3>
                <Image
                  src="/himno-peru.png"
                  alt="Himno Nacional del Perú"
                  width={500}
                  height={300}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  El Himno Nacional del Perú es un símbolo patriótico que expresa
                  el amor y orgullo por nuestra nación.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=ESnv662T6qM"
                  target="_blank"
                   rel="noopener noreferrer"
                   className="bg-[#3299D9] hover:bg-[#2477A8] text-white font-bold px-8 py-3 rounded-md shadow-lg text-center"
                   >
                    Ver Video
                  </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Himno de Moquegua
                </h3>
                <Image
                  src="/himno-moq.jpg"
                  alt="Himno de Moquegua"
                  width={500}
                  height={300}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  El himno es el reflejo de los valores y principios que
                  guían nuestra comunidad educativa.
                </p>
                <Button className="bg-[#3299D9] hover:bg-[#2477A8] text-white font-bold px-8 py-3 rounded-md shadow-lg">
                  Ver Video
                </Button>
              </div>
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
