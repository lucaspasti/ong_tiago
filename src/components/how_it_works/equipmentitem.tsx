import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface EquipmentItemProps {
  icon: IconDefinition; // Tipagem do FA
  title: string;
  description: string;
  iconColor: string; // ex: "text-blue-500 bg-blue-100"
}

export function EquipmentItem({
  icon,
  title,
  description,
  iconColor,
}: EquipmentItemProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`">
      <div className={`p-3 rounded-full ${iconColor}`}>
        <FontAwesomeIcon icon={icon} className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}
