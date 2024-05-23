import React from 'react';
import VideoJuanchi from "../../assets/Video/Juan Ignacio Cettou ｜ Centrocampista - Midfielder • 2024.mp4"
import backgroundImg from "../../assets/img/PELOTA.png";

const Video = () => {
  return (
    <div className="relative md:min-h-screen" id="videos">
    {/* Fondo con opacidad */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full " style={{ backgroundImage: `url(${backgroundImg})`, zIndex: -1 }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>

    {/* Contenido */}
    <div className="flex flex-col items-center justify-center text-white relative z-10">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">Video</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 max-w-xl">
        <video controls className="video-player">
          <source src={VideoJuanchi} type="video/mp4" />
        </video>
      </div>
    </div>
    </div>
  );
};

export default Video;


