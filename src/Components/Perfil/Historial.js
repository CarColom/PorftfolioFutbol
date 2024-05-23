import React from "react";
import { Fade } from "react-awesome-reveal";
import playerImg from "../../assets/img/Juanchi/Juanchi.jpeg";
import icon1 from "../../assets/img/Galeria/Pomarico.png"
import icon2 from "../../assets/img/Galeria/Piano.png"
import icon3 from "../../assets/img/Galeria/Aurora.png"
import icon4 from "../../assets/img/Galeria/Villarreal.png"
import icon5 from "../../assets/img/Galeria/Adiur.png"


const HistorialDeportivo = () => {
  const historyItems = [
    {
      text: "Pomarico - Italia",
      icon: icon1,
    },
    {
      text: "Piano della Lente - Italia",
      icon: icon2,
    },
    {
      text: "Aurora Treia - Italia",
      icon: icon3,
    },
    {
      text: "Villarreal - España",
      icon: icon4,
    },
    {
      text: "Adiur Rosario - Argentina",
      icon: icon5,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 p-6 text-center bg-black bg-opacity-50 text-white md:text-left">
          <Fade direction="right">
            <div className="text-4xl font-bold mb-4">Historial deportivo</div>
            <div className="text-lg space-y-2">
              {historyItems.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img src={item.icon} alt={`Icon ${index + 1}`} className="w-6 h-6 mr-2" />
                  <p className="text-lg md:text-xl font-Libre-Baskerville text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <Fade direction="right">
          <img
            src={playerImg}
            alt="Juanchi"
            className="rounded-md w-4/5 md:w-1/2 h-auto object-cover mx-auto my-auto"
          />
        </Fade>
      </div>
    </div>
  );
};

export default HistorialDeportivo;