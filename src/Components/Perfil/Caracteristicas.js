import React from "react";
import { Fade } from "react-awesome-reveal";
import playerImg from "../../assets/img/Juanchi/Diseño sin título (11).png";
import playerImg2 from "../../assets/img/Juanchi/Diseño sin título (19).png";
import playerImg3 from "../../assets/img/Juanchi/Diseño sin título (15).png";
import playerImg4 from "../../assets/img/Juanchi/Diseño sin título (12).png";
import "./Perfil.css";

const Caracteristicas = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
       <h1 className="text-3xl font-bold text-center mb-8 bg-black bg-opacity-50 text-white">Características</h1>
      <div className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            img: playerImg,
            texts: [
              { title: "Inteligencia táctica", description: "Conocimiento del juego y capacidad para tomar decisiones inteligentes en situaciones de presión, ayudando a controlar el ritmo del partido y mantener el equilibrio entre la defensa y el ataque." },
              { title: "Visión de juego", description: "Capacidad para leer el juego y anticipar las jugadas, lo que permite tomar decisiones rápidas y precisas tanto en defensa como en ataque." }
            ]
          },
          {
            img: playerImg2,
            texts: [
              { title: "Liderazgo", description: "Capacidad para inspirar y motivar a los compañeros, tomando la iniciativa en momentos cruciales del partido." },
              { title: "Personalidad", description: "Presencia fuerte en el campo, mostrando confianza y determinación en cada acción." }
            ]
          },
          {
            img: playerImg3,
            texts: [
              { title: "Resistencia física", description: "Capacidad para mantener un alto nivel de energía y rendimiento durante todo el partido, cubriendo grandes distancias en el campo y participando activamente en todas las fases de juego." },
              { title: "Distribución de juego", description: "Precisión en los pases cortos y largos para iniciar jugadas desde el medio campo y conectar con los compañeros de equipo en áreas claves del campo." }
            ]
          },
          {
            img: playerImg4,
            texts: [
              { title: "Gol", description: "Precisión y determinación para marcar goles, tanto de jugadas como de juego aéreo, contribuye al ataque con llegada al área rival, disparos desde afuera del área, asistencia a los delanteros." },
              { title: "Versatilidad", description: "Capacidad para adaptarse a diferentes sistemas de juego y desempeñar roles tanto defensivos como ofensivos según las necesidades del equipo." },
              { title: "Habilidad defensiva sólida", description: "Buena capacidad de marca, agresividad y determinación para interceptar pases, recuperar balones y generar transiciones rápidas entre defensa y ataque." }
            ]
          }
        ].map(({ img, texts }, index) => (
          <Fade key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 p-2 bg-black bg-opacity-50 text-white">
                {texts.map(({ title, description }, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold mb-2"><div className="rotating-icon">⚽</div> {title}</h3>
                    <p className="text-1xl ">{description}</p>
                  </div>
                ))}
              </div>
              <div className="md:w-3/4 ">
                <img
                  className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  src={img}
                  alt={`Juanchi ${index + 1}`}
                />
              </div>
            
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Caracteristicas;

