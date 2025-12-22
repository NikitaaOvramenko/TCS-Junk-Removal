import BookButton from "./BookButton";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Contact info */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-gray-400">Contact us</p>
          <p className="font-medium">
            📞{" "}
            <a href="tel:+14243464307" className="hover:underline">
              +1 (424) 346-4307
            </a>
          </p>
          <p className="font-medium">
            ✉️{" "}
            <a
              href="mailto:info@tcsjunkremoval.com"
              className="hover:underline"
            >
              info@tcsjunkremoval.com
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <BookButton className="mt-2 w-fit self-center bg-[#16C834] text-white font-bold rounded-xl px-6 py-3 shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23] transition-all"></BookButton>

          <p className="text-xs text-gray-500">Fast • Affordable • Reliable</p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} YourLocalJunkRemoval
          <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
}
