// app/request/RequestForm.tsx
"use client";

import { useState, type FormEvent } from "react";

import ContactFields from "../components/request-components/ContactFields";
import LocationFields from "../components/request-components/LocationFields";
import RequestDetails from "../components/request-components/RequestDetails";
import { ScrollUp } from "../hooks/ScrollUp";
import axios from "axios";

type FormState = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  street: string;
  town: string;
  postal_code: string;
  selectedServices: string[];
  description: string;
  workType: string;
};

const initialState: FormState = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  country: "USA",
  street: "",
  town: "",
  postal_code: "",
  selectedServices: [],
  description: "",
  workType: "Junk Removal",
};

async function submitRequest(payload: FormState) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email/form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      service: payload.selectedServices.join(", "),
    }),
  });

  const data = (await res.json().catch(() => null)) as {
    message?: string;
  } | null;

  if (!res.ok) {
    return {
      ok: false as const,
      message:
        data?.message ||
        "Something went wrong while submitting your request. Please try again in a moment.",
    };
  }

  return {
    ok: true as const,
    message: data?.message || "Request received! We’ll contact you shortly.",
  };
}

export default function RequestForm() {
  ScrollUp();

  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((id) => id !== serviceId)
          : [...prev.selectedServices, serviceId],
      };
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    console.log({
      name: formData.name.trim(),
      lastname: formData.lastname.trim(),
      country: "USA",
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      street: formData.street.trim(),
      town: formData.town.trim(),
      postal_code: formData.postal_code.trim(),
      selectedServices: formData.selectedServices,
      description: formData.description.trim(),
      workType: formData.workType,
    });

    const result = await submitRequest({
      name: formData.name.trim(),
      lastname: formData.lastname.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      country: "USA",
      street: formData.street.trim(),
      town: formData.town.trim(),
      postal_code: formData.postal_code.trim(),
      selectedServices: formData.selectedServices,
      description: formData.description.trim(),
      workType: formData.workType,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setErrorMessage(result.message);
      return;
    }

    setSuccessMessage(result.message);
    setFormData(initialState);
  };

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
              onDescriptionChange={handleDescriptionChange}
              disabled={isSubmitting}
              isSubmitting={isSubmitting}
              canSubmit={!isSubmitting && formData.selectedServices.length > 0}
              errorMessage={errorMessage}
              successMessage={successMessage}
            />
          </form>
        </div>
      </div>
    </main>
  );
}
