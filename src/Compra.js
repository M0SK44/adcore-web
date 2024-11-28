// Compra.js
import React from 'react';
import './App.css';

function Compra() {
  return (
    <section className="bg-gray-900 py-36 ">
        
      <img
        src="/img/fondocompra.jpg"
        alt="Imagen de fondo"
        className="absolute inset-0 w-full h-full object-cover z-0 "
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-opacity-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Planes de Precios
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Precios simples y transparentes para tus necesidades de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Plan Mensual */}
          <div className="bg-slate-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Mensual</h3>
              <p className="mt-4 text-gray-400">Acceso a todos los datos del servidor, rangos de mod y admin, y características de creación de admin.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$14.990</span>
              <span className="text-xl font-medium text-gray-400">/mes</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acceso a todos los datos del servidor</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rangos de mod y admin</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Características de creación de admin</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-cyan-500 to-esmerald-500 hover:from-cyan-600 hover:to-esmerald-600">
              Empezar
            </a>
          </div>

          {/* Plan Trimestral */}
          <div className="bg-slate-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Trimestral</h3>
              <p className="mt-4 text-gray-400">Acceso a todos los datos del servidor, rangos de mod y admin, y características de creación de admin.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$39.999</span>
              <span className="text-xl font-medium text-gray-400">/3 meses</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acceso a todos los datos del servidor</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rangos de mod y admin</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Características de creación de admin</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-cyan-500 to-esmerald-500 hover:from-cyan-600 hover:to-esmerald-600">
              Empezar
            </a>
          </div>

          {/* Plan Anual */}
          <div className="bg-slate-950 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Anual</h3>
              <p className="mt-4 text-gray-400">Acceso a todos los datos del servidor, rangos de mod y admin, y características de creación de admin.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$140.000</span>
              <span className="text-xl font-medium text-gray-400">/año</span>
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Acceso a todos los datos del servidor</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rangos de mod y admin</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Características de creación de admin</span>
              </li>
            </ul>
            <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-cyan-500 to-yellow-500 hover:from-yellow-600 hover:to-esmerald-600">
              Empezar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compra;
