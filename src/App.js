import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import "./App.css";
import Compra from "./Compra";
import QuienesSomos from "./QuienesSomos";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de Compra */}
        <Route path="/compra" element={<Compra />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        {/* Ruta por defecto (página inicial) */}
        <Route
          path="/"
          element={
            <section className="relative bg-slate-950 text-white min-h-screen">
              {/* Imagen de fondo */}
              <img
                src="/img/fondologin2.png"
                alt="Imagen de fondo"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
              />
              {/* Contenido */}
              <div className="relative z-10 p-80 flex items-center justify-start h-full  px-6 sm:px-12">
                <div className="max-w-lg text-center sm:text-left">
                  <h1 className="bg-gradient-to-r from-white via-cyan-400 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">
                    ADCORE
                    <span className="block mt-1">GESTIÓN RÁPIDA Y FÁCIL</span>
                  </h1>

                  <p className="mt-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                    El 95% de los servidores no gestionan sus datos desde
                    cualquier lugar
                  </p>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/compra"
                      className="block rounded border border-emerald-500 bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    >
                      COMPRAR
                    </Link>

                    <Link
                      to="/QuienesSomos"
                      className="block rounded border border-emerald-500 bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    >
                      LEER MAS
                    </Link>
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
