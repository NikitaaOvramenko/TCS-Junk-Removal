import BookButton from "./BookButton";
import Logo from "../assets/Modified_Logo.svg?react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#14D10B] from-15% to-[#51D488] to-70%" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Logo className="w-12 h-12" />
              <p className="font-LemonMilk text-[clamp(1rem,2vw,1.25rem)] leading-none">
                YourLocalJunkRemoval
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed text-center md:text-left">
              Fast, affordable, and reliable junk removal in{" "}
              <span className="text-white">Toronto & the GTA</span>.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left space-y-3">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Contact
            </p>

            <a
              href="tel:+14243464307"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-white hover:underline underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C834] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span aria-hidden>📞</span>
              <span className="font-medium">+1 (424) 346-4307</span>
            </a>

            <div>
              <a
                href="mailto:info@tcsjunkremoval.com"
                className="inline-flex items-start gap-2 text-gray-200 hover:text-white hover:underline underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C834] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span aria-hidden>✉️</span>
                <span className="font-medium">info@tcsjunkremoval.com</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Ready to book?
            </p>
            <BookButton className="mt-1 w-fit  bg-[#16C834] text-white font-bold rounded-xl px-6 py-3 shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16C834] focus-visible:ring-offset-2 focus-visible:ring-offset-black"></BookButton>
            <p className="text-xs text-gray-500">
              Fast • Affordable • Reliable
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} TCS Junk Removal. All rights reserved.
          </p>
          <p>Serving Toronto & the GTA</p>
        </div>
      </div>
    </footer>
  );
}
