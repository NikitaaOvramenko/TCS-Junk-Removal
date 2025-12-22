interface Props {
  values: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const inputClassName =
  "w-full px-4 py-2 border border-gray-200 rounded-lg bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-[#16C834] focus:border-[#16C834]";

export default function ContactFields({ values, onChange, disabled }: Props) {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            className={inputClassName}
            disabled={disabled}
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={values.lastname}
            onChange={onChange}
            className={inputClassName}
            disabled={disabled}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
            className={inputClassName}
            disabled={disabled}
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            className={inputClassName}
            placeholder="(555) 555-5555"
            disabled={disabled}
            required
          />
        </div>
      </div>
    </section>
  );
}



