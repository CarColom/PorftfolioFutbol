import React from 'react';
import StatsComponent from './StatsComponent';

const Estadisticas = () => {
  // Suponiendo que tienes los datos del jugador disponibles
  const playerStats = {
    playerName: 'Juan Ignacio Cettou',
    goals: 5,
    Match: 25,
    minutedPlayed: 2250,
    assist: 3
  };

  return (
    <div>
      <StatsComponent {...playerStats} />
    </div>
  );
};

export default Estadisticas;




