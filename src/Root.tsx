import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Root = () => {
  return (
    <div className="p-6 flex items-start justify-start">
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col items-start">
      {/* Titolo */}
      <h2 className="text-xl font-bold mb-3">
        Pikachu - 0
      </h2>

      {/* Quadrato bianco */}
      <div className="w-[400px] h-[400px] bg-white border border-gray-300 flex items-center justify-center">
        {/* Quadrato grigio più piccolo e centrato */}
        <div className="w-[200px] h-[200px] bg-gray-400 flex items-center justify-center">
          400x400
        </div>
      </div>
    </div>
  );
};

export default Card;