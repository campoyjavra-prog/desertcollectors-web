const mockProducts = [
  {
    id: 1,
    name: "Charizard VMAX",
    set: "Darkness Ablaze",
    price: 249.99,
    tag: "Destacado",
  },
  {
    id: 2,
    name: "Pikachu VMAX Rainbow",
    set: "Vivid Voltage",
    price: 189.5,
    tag: "Popular",
  },
  {
    id: 3,
    name: "Mewtwo GX Secret",
    set: "Shining Legends",
    price: 134.0,
    tag: null,
  },
  {
    id: 4,
    name: "Rayquaza VMAX Alt Art",
    set: "Evolving Skies",
    price: 310.0,
    tag: "Raro",
  },
  {
    id: 5,
    name: "Umbreon VMAX Alt Art",
    set: "Evolving Skies",
    price: 425.0,
    tag: "Destacado",
  },
  {
    id: 6,
    name: "Lugia V Alt Art",
    set: "Silver Tempest",
    price: 165.0,
    tag: "Nuevo",
  },
];

function TagBadge({ tag }: { tag: string }) {
  const colorMap: Record<string, string> = {
    Destacado:
      "bg-desert-amber/15 text-desert-amber border-desert-amber/30",
    Popular:
      "bg-desert-terracotta/15 text-desert-terracotta border-desert-terracotta/30",
    Raro: "bg-desert-gold/15 text-desert-gold border-desert-gold/30",
    Nuevo: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };

  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
        colorMap[tag] || "bg-desert-warm-gray/20 text-desert-sand/60 border-desert-warm-gray/30"
      }`}
    >
      {tag}
    </span>
  );
}

export default function ProductGrid() {
  return (
    <section className="relative bg-desert-charcoal py-24">
      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-desert-warm-gray/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-desert-amber">
            Lo más buscado
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-desert-sand-light sm:text-4xl lg:text-5xl">
            Cartas{" "}
            <span className="bg-gradient-to-r from-desert-amber to-desert-gold bg-clip-text text-transparent">
              Destacadas
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-desert-sand/60">
            Selección premium de las cartas Pokémon más codiciadas del mercado.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-desert-warm-gray/20 bg-desert-stone/50 backdrop-blur-sm transition-all duration-500 hover:border-desert-amber/30 hover:shadow-2xl hover:shadow-desert-amber/5 hover:-translate-y-1"
            >
              {/* Card image placeholder */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-desert-stone to-desert-charcoal">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-desert-warm-gray">
                    {/* Pokeball placeholder icon */}
                    <svg
                      className="h-16 w-16 opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <line
                        x1="5"
                        y1="50"
                        x2="95"
                        y2="50"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="12"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <circle cx="50" cy="50" r="6" fill="currentColor" />
                    </svg>
                    <span className="text-xs uppercase tracking-widest opacity-50">
                      Imagen próximamente
                    </span>
                  </div>
                </div>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-desert-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-desert-sand-light transition-colors duration-300 group-hover:text-desert-amber">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-desert-sand/50">
                      {product.set}
                    </p>
                  </div>
                  {product.tag && <TagBadge tag={product.tag} />}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-desert-warm-gray/20 pt-3">
                  <span className="text-xl font-bold text-desert-amber">
                    €{product.price.toFixed(2)}
                  </span>
                  <button className="rounded-lg bg-desert-warm-gray/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-desert-sand-light transition-all duration-300 hover:bg-desert-amber hover:text-desert-black">
                    Ver Carta
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 rounded-full border border-desert-warm-gray/40 px-8 py-3 text-sm font-medium text-desert-sand/80 transition-all duration-300 hover:border-desert-amber/50 hover:text-desert-amber hover:shadow-lg hover:shadow-desert-amber/10">
            Ver toda la colección
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
