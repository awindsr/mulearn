import React from 'react';

const RoadMapTimeline = ({ roadMapData, handleSetCurrentCard }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {roadMapData.map((level, levelIndex) => (
        <div key={level.level} className="mb-12" id={`level-${levelIndex}`}>
          <h2 className="text-xl font-semibold mb-4 rounded-lg text-left">{level.level}</h2>
          <div className="pl-4 border-l-2 border-gray-300">
            {level.cards.map((card) => (
              <div 
                key={card.title} 
                className="mb-8 relative cursor-pointer"
                onClick={() => handleSetCurrentCard(card)}
              >
                <div className="absolute -left-[25px] top-1 w-4 h-4 bg-orange-400 rounded-full"></div>
                <div className="pl-6">
                  <h3 className="text-sm font-semibold mb-2 flex items-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Resources: {card.resources} | Proof of Work: {card.proofOfWork}
                  </p>
                  <button 
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          {levelIndex < roadMapData.length - 1 && (
            <button 
              type="button"
              className="mt-4 flex items-center justify-center w-full py-2 px-4 hover:bg-orange-500 bg-gray-300 transition-colors rounded-lg text-sm font-medium"
              onClick={() => {
                const nextLevel = document.getElementById(`level-${levelIndex + 1}`);
                nextLevel?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skip to {roadMapData[levelIndex + 1].level}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoadMapTimeline;

