const banners = [
  { name: "Prada", hue: 30 },
  { name: "Vogue", hue: 280 },
  { name: "Miu Miu", hue: 340 },
  { name: "Ray-Ban", hue: 0 },
];

const EditorialBanners = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-4 gap-4">
        {banners.map((b) => (
          <a
            key={b.name}
            href="#"
            className="relative aspect-[3/4] rounded-lg overflow-hidden group"
            style={{ background: `linear-gradient(160deg, hsl(${b.hue}, 20%, 25%), hsl(${b.hue}, 30%, 15%))` }}
          >
            <div className="absolute inset-0 flex items-end p-5">
              <span className="text-white text-xl font-bold tracking-wide group-hover:translate-x-1 transition-transform">
                {b.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default EditorialBanners;
