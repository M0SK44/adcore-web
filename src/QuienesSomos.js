import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const QuienesSomos = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://imgur.com/Zi7DUuT.jpg",
    "https://imgur.com/XYAzzjF.jpg",
    "https://imgur.com/QCR65HS.jpg",
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const image = e.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });

    if (isHovered) {
      requestAnimationFrame(() => {
        setBgPos({ x, y });
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/img/fondoquienes.png')" }}
    >
      <div className="absolute inset-0 bg-slate-950 bg-opacity-50 z-0"></div>

      <div className="relative z-10 mt-8">
        <img
          src="https://i.imgur.com/1Cf052w.png"
          alt="Logo del producto"
          className="w-32 md:w-48 mx-auto"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 bg-opacity-80 text-white p-8 rounded-lg flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-pink-500">¿Que es AdCore?</h1>
          <p className="text-lg mb-4">
            Somos una plataforma web innovadora diseñada para administrar
            servidores comunitarios que utilizan el framework ESX. Ofrecemos
            una herramienta segura, eficiente y accesible que permite a los
            administradores realizar consultas SQL de manera profesional.
            Nuestro objetivo es proporcionar un entorno confiable y optimizado
            que minimice la exposición de información sensible, fortaleciendo la
            gestión del servidor.
          </p>
          <p className="text-lg">
            Descubre cómo nuestra plataforma puede transformar la manera en que
            administras tu servidor, asegurando rapidez, seguridad y acceso
            desde cualquier lugar y dispositivo.
          </p>
        </div>

        {/* Slider de imágenes */}
        <div>
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="p-2 overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className="zoom-container"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: `${bgPos.x}% ${bgPos.y}%`,
                    backgroundSize: isHovered ? "200%" : "100%",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    transition:
                      "background-position 0.1s ease-out, background-size 0.3s ease-out",
                  }}
                  onMouseMove={handleMouseMove}
                >
                  <img
                    src={image}
                    alt={`Vista previa del producto ${index + 1}`}
                    className="opacity-0"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Características */}
      <div className="container mx-auto px-4 py-12 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-900 bg-opacity-80 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-emerald-500 mb-4 flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
            Multiplataforma
          </h2>
          <p className="text-lg">
            Aseguramos que tu servidor esté siempre disponible y optimizado, para cualquier plataforma.
          </p>
        </div>
        <div className="bg-slate-900 bg-opacity-80 text-white p-8 rounded-lg">
          <h2 className="text-2xl text-cyan-500 font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faClock} className="mr-3" />
            Gestión Rápida
          </h2>
          <p className="text-lg">
            Nuestra plataforma permite una gestión de servidor ágil, con herramientas que permiten una administración eficiente.
          </p>
        </div>
        <div className="bg-slate-900 bg-opacity-80 text-white p-8 rounded-lg">
          <h2 className="text-2xl text-pink-500 font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faShieldAlt} className="mr-3" />
            Seguridad Avanzada
          </h2>
          <p className="text-lg">
            Implementamos medidas de seguridad para proteger tanto la información sensible como el rendimiento de tu servidor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
