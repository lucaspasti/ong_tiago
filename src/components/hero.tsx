import { Button } from '@/components/ui/button'
import { Info } from "lucide-react"
import 'animate.css'

export function Hero() {
    return (
        <div className="flex-1 text-white flex flex-col justify-center max-w-xl gap-6">
            <h1 className="text-4xl font-bold leading-tight">
                Transformando <span className="text-yellow-300">Lacres</span> em <span className="text-yellow-300">Esperança</span>
            </h1>
            <h3 className="text-lg leading-relaxed">
                <span className="font-semibold">Em Florianópolis</span>, coletamos lacres de alumínio para adquirir equipamentos médicos e ortopédicos, oferecendo empréstimos gratuitos para quem mais precisa.
            </h3>
            <p className="border border-yellow-300 text-sm p-4 rounded-md bg-white/10">
                <Info className="inline-block mr-2 text-yellow-300" size={18} />
                <span className="font-medium text-white">
                    Atendemos exclusivamente a região de Florianópolis e Grande Florianópolis
                </span>
            </p>
            <div className='space-x-3'>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-6 py-3 animate__animated animate__pulse">
                🛠️ Solicitar Equipamento
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 text-sm font-semibold px-6 py-3 bg-indigo-480">
                ℹ️ Saiba Mais
                </Button>
            </div>
        </div>
    )
}