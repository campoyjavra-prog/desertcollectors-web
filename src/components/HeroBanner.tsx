"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroBanner() {
  const overlayRef = useRef(null);
  const textContainerRef = useRef(null);
  const boxEntranceRef = useRef(null);
  const boxLevitationRef = useRef(null);

  useGSAP(() => {
    // Secuencia de entrada cinemática
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
    })
      .to(
        textContainerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        boxEntranceRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      );

    // Levitación continua (separada del timeline)
    gsap.to(boxLevitationRef.current, {
      y: -20,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 2,
    });
  });

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de Fondo */}
      <Image
        src="/hero-bg.png"
        alt="Fondo Desierto"
        fill
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
        className="object-cover object-bottom -z-10"
      />

      {/* Capa de Contraste (Gradient Overlay) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/50 to-transparent z-0 opacity-0"
      />

      {/* Estructura de Dos Columnas (Grid) */}
      <div className="z-10 w-full max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20 pb-12">
        {/* Columna Izquierda (Texto y CTA) */}
        <div
          ref={textContainerRef}
          className="flex flex-col items-start text-left opacity-0"
          style={{ transform: "translateY(30px)" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
            POKÉMON <span className="text-orange-500">151</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium leading-relaxed drop-shadow-md">
            Revive la nostalgia. Descubre a los 151 Pokémon originales de Kanto, incluyendo a Mew, en la expansión más buscada por los coleccionistas.
          </p>
          <a
            href="#catalogo"
            className="mt-8 px-8 py-4 border-2 border-orange-500 text-orange-500 font-black uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all duration-300 ease-in-out rounded-sm"
          >
            VER CAJA
          </a>
        </div>

        {/* Columna Derecha (Producto) */}
        <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
          <div
            ref={boxEntranceRef}
            className="w-full flex items-center justify-center opacity-0"
            style={{ transform: "translateX(50px)" }}
          >
            <Image
              ref={boxLevitationRef}
              src="/hero-product.png"
              alt="Caja Pokémon 151"
              width={800}
              height={1000}
              className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
