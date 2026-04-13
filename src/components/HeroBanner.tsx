import { Button } from "@/components/ui/button";

const HeroBanner = () => (
  <section 
    className="relative w-full overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-end md:items-center py-12 md:py-40"
    style={{ backgroundImage: "url('/hero-banner.png')" }}
  >
    <div className="container mx-auto px-4 max-w-7xl flex justify-center md:justify-end">
      <div className="md:mr-12 mb-8 md:mb-0">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-lg px-10 md:px-12 h-14 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
          Ver Produtos
        </Button>
      </div>
    </div>
  </section>
);

export default HeroBanner;
