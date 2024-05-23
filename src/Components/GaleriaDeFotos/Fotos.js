import React from 'react';
import Foto from '../../assets/img/Galeria/Screenshot_20240326-224248-337.png'
import Foto1 from '../../assets/img/Galeria/Screenshot_20240326-225345 (1).png'
import Foto2 from '../../assets/img/Galeria/WhatsApp Image 2024-03-29 at 17.06.22.jpeg'
import Foto3 from '../../assets/img/Galeria/WhatsApp Image 2024-03-29 at 17.11.42 (1).jpeg'
import Foto4 from '../../assets/img/Galeria/WhatsApp Image 2024-03-29 at 17.11.43.jpeg'
import Foto5 from '../../assets/img/Galeria/WhatsApp Image 2024-03-29 at 17.11.44 (1).jpeg'
import Foto6 from '../../assets/img/Galeria/WhatsApp Image 2024-05-22 at 09.37.47.jpeg'
import Foto7 from '../../assets/img/Galeria/WhatsApp Image 2024-05-22 at 09.50.23.jpeg'
import Foto8 from '../../assets/img/Galeria/WhatsApp Image 2024-05-22 at 09.50.24.jpeg'
import backgroundImg from "../../assets/img/PELOTA.png";

const photos = [
  Foto,
  Foto1,
  Foto2,
  Foto3,
  Foto4,
  Foto5,
  Foto6,
  Foto7,
  Foto8
  
  
];

const GaleriaDeFotos = () => {
  return (
    <div className="relative min-h-screen" id="galeria">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0 bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${backgroundImg})`, zIndex: -1 }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Contenido de la galería */}
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Galería de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:mx-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="w-full md:max-h-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriaDeFotos;
