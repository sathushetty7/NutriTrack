
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Meals", href: "/meals" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Sign up", href: "/signup" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[#fdfcf9] px-6 pb-8 pt-12 md:px-10 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-[#172b4d]/10 pb-10 md:grid-cols-[1.5fr_1fr]">
          {/* Brand introduction */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#172b4d] text-sm font-bold text-white">
                N
              </span>

              <span className="text-lg font-semibold tracking-[-0.04em] text-[#172b4d]">
                Nutri<span className="text-[#7395bf]">Track</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#7b8494]">
              Understand your food. Build better habits. Make everyday
              nutrition feel simpler.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a94a6]">
              Navigate
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm font-medium text-[#667085] transition-colors hover:text-[#172b4d]"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-[#8a94a6] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NutriTrack. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made for better everyday choices
            <Heart className="h-3.5 w-3.5 fill-[#7395bf] text-[#7395bf]" />
          </p>
        </div>
      </div>
    </footer>
  );
}