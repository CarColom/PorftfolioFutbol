import React from 'react';
import ProgressBar from './ProgressBar'; // Importa el nuevo componente
import './StatsComponent.css'; 

const StatsComponent = ({ goals, Match, minutedPlayed, assist }) => {
  return (
    <div className="stats-container p-8">
      <div className="text-center mb-6 bg-white bg-opacity-50">
        <h2 className="text-3xl font-bold text-black ">Estadísticas</h2>
      </div>
      <div className="">
        <div className="stat-item flex flex-col items-center ">
          
          <ProgressBar label="Goals" value={goals} max={10} />
        </div>
        <div className="stat-item flex flex-col items-center">
          
          <ProgressBar label="Match" value={Match} max={28} />
        </div>
        <div className="stat-item flex flex-col items-center">
         
          <ProgressBar label="Minutes Played" value={minutedPlayed} max={2520} />
        </div>
        <div className="stat-item flex flex-col items-center">
         
          <ProgressBar label="Assist" value={assist} max={7} />
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;

