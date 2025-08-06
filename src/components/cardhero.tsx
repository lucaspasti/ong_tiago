import { Bluetooth, Accessibility } from "lucide-react"

export function CardHero() {
    return (
        <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="flex-1 bg-white/20 rounded-lg p-6 text-center text-yellow-300 shadow-md flex flex-col justify-center">
                <Accessibility size={64} className="mx-auto mb-2" />
            </div>
            <div className="flex-1 bg-white/20 rounded-lg p-6 text-center text-yellow-300 shadow-md flex flex-col justify-center">  
                <Accessibility size={64} className="mx-auto mb-2"/>
            </div>
        </div>
    )
}