import { useState, type FormEvent } from "react";

import axios from "axios";
import ContactFields from "../request-page/ContactFields";
import LocationFields from "../request-page/LocationFields";
import RequestDetails from "../request-page/RequestDetails";

interface FormData {
  name: string;

  lastname: string;

  email: string;

  phone: string;

  street: string;

  town: string;

  postal_code: string;

  description: string;

  selectedServices: string[];

  workType: string;

  country: string;
}

export default function RequestPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",

    lastname: "",

    email: "",

    phone: "",

    street: "",

    town: "",

    postal_code: "",

    description: "",

    selectedServices: [],

    // Keep these keys in case the backend expects them.
    workType: "Junk Removal",

    country: "CANADA",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage(null);
    setIsSubmitting(true);

    const payload = {
      ...formData,

      service: formData.selectedServices.join(", "),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/email/form`,

        payload
      );

      console.log("Form Submitted:", payload);

      console.log("Response:", response);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Something went wrong while submitting your request. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData((prev) => {
      const services = prev.selectedServices;

      if (services.includes(serviceId)) {
        return {
          ...prev,

          selectedServices: services.filter((id) => id !== serviceId),
        };
      } else {
        return { ...prev, selectedServices: [...services, serviceId] };
      }
    });
  };

  if (isSuccess) {
    return (
      <main className="pt-[90px] pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="text-4xl mb-4">✅</div>

            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Request Received!
            </h3>

            <p className="text-green-700">
              Thank you, {formData.name}. We’ve received your request and will
              contact you shortly at {formData.phone}.
            </p>

            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setErrorMessage(null);
              }}
              className="mt-6 w-fit self-center bg-[#16C834] text-white font-bold rounded-xl px-6 py-3 shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23] transition-all"
            >
              Submit another request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[90px] pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="font-LemonMilk text-[clamp(1.3rem,5vw,3rem)] bg-gradient-to-r from-[#14D10B] from-18 to-[#51D488] to-45% bg-clip-text text-transparent">
              Book Your Removal
            </h1>
            <p className="mt-2 text-gray-600">
              Tell us what you need removed and we’ll get back to you with next
              steps.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 space-y-8"
          >
            <ContactFields
              values={{
                name: formData.name,
                lastname: formData.lastname,
                email: formData.email,
                phone: formData.phone,
              }}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <LocationFields
              values={{
                town: formData.town,
                street: formData.street,
                postal_code: formData.postal_code,
              }}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <RequestDetails
              selectedServices={formData.selectedServices}
              onToggleService={handleServiceSelect}
              description={formData.description}
              onDescriptionChange={handleChange}
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
              canSubmit={!isSubmitting && formData.selectedServices.length > 0}
              errorMessage={errorMessage}
            />
          </form>
        </div>
      </div>
    </main>
  );
}
