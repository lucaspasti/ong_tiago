import { Bluetooth, Activity } from "lucide-react"

export function CardHero() {
    return (
        <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="bg-white/10 rounded-lg p-6 text-center text-yellow-300 shadow-md">
                <Activity size={64} className="mx-auto mb-2" />
                <p className="text-white">Pessoa usando muletas em Florianópolis</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center text-yellow-300 shadow-md">  
                <Bluetooth size={64} className="mx-auto mb-2"/>
                <p className="text-white">Pessoa em cadeira de rodas</p>
            </div>
        </div>
    )
}