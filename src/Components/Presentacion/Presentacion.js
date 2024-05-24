import React from "react";
import { Fade } from "react-awesome-reveal";
import playerImg from "../../assets/img/Juanchi/JUANCHIPRESENTACION.png";
import backgroundImg from "../../assets/img/REFLECTOR.png";

const Presentacion = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}
    >
      <div className="w-full md:w-1/2 p-6 text-center md:text-left flex justify-center md:justify-end items-center">
        <Fade direction="up">
          <div className="bg-black bg-opacity-50 text-white max-w-lg p-6 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Juan Ignacio Cettou</h1>
            <div className="text-lg space-y-2">
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4">
              Talentoso mediocampista con excelente visión de juego y liderazgo.
                Capacidad para filtrar pases, ejecutar penales y trabajar en equipo.  
                Su dominio del balón, juego aéreo y manejo de la presión lo hacen destacar en cada encuentro. 
                Además, su destreza frente al arco garantiza goles y asistencias.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Fade direction="up">
          <img
            src={playerImg}
            alt="Juanchi"
            className="rounded-md w-4/5 h-auto object-cover mx-auto my-auto"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Presentacion;
