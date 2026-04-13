const ranges = [
  { label: "Óculos até R$ 250", gradient: "linear-gradient(135deg, hsl(200,60%,70%), hsl(200,60%,50%))" },
  { label: "Óculos até R$ 450", gradient: "linear-gradient(135deg, hsl(180,50%,65%), hsl(180,50%,45%))" },
  { label: "Óculos até R$ 650", gradient: "linear-gradient(135deg, hsl(260,50%,65%), hsl(260,50%,45%))" },
  { label: "Óculos até R$ 850", gradient: "linear-gradient(135deg, hsl(340,50%,65%), hsl(340,50%,45%))" },
  { label: "Óculos até R$ 1.500", gradient: "linear-gradient(135deg, hsl(30,60%,65%), hsl(30,60%,45%))" },
];

const PriceRangeSection = () => (
  <section className="py-12 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-xl font-bold tracking-widest uppercase text-foreground mb-8 text-center">
        Navegue por faixas de preço
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {ranges.map((r) => (
          <a
            key={r.label}
            href="#"
            className="rounded-lg overflow-hidden aspect-[4/3] flex items-end p-4 transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: r.gradient }}
          >
            <span className="text-white font-bold text-sm drop-shadow">{r.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default PriceRangeSection;
