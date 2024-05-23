import React from "react";
import Datos from "./Datos";
import Caracteristicas from "./Caracteristicas";
import Historial from "./Historial";
import backgroundImg from "../../assets/img/CESPED.png";

const Perfil = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <Datos id="perfil" />
        <Caracteristicas />
        <Historial />
      </div>
    </div>
  );
};

export default Perfil;

