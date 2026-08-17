import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desert Collectors | Cartas Pokémon TCG Premium",
  description:
    "Tu tienda de confianza para cartas Pokémon TCG. Cartas sueltas, cajas selladas y accesorios premium para coleccionistas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-desert-black text-desert-sand-light">
        {children}
      </body>
    </html>
  );
}
