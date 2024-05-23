import React from "react";
import { Fade } from "react-awesome-reveal";
import playerImg from "../../assets/img/Juanchi/GOALS (1).png";

const Datos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      
      <div className="w-full md:w-1/2 p-6 text-center bg-black bg-opacity-50 text-white md:text-left">
        <Fade direction="right">
            <div className="text-4xl font-bold mb-4 ">Datos Personales</div>
            <div className="text-lg space-y-2">
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4" ><span className="rotating-icon">⚽</span> Fecha de Nacimiento: 12/08/1998</p>
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4"><span className="rotating-icon">⚽</span> Pie hábil: Derecho</p>
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4"><span className="rotating-icon">⚽</span> Altura: 1,85 mts</p>
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4"><span className="rotating-icon">⚽</span> Peso: 75 kg</p>
              <p className="text-lg md:text-xl font-Libre-Baskerville text-white mb-4"><span className="rotating-icon">⚽</span> Nacionalidad: Argentino-Italiano</p>
            </div>
        </Fade>
      </div>
        <Fade direction="right">
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

export default Datos;



