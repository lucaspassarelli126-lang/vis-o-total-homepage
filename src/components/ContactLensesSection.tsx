import { Button } from "@/components/ui/button";

const lenses = [
  { name: "Natural Colors", color: "hsl(140,40%,50%)" },
  { name: "Avaira Vitality", color: "hsl(200,50%,55%)" },
  { name: "Acuvue", color: "hsl(220,60%,50%)" },
  { name: "DNZ", color: "hsl(260,40%,50%)" },
  { name: "Soflens", color: "hsl(180,45%,50%)" },
];

const ContactLensesSection = () => (
  <section className="py-12">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-xl font-bold tracking-widest uppercase text-foreground mb-8 text-center">
        Lentes de Contato
      </h2>
      <div className="grid grid-cols-5 gap-4 mb-8">
        {lenses.map((l) => (
          <a key={l.name} href="#" className="group">
            <div
              className="aspect-square rounded-lg mb-2 transition-all group-hover:scale-105 group-hover:shadow-lg"
              style={{ backgroundColor: l.color }}
            />
            <p className="text-sm font-medium text-foreground text-center">{l.name}</p>
          </a>
        ))}
      </div>
      <div className="rounded-lg p-8 text-center" style={{ background: "linear-gradient(135deg, hsl(200,50%,50%), hsl(220,60%,40%))" }}>
        <h3 className="text-white text-xl font-bold mb-3">Encontre a lente perfeita para você</h3>
        <Button className="bg-white text-foreground hover:bg-white/90 font-bold">
          Ver Todas as Lentes
        </Button>
      </div>
    </div>
  </section>
);

export default ContactLensesSection;
