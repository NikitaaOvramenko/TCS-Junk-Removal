import type { Metadata } from "next";
import RequestForm from "./RequestForm";

export const metadata: Metadata = {
  title: "Request a Quote | YourLocalJunkRemoval",
  description: "Request a junk removal quote.",
};

export default function RequestPage() {
  return <RequestForm />;
}
