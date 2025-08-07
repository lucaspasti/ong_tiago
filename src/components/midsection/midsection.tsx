
import { CardDinamico } from "./cardinamico";

import {
Users,
Handshake,
Accessibility,
MapPin,
Recycle,
} from "lucide-react";

const icons = {
Users: <Users className="text-blue-600 w-8 h-8" />,
Handshake: <Handshake className="text-green-600 w-8 h-8" />,
Accessibility: <Accessibility className="text-purple-600 w-8 h-8" />,
Recycle: <Recycle className="text-yellow-500 w-8 h-8" />,
MapPin: <MapPin className="text-indigo-600 w-8 h-8" />,
};

export interface CardData {
name: string;
iconName: string; //  "Users", "MapPin" ...
value?: number;
color: string;
}

const dados: CardData[] = [ // dados do backend
    {
      name: "Pessoas Ajudadas",
      iconName: "Users",
      value: 247,
      color: "from-blue-100 to-blue-200",
    },
    {
      name: "Empréstimos Realizados",
      iconName: "Handshake",
      value: 423,
      color: "from-green-100 to-green-200",
    },
    {
      name: "Equipamentos Disponíveis",
      iconName: "Accessibility",
      value: 56,
      color: "from-purple-100 to-purple-200",
    },
    {
      name: "Kg de Lacres Coletados",
      iconName: "Recycle",
      value: 347,
      color: "from-yellow-100 to-yellow-200",
    },
    {
      name: "Florianópolis",
      iconName: "MapPin",
      color: "from-blue-100 to-blue-200",
    },
  ];
  



export function MidSection() {
    return (
      <div id='impacto' className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
            <div className="text-center py-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Nosso Impacto em Florianópolis
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                    Números que mostram a diferença que fazemos em nossa cidade
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
            {dados.slice(0, 3).map((item, index) => {
            const icon = icons[item.iconName as keyof typeof icons];
            if (!icon) {
                console.warn(`ícone não encontrado: ${item.iconName}`);
                return null;
            }

            return (
                <CardDinamico
                key={index}
                name={item.name}
                icon={icon}
                value={item.value}
                color={item.color}
                />
            );
            })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mt-6 max-w-4xl mx-auto place-items-center">
            {dados.slice(3).map((item, index) => {
            const icon = icons[item.iconName as keyof typeof icons];

            if (!icon) {
                console.warn(`ícone não encontrado: ${item.iconName}`);
                return null;
            }

            return (
                <CardDinamico
                key={index}
                name={item.name}
                icon={icon}
                value={item.value}
                color={item.color}
                />
            );
            })}
            </div>
        </div>
      );
}