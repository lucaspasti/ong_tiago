import { HelpCard } from "./helpcard"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, HandHelping } from "lucide-react"

interface NeedHelpSectionProps {
  onSolicitarClick: () => void
}

export function NeedHelpSection({ onSolicitarClick }: NeedHelpSectionProps) {
  return (
    <section id='contato' className="bg-white py-20 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Precisa de Ajuda?</h2>
        <p className="text-muted-foreground mb-12">
          Entre em contato conosco ou solicite um equipamento em Florianópolis
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-12 items-center">
          <HelpCard
            icon={Phone}
            iconColor="bg-blue-100 text-blue-600"
            title="Telefone"
            description="(11) 99999-9999"
          />
          <HelpCard
            icon={Mail}
            iconColor="bg-green-100 text-green-600"
            title="Email"
            description="contato@lacrefraterno.org"
          />
          <HelpCard
            icon={MapPin}
            iconColor="bg-purple-100 text-purple-600"
            title="Localização"
            description="Florianópolis, SC"
          />
        </div>

        <Button
        onClick={onSolicitarClick}
        size="lg"
        className="h-14 text-white text-xl font-semibold w-full max-w-md mx-auto bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
        <HandHelping className="w-5 h-5 mr-2" />
        Solicitar Equipamento Agora
        </Button>

      </div>
    </section>
  )
}
