import { StepItem } from "./stepitem";
import { EquipmentItem } from "./equipmentitem";

import { faWheelchair, faCrutch, faPersonWalkingWithCane, faPersonWalking } from '@fortawesome/free-solid-svg-icons'

export function HowItWorksSection() {
    return (
      <section id='sobre' className="bg-gray-50 py-20 scroll-mt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* Etapas */}
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-4xl font-bold mb-8">Como Funciona o Projeto</h2>
                <div className="space-y-6">
                <StepItem
                    number={1}
                    title="Coleta de Lacres"
                    description="Coletamos lacres de alumínio em pontos espalhados pela cidade, escolas e empresas parceiras."
                    color="bg-blue-500"
                />
                <StepItem
                    number={2}
                    title="Venda e Aquisição"
                    description="Os lacres são vendidos para reciclagem e o valor é usado para comprar equipamentos médicos e ortopédicos."
                    color="bg-green-500"
                />
                <StepItem
                    number={3}
                    title="Empréstimo Gratuito"
                    description="Disponibilizamos os equipamentos gratuitamente para pessoas que precisam, pelo tempo necessário."
                    color="bg-purple-500"
                />
                </div>
            </div>

            {/* Equipamentos */}
            <div className="flex flex-col justify-center space-y-6">
                <EquipmentItem
                icon={faCrutch}
                title="Muletas"
                description="Diversos tamanhos e modelos"
                iconColor="bg-blue-100 text-blue-600"
                />
                <EquipmentItem
                icon={faWheelchair}
                title="Cadeiras de Rodas"
                description="Manuais para diferentes necessidades"
                iconColor="bg-green-100 text-green-600"
                />
                <EquipmentItem
                icon={faPersonWalking}
                title="Andadores"
                description="Com e sem rodas"
                iconColor="bg-purple-100 text-purple-600"
                />
                <EquipmentItem
                icon={faPersonWalkingWithCane}
                title="Bengalas"
                description="Diversos modelos"
                iconColor="bg-red-100 text-red-600"
                />
            </div>
            </div>

        </div>
      </section>
    );
  }
  