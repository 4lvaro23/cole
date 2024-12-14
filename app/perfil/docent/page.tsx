"use client";
import { MobileMenu } from "@/components/mobile-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as XLSX from "xlsx";

interface Student {
  id: number;
  name: string;
}

interface StudentWithGrades extends Student {
  grades: {
    subject: string;
    score: number;
  }[];
}

interface AttendanceRecord {
  [key: number]: string;
}

export default function DocenteProfile() {
  const router = useRouter();
  const user = {
    name: "Docente",
    email: "docente@colegio.com",
    avatar: "/perfil-docente.jpg",
  };
  const [visitCount, setVisitCount] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("estudiantes");
  const [students] = useState<Student[]>([
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

  const [attendance, setAttendance] = useState<AttendanceRecord>(
    students.reduce((acc, student) => {
      acc[student.id] = "No registrado";
      return acc;
    }, {} as AttendanceRecord)
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
    setAttendance((prevAttendance: AttendanceRecord) => ({
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
  const [selectedMessageRecipient, setSelectedMessageRecipient] = useState<number | "">("");
  const [messageContent, setMessageContent] = useState<string>("");

  const handleSendMessage = () => {
  if (!selectedMessageRecipient || !messageContent.trim()) {
    alert("Por favor, selecciona un estudiante y escribe un mensaje.");
    return;
  }

  const recipient = students.find((s) => s.id === selectedMessageRecipient);

  console.log(`Mensaje enviado a ${recipient?.name}: ${messageContent}`);
  alert(`Mensaje enviado exitosamente a ${recipient?.name}`);
  
  setSelectedMessageRecipient("");
  setMessageContent("");
};
const [selectedStudent, setSelectedStudent] = useState<StudentWithGrades | null>(null);

const handleStudentClick = (studentId: number) => {
  const student = students.find((s) => s.id === studentId);
  if (student) {
    const studentWithGrades: StudentWithGrades = {
      ...student,
      grades: [
        { subject: "Matemáticas", score: 10 },
        { subject: "Ciencia y Tecnologia", score: 13 },
        { subject: "Historia", score: 11 },
        { subject: "Inglés", score: 15 },
        { subject: "Comunicación", score: 20 },
        { subject: "Educación Fisica", score: 14 },
        { subject: "DPCC", score: 17 },
      ],
    };
    setSelectedStudent(studentWithGrades);
  }
};
const [requestType, setRequestType] = useState<string>("");
const [requestDescription, setRequestDescription] = useState<string>("");

const handleSendRequest = () => {
  if (!requestType || !requestDescription.trim()) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  console.log("Solicitud enviada:", {
    tipo: requestType,
    descripcion: requestDescription,
  });

  alert("Tu solicitud ha sido enviada exitosamente.");
  setRequestType("");
  setRequestDescription("");
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
            <button onClick={() => handleNavigation("solicitudes")} className="text-lg font-medium hover:text-[#BF1F2C]">Enviar Solicitud</button>
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
          {activeSection === "mensajes" && (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Enviar Mensajes</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="student" className="block text-sm font-medium text-gray-700">
          Seleccionar Estudiante
        </label>
        <select
          id="student"
          value={selectedMessageRecipient}
          onChange={(e) => setSelectedMessageRecipient(Number(e.target.value))}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">-- Seleccionar --</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar Mensaje
      </button>
    </form>
  </div>
)}
{activeSection === "estudiantes" && (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Lista de Estudiantes</h2>
    <ul className="space-y-2">
      {students.map((student) => (
        <li
          key={student.id}
          onClick={() => handleStudentClick(student.id)}
          className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        >
          <span className="text-blue-600 font-medium">{student.name}</span>
        </li>
      ))}
    </ul>
    {selectedStudent && (
      <div className="mt-6 bg-gray-100 p-4 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold mb-2">
          Historial de Notas: {selectedStudent.name}
        </h3>
        {selectedStudent.grades.length > 0 ? (
          <ul className="list-disc pl-6">
            {selectedStudent.grades.map((grade, index) => (
              <li key={index}>
                <strong>{grade.subject}:</strong> {grade.score}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No hay notas registradas para este estudiante.</p>
        )}
      </div>
    )}
  </div>
)}
{activeSection === "solicitudes" && (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Enviar Solicitud</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendRequest();
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="request-type" className="block text-sm font-medium text-gray-700">
          Tipo de Solicitud
        </label>
        <select
          id="request-type"
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">-- Seleccionar --</option>
          <option value="material">Solicitud de Material</option>
          <option value="infraestructura">Solicitud de Infraestructura</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="request-description" className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          id="request-description"
          rows={4}
          value={requestDescription}
          onChange={(e) => setRequestDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Describe tu solicitud..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar Solicitud
      </button>
    </form>
  </div>
)}
        </div>
      </div>
    </div>
  );
}
