"use client";
import { motion } from "framer-motion";
import { LevelCard } from "./LevelCard";
import { JumpButton } from "./JumpButton";

function Timeline() {
  const timelineData = [
    {
      level: 1,
      cards: [
        {
          title: "Time Complexity",
          articles: 6,
          problems: 15,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: 2,
      cards: [
        {
          title: "Arrays",
          articles: 12,
          problems: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Math",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
      ],
    },
    {
      level: 2,
      cards: [
        {
          title: "Arrays",
          articles: 12,
          problems: 44,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Math",
          articles: 6,
          problems: 29,
          rating: 0,
          hasGift: true,
        },
        {
          title: "Math",
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
              <span className="text-gray-600">Level {level.level}</span>
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
            <JumpButton level={level.level + 1} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
