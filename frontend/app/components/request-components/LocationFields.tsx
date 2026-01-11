import { useEffect, useState } from "react";

interface Props {
  values: {
    town: string;
    street: string;
    postal_code: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
}

const inputClassName =
  "w-full px-4 py-2 border text-black border-gray-200 rounded-lg bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#16C834] focus:border-[#16C834]";

export default function LocationFields({ values, onChange, disabled }: Props) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const url = window.sessionStorage.getItem("loc");
    console.log(url);
    console.log(url?.split("/"));

    if (url) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUrl(url);
    }
  }, []);
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City / Town
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={values.town}
            onChange={onChange}
            className={inputClassName}
            placeholder={`ex: ${url
              .split("/")[2]
              ?.split("-")
              .map((w) => w[0].toUpperCase() + w.slice(1))
              .join(" ")}`}
            disabled={disabled}
          />
        </div>

        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={values.street}
            onChange={onChange}
            className={inputClassName}
            placeholder={`ex: ${
              url.split("/")[0] == "us" ? "125 NE 9th St" : "Victoria Street"
            }`}
            disabled={disabled}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="postal_code"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postal_code"
          name="postal_code"
          value={values.postal_code}
          onChange={onChange}
          className={"max-w-sm " + inputClassName}
          placeholder={`ex: ${url.split("/")[0] == "us" ? "33305" : "M4J 9E5"}`}
          disabled={disabled}
        />
      </div>
    </section>
  );
}
