import React from "react";
import RoadMapTimeline from "./components/RoadMapTImeline";


export default function InterestGroupRoadmap({ roadMapData, activeCard, setActiveCard }) {
  return (
    <div className="flex flex-col overflow-hidden py-4 border border-gray-400 shadow-lg rounded-md max-h-[95vh] overflow-y-auto">
      <div className="flex items-start justify-start bg-[rgba(255,255,255,1)] w-full relative">
        <div>
          <RoadMapTimeline 
            roadMapData={roadMapData} 
            setActiveCard={setActiveCard}
          />
        </div>
        <div className="max-w-6xl md:px-4">
          <div className="flex flex-col overflow-auto gap-4">
            <div className="flex flex-col mb-6 justify-start items-start">
              <h1 className="text-left text-3xl sm:text-4xl font-bold text-orange-400 mb-4">
                {activeCard?.title}
              </h1>
              <p className="text-gray-700 leading-relaxed">
                {activeCard?.data?.description}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start rounded-md bg-white">
              <h2 className="text-2xl text-left font-semibold text-black m-0 rounded-t-md w-full">
                What you will learn
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 p-4">
                {activeCard?.data?.whatYouWillLearn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col items-start justify-start rounded-md bg-white">
                <h2 className="text-2xl text-left font-semibold text-black m-0 rounded-t-md w-full">
                  Challenges
                </h2>
                {activeCard?.data?.challenges.map((challenge, index) => (
                  <span key={index} className="bg-white-400 border border-gray-400 rounded-md w-full mt-4">
                    <h3 className="bg-orange-400 p-4 rounded-t-md text-left font-medium">
                      {challenge.title}
                    </h3>
                    <p className="p-4">
                      {challenge.description}
                    </p>
                    <ul className="p-4">
                      {challenge.resources.map((resource, resourceIndex) => (
                        <li key={resourceIndex}>
                          <span className="text-orange-400">Resource {resourceIndex + 1}</span>: {resource}
                        </li>
                      ))}
                    </ul>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}