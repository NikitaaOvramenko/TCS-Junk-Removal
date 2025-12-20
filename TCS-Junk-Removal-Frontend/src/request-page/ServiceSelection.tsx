import { services } from "../data/ServicesData";

interface ServiceSelectionProps {
  selectedServices: string[];
  onSelect: (serviceId: string) => void;
  disabled?: boolean;
}

export default function ServiceSelection({
  selectedServices,
  onSelect,
  disabled,
}: ServiceSelectionProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Service Type *
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              disabled={disabled}
              className={`
              flex flex-col items-center p-4 rounded-lg border-2 transition-all
              ${
                isSelected
                  ? "border-[#16C834] bg-green-50 text-[#0C8A23]"
                  : "border-gray-200 hover:border-green-200 bg-white text-gray-600"
              }
              ${disabled ? "opacity-70 cursor-not-allowed" : ""}
            `}
            >
              <span className="text-sm font-medium">{service.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
