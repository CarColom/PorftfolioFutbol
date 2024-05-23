import backgroundImg from "../assets/img/REFLECTOR.png";
import playerImg from "../assets/img/Juanchi/JUANCHIPRESENTACION.png";
import React from "react";
import { Fade } from "react-awesome-reveal";
import 'tailwindcss/tailwind.css';
import Layout from "../Components/Layout/Layout";
import Perfil from "../Components/Perfil/Perfil";
import Estadisticas from "../Components/Estadisticas/estadisticas";
import Video from "../Components/Videos/videos";
import GaleriaDeFotos from "../Components/GaleriaDeFotos/Fotos";
import Presentacion from "../Components/Presentacion/Presentacion"


const Home = () => {
  return (
    <Layout>
      <main>
        <Presentacion/> 
      <section id="perfil">
      <Perfil />
      </section>
      <section id="estadisticas">
      <Estadisticas />
      </section> 
      <section id="videos">
       <Video />
      </section>  <section id="galeria">
      <GaleriaDeFotos />
      </section>
      </main>
    </Layout>
  );
};

export default Home;





