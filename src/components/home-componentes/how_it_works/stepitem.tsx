interface StepItemProps {
    number: number;
    title: string;
    description: string;
    color: string; // tailwind ex: "bg-blue-500"
  }
  
  export function StepItem({ number, title, description, color }: StepItemProps) {
    return (
      <div className="flex items-start gap-4 mb-6">
        <div className={`min-w-9 min-h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm ${color}`}>
          {number}
        </div>
        <div>
          <h4 className="font-semibold text-xl">{title}</h4>
          <p className="text-gray-600 text-base">{description}</p>
        </div>
      </div>
    );
  }
  