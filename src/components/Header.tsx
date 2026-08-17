"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Cartas Sueltas", href: "/cartas-sueltas" },
  { label: "Cajas Selladas", href: "/cajas-selladas" },
  { label: "Accesorios", href: "/accesorios" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-desert-warm-gray/30 backdrop-blur-xl bg-desert-black/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-desert-amber to-desert-gold shadow-lg shadow-desert-amber/20 transition-shadow duration-300 group-hover:shadow-desert-amber/40">
            <span className="text-sm font-bold text-desert-black">DC</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-desert-sand-light transition-colors duration-300 group-hover:text-desert-amber">
            Desert Collectors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-desert-sand/80 transition-colors duration-300 hover:text-desert-amber"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-lg bg-desert-warm-gray/0 transition-all duration-300 hover:bg-desert-warm-gray/30" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-desert-sand transition-colors hover:bg-desert-stone"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-desert-black/90 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 border-l border-desert-warm-gray/30 bg-desert-charcoal/95 backdrop-blur-xl transition-transform duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pt-24">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-desert-sand/80 transition-all duration-300 hover:bg-desert-stone hover:text-desert-amber"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
