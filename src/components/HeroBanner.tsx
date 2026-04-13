import { Button } from "@/components/ui/button";

const HeroBanner = () => (
  <section className="relative w-full overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(225 73% 57%), hsl(225 73% 40%))" }}>
    <div className="container mx-auto px-4 max-w-7xl py-20 flex flex-col items-center text-center text-primary-foreground">
      <span className="text-sm font-medium tracking-widest uppercase mb-2 opacity-80">Promoção Especial</span>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">Até 30% OFF</h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl">
        Armações e óculos de sol das melhores marcas com descontos imperdíveis.
      </p>
      <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base px-8">
        Aproveitar Oferta
      </Button>
    </div>
  </section>
);

export default HeroBanner;
