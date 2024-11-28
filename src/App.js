import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Asegúrate de importar Link
import "./App.css";
import Compra from "./Compra";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de Compra */}
        <Route path="/compra" element={<Compra />} />

        {/* Ruta por defecto (página inicial) */}
        <Route
          path="/"
          element={
            <section className="relative bg-gray-900 text-white h-screen">
              {/* Imagen de fondo */}
              <img
                src="/img/fondologin2.png"
                alt="Imagen de fondo"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Contenido */}
              <div className="relative z-10 flex h-full items-start bg-slate-950 bg-opacity-40">
                <div className="p-80 text-left">
                  <h1 className="bg-gradient-to-r from-white via-cyan-400 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    ADCORE
                    <span className="block">GESTIÓN RÁPIDA Y FÁCIL</span>
                  </h1>

                  <p className="mt-4 max-w-md sm:text-xl/relaxed">
                    El 95% de los servidores no gestionan sus datos desde
                    cualquier lugar
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/compra" // Usamos `to` en lugar de `href`
                      className="block rounded border border-emerald-500 bg-emerald-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    >
                      COMPRAR
                    </Link>

                    <a
                      className="block rounded border border-emerald-500 px-12 py-3 text-sm font-medium text-white hover:bg-emerald-500 focus:outline-none focus:ring active:bg-blue-500"
                      href="#"
                    >
                      LEER MÁS
                    </a>
                  </div>
                </div>
              </div>
            </section>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
