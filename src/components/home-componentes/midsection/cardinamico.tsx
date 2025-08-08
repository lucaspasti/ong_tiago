import React from "react";
import { JSX } from "react";


interface CardProps {
  name: string;
  icon: JSX.Element;
  value?: number;
  color: string; // ex: "from-blue-100 to-blue-200"
}

export function CardDinamico({ name, icon, value, color }: CardProps) {
    return (
      <div className={`w-full max-w-sm rounded-xl p-6 text-center shadow-md bg-gradient-to-br ${color} transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`}>
        <div className="flex justify-center mb-4">
          <div className="bg-white/50 p-3 rounded-full text-3xl">
            {icon}
          </div>
        </div>
  
        {value !== undefined ? (
          <>
            <h2 className="text-4xl font-bold text-indigo-700">{value}</h2>
            <p className="mt-2 text-gray-800 font-medium">{name}</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-indigo-700">{name}</h2>
            <p className="mt-2 text-gray-800 font-medium">Nossa Base de Atuação</p>
          </>
        )}
      </div>
    );
  }
  