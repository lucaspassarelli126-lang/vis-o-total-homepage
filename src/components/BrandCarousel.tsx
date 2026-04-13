const brands = [
  { name: "Miu Miu", color: "hsl(340, 40%, 55%)" },
  { name: "Ray-Ban", color: "hsl(0, 0%, 20%)" },
  { name: "Prada", color: "hsl(45, 30%, 50%)" },
  { name: "Dii Collection", color: "hsl(200, 40%, 50%)" },
  { name: "Guess", color: "hsl(20, 50%, 55%)" },
  { name: "Hit Eyewear", color: "hsl(260, 40%, 50%)" },
  { name: "Gucci", color: "hsl(140, 40%, 40%)" },
];

const BrandCarousel = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-xl font-bold tracking-widest uppercase text-foreground mb-8 text-center">
        Explore por Marcas
      </h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {brands.map((b) => (
          <a
            key={b.name}
            href="#"
            className="snap-start shrink-0 w-40 group"
          >
            <div
              className="w-40 h-40 rounded-lg mb-3 transition-all group-hover:scale-105 group-hover:shadow-lg"
              style={{ backgroundColor: b.color }}
            />
            <p className="text-sm font-medium text-foreground text-center">{b.name}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrandCarousel;
