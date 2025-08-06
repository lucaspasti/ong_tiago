import { LucideIcon } from "lucide-react"

interface HelpCardProps {
  icon: LucideIcon
  iconColor: string
  title: string
  description: string
}

export function HelpCard({ icon: Icon, iconColor, title, description }: HelpCardProps) {
    return (
      <div className="flex flex-col items-center text-center min-h-[180px] justify-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
        <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }
  