"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingrese ambos campos.");
      return;
    }

    if (email === "luisernestopinto1954@gmail.com" && password === "LEPS_2024") {
      setIsAuthenticated(true);
      setError(null);
    } else if (role === "Docente" && email === "docente@example.com" && password === "DOCENTE_2024") {
      setIsAuthenticated(true);
      setError(null);
    } else if (role === "Tecnico" && email === "tecnico@example.com" && password === "TECNICO_2024") {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (code === "19542024") {
      router.push("/perfil/admin");
    } else {
      setError("Código de seguridad incorrecto.");
    }
    if (code === "19542024") {
    router.push("/perfil/tecnic");
    } else {
    setError("Código de seguridad incorrecto.");
    }
    if (code === "19542024") {
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

          {/* Menú de navegación */}
          <nav className="hidden md:flex space-x-4">
            <a
              href="/leps"
              className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
            >
              LEPS
            </a>
            <a
              href="/"
              className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
            >
              Inicio
            </a>
            <a
              href="/eventos"
              className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
            >
              Eventos
            </a>
            <a
              href="/contacto"
              className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
            >
              Contacto
            </a>
            <a
              href="/comunicados"
              className="text-white dark:text-gray-300 hover:text-[#BF1F2C] dark:hover:text-white font-bold text-lg"
            >
              Comunicados
            </a>
          </nav>

          {/* Menú móvil */}
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
    <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Seleccione su tipo de perfil</h2>
    <div className="space-y-4">
      <button onClick={() => setRole("Docente")} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Docente
      </button>
      <button onClick={() => setRole("Tecnico")} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
        Técnico
      </button>
      <button onClick={() => setRole("Administrador")} className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
        Administrador
      </button>
    </div>
  </>
) : (
  <>
    {!isAuthenticated ? (
      <>
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <p className="text-center text-gray-600 mb-6">Rol seleccionado: <strong>{role}</strong></p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese su contraseña"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Iniciar sesión
          </button>
        </form>
      </>
    ) : (
      <>
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Verificación</h2>
        <form onSubmit={handleVerifyCode} className="space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">Código de seguridad</label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </>
        )}
        </div>
      </div>
    </div>
  );
}
