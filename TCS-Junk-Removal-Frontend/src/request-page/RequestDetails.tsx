import ServiceSelection from "./ServiceSelection";

interface Props {
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
  description: string;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  isSubmitting: boolean;
  canSubmit: boolean;
  errorMessage?: string | null;
}

const textAreaClassName =
  "w-full px-4 py-2 border border-gray-200 rounded-lg bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#16C834] focus:border-[#16C834]";

export default function RequestDetails({
  selectedServices,
  onToggleService,
  description,
  onDescriptionChange,
  disabled,
  isSubmitting,
  canSubmit,
  errorMessage,
}: Props) {
  return (
    <section className="space-y-6">
      <ServiceSelection
        selectedServices={selectedServices}
        onSelect={onToggleService}
        disabled={disabled}
      />

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          What do you need removed?
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onDescriptionChange}
          rows={4}
          className={textAreaClassName}
          placeholder="Example: couch + mattress, basement cleanout, appliance pickup..."
          disabled={disabled}
        />
      </div>

      {errorMessage ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className={
          "mt-2 w-full sm:w-fit sm:min-w-[240px] self-start text-white font-bold rounded-xl px-6 py-3 transition-all " +
          (canSubmit
            ? "bg-[#16C834] shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23]"
            : "bg-gray-400 cursor-not-allowed")
        }
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>

      {!selectedServices.length ? (
        <p className="text-xs text-gray-500">
          Please select at least one service type to submit.
        </p>
      ) : null}
    </section>
  );
}




