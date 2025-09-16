"use client";

import React from "react";

interface CardProps {
  Title: string;
  Years: number;
  description: string;
}

interface CardColorProps {
  gradient: string;
  shadow: string;
}

const Card = ({ Title, Years, description }: CardProps) => {
  const [flipped, setFlipped] = React.useState(false);

  const colorGradients: CardColorProps[] = [
    {
      gradient: "bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500",
      shadow: "shadow-lg shadow-orange-500/50",
    },
    {
      gradient: "bg-gradient-to-br from-blue-500 via-cyan-600 to-green-500",
      shadow: "shadow-lg shadow-blue-500/50",
    },
    {
      gradient: "bg-gradient-to-br from-red-500 via-orange-600 to-rose-500",
      shadow: "shadow-lg shadow-red-500/50",
    },
    {
      gradient: "bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500",
      shadow: "shadow-lg shadow-purple-500/50",
    },
  ];

  // Random gradient for each card
  const randomIndex = Math.floor(Math.random() * colorGradients.length);
  const { gradient, shadow } = colorGradients[randomIndex];

  return (
    <div
      className={`w-72 h-96 perspective cursor-pointer`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style preserve-3d transition-transform ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full ${gradient} ${shadow} rounded-xl flex flex-col items-center justify-center text-white backface-hidden p-6`}
        >
          <h1 className="text-3xl md:text-4xl font-bold">{Title}</h1>
          <p className="mt-4 text-sm md:text-base">Click to see more</p>
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full ${gradient} ${shadow} rounded-xl flex flex-col justify-center items-center text-white backface-hidden rotate-y-180 p-6`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{Title}</h1>
          <div className="flex flex-col items-center mb-6 h-48 overflow-y-auto hide-scrollbar ">
            <p className="text-sm md:text-base mb-4">{description}</p>
          </div>
          <p className="font-semibold">Years: {Years}</p>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Card;
