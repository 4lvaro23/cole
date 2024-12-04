"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Importar ícono de check

export default function Login() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de la barra de carga
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Mensaje de éxito
  const [isCodeVerified, setIsCodeVerified] = useState(false); // Estado para verificar el código de seguridad

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true); // Iniciar barra de carga

    setTimeout(() => {
      if (!email || !password) {
        setError("Por favor, ingrese ambos campos.");
        setIsLoading(false);
        return;
      }

      if (
        (role === "Administrador" && email === "luisernestopinto1954@gmail.com" && password === "LEPS_2024") ||
        (role === "Docente" && email === "docente@example.com" && password === "DOCENTE_2024") ||
        (role === "Técnico" && email === "tecnico@example.com" && password === "TECNICO_2024")
      ) {
        setIsAuthenticated(true);
        setSuccessMessage("Perfil autorizado");
      } else {
        setError("Email o contraseña incorrectos.");
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    }, 5000); // Simulación de carga
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (role === "Administrador" && code === "19542024") {
      setIsCodeVerified(true);
      router.push("/perfil/admin");
    } else if (role === "Técnico" && code === "12345678") {
      setIsCodeVerified(true);
      router.push("/perfil/tecnic");
    } else if (role === "Docente" && code === "10987654") {
      setIsCodeVerified(true);
      router.push("/perfil/docent");
    } else {
      setError("Código de seguridad incorrecto.");
    }
  };

  return (
    <div className="min-h-screen bg-[#D5E7F2] flex flex-col">
      <header className="bg-[#3299D9] dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-lg sm:text-xl font-semibold text-white">
              I.E Luis E. Pinto Sotomayor
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-[#BF1F2C] font-bold text-lg">Inicio</a>
            <a href="/eventos" className="text-white hover:text-[#BF1F2C] font-bold text-lg">Eventos</a>
            <a href="/contacto" className="text-white hover:text-[#BF1F2C] font-bold text-lg">Contacto</a>
            <a href="/comunicados" className="text-white hover:text-[#BF1F2C] font-bold text-lg">Comunicados</a>
          </nav>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center flex-grow px-4">
        <div className="bg-[#F2F2F2] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </div>

          {!role ? (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Seleccione su perfil</h2>
              <div className="space-y-4">
                <button onClick={() => setRole("Docente")} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Docente
                </button>
                <button onClick={() => setRole("Técnico")} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                  Técnico
                </button>
                <button onClick={() => setRole("Administrador")} className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
                  Administrador
                </button>
              </div>
            </>
          ) : !isAuthenticated ? (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 w-full border rounded-lg" placeholder="Ingrese su Correo" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3 w-full border rounded-lg" placeholder="Ingrese su contraseña" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Iniciar sesión</button>
              </form>
              {isLoading && <div className="mt-4 bg-blue-600 h-2 animate-pulse rounded-full"></div>}
            </>
          ) : isCodeVerified ? (
            <div className="text-center">
              <div className="flex justify-center items-center">
              <CheckCircleIcon className="w-12 h-12 text-green-600 animate-bounce" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Perfil autorizado</h2>
              <p className="text-green-600 font-semibold text-lg">{successMessage}</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Verificar código de seguridad</h2>
              <form onSubmit={handleVerifyCode} className="space-y-4">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">Código de seguridad</label>
                  <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="p-3 w-full border rounded-lg"
                    placeholder="Ingrese el código de seguridad"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Verificar código
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
