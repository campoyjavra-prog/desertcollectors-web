"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <nav className="flex w-full items-center justify-between px-8 py-3 lg:px-12 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/header.png"
            alt="Desert Collectors Logo"
            width={450}
            height={130}
            className="h-14 lg:h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-1 py-2 uppercase text-lg font-black tracking-wide text-white/50 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right side: User icon + Mobile hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          {/* User / Login icon */}
          <Link
            href="/login"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/50 transition-colors duration-300 hover:text-white"
            aria-label="Iniciar sesión"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>

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
        </div>
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
              className="rounded-lg px-4 py-3 text-base font-black uppercase tracking-wide text-white/50 transition-all duration-300 hover:bg-desert-stone hover:text-white"
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
