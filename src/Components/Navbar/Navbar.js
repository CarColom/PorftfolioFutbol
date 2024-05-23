import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Juanchi/Logo.png";
import backgroundImg from "../../assets/img/pelota-futbol-campo-verde-lista-juego_157027-4304.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="flex flex-row justify-center items-center h-40 bg-cover relative"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 ml-[-5rem] hidden-lg">
            <a href="/">
              <img
                className="h-8"
                src={Logo}
                alt="Logo"
                style={{
                  width: `20%`,
                  height: `20%`,
                }}
              />
            </a>
          </div>
          <h1 className="text-white text-2xl font-allura ml-[-72rem] mt-10 hidden-lg">
            Juan Ignacio Cettou
          </h1>
          {/* Menú para dispositivos grandes */}
          <div className="hidden md:flex items-center space-x-4">
          <Link
              to="/"
              className="text-white text-lg font-Libre-Baskerville text-bold hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <a
              href="#perfil"
              className="text-white text-lg font-Libre-Baskerville hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Perfil
            </a>
            <a
              href="#videos"
              className="text-white text-lg font-Libre-Baskerville hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Videos
            </a>
            <a
              href="#estadisticas"
              className="text-white text-lg font-Libre-Baskerville hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Estadisticas
            </a>
            <a
              href="#galeria"
              className="text-white text-lg font-Libre-Baskerville hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="text-white text-lg font-Libre-Baskerville hover:opacity-30 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </a>
          </div>
          {/* Icono de menú desplegable para dispositivos pequeños */}
          <div className="md:hidden flex-shrink-0 ml-auto">
            <button
              className="block text-gray-400 hover:text-white focus:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para dispositivos pequeños */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-48 top-20 right-0 bg-gray-900 bg-opacity-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Home
            </Link>
            <a
              href="#perfil"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Perfil
            </a>
            <a
              href="#videos"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Videos
            </a>
            <a
              href="#estadisticas"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Estadisticas
            </a>
            <a
              href="#galeria"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:opacity-30"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





