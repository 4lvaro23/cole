'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">Abrir menú principal</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className="text-xl font-medium text-gray-900 dark:text-white">Menú</div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">Inicio</a>
              <a href="/comunication" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">Comunicados</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">Eventos</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">Contacto</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

