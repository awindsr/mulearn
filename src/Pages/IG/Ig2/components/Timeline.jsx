"use client";
import { motion } from "framer-motion";
import { LevelCard } from "./LevelCard";
import { JumpButton } from "./JumpButton";

function Timeline() {
  const timelineData = [
    {
      level: "Basic",
      cards: [
        {
          title: "Foundational Understanding",
          articles: 6,
          problems: 15,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Core Engine Skills",
          articles: 6,
          problems: 15,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: "Intermediate",
      cards: [
        {
          title: "Programming and Scripting",
          articles: 12,
          problems: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "3D Modeling and Animation",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Physics and Spatial Effects",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: "Advanced",
      cards: [
        {
          title: "UI/UX Design",
          articles: 12,
          problems: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Optimization and Debugging",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Publishing and Testing",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Portfolio and Community Engagement",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {timelineData.map((level, index) => (
        <motion.div
          key={level.level}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-8">
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className="bg-white px-4 py-1 rounded-full shadow-sm border border-neutral-200">
              <span className="text-gray-600">{level.level}</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div
              className={`grid gap-8 ${
                level.cards.length === 1
                  ? "grid-cols-1 place-items-center"
                  : "grid-cols-2"
              }`}>
              {level.cards.map((card, cardIndex) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: cardIndex % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 + cardIndex * 0.2 }}>
                  <LevelCard card={card} />
                </motion.div>
              ))}
            </div>
          </div>
          {index < timelineData.length - 1 && (
            <JumpButton level={level.level} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
