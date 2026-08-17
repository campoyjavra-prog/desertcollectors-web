"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBanner() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate floating particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.fromTo(
          particles,
          {
            opacity: 0,
            scale: 0,
            y: () => gsap.utils.random(100, 300),
          },
          {
            opacity: () => gsap.utils.random(0.15, 0.4),
            scale: 1,
            y: 0,
            duration: () => gsap.utils.random(1.5, 3),
            stagger: 0.1,
            ease: "power2.out",
          }
        );

        // Continuous floating animation
        Array.from(particles).forEach((particle) => {
          gsap.to(particle, {
            y: () => gsap.utils.random(-30, 30),
            x: () => gsap.utils.random(-20, 20),
            rotation: () => gsap.utils.random(-10, 10),
            duration: () => gsap.utils.random(4, 8),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }

      // Main content animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
        }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-desert-black"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--desert-stone)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--desert-charcoal)_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-desert-amber/40 to-transparent" />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, var(--desert-amber), var(--desert-gold))`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-desert-warm-gray/40 bg-desert-charcoal/60 px-4 py-1.5 text-xs font-medium tracking-widest text-desert-amber uppercase backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-desert-amber animate-pulse" />
          Colección Exclusiva
        </div>

        <h1
          ref={titleRef}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-desert-sand-light sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ opacity: 0 }}
        >
          Joyas del{" "}
          <span className="bg-gradient-to-r from-desert-amber via-desert-gold to-desert-terracotta bg-clip-text text-transparent">
            Desierto
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-desert-sand/70 sm:text-xl"
          style={{ opacity: 0 }}
        >
          Descubre las cartas Pokémon más codiciadas, cajas selladas de edición
          limitada y accesorios premium para verdaderos coleccionistas.
        </p>

        <button
          ref={ctaRef}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-desert-amber to-desert-gold px-8 py-4 text-base font-semibold text-desert-black shadow-xl shadow-desert-amber/20 transition-all duration-500 hover:shadow-desert-amber/40 hover:scale-105"
          style={{ opacity: 0 }}
        >
          <span className="relative z-10">Explorar Colección</span>
          <svg
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <span className="absolute inset-0 bg-gradient-to-r from-desert-gold to-desert-terracotta opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-desert-warm-gray">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-desert-warm-gray to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
