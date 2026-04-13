import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroBanner = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem>
            <div 
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
            </div>
          </CarouselItem>

          {/* Slide 2 (Placeholder) */}
          <CarouselItem>
            <div 
              className="relative w-full overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-end md:items-center py-12 md:py-40 bg-zinc-200"
              style={{ backgroundImage: "url('/placeholder.svg')" }}
            >
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white/80 font-bold bg-black/50 px-4 py-2 rounded">
                    Imagem 2 (Desktop: 1920x700 | Mobile: 1080x1350)
                  </span>
               </div>
              <div className="container mx-auto px-4 max-w-7xl flex justify-center md:justify-end relative z-10">
                <div className="md:mr-12 mb-8 md:mb-0">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-lg px-10 md:px-12 h-14 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
                    Ver Produtos
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3 (Placeholder) */}
          <CarouselItem>
            <div 
              className="relative w-full overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[500px] flex items-end md:items-center py-12 md:py-40 bg-zinc-300"
              style={{ backgroundImage: "url('/placeholder.svg')" }}
            >
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white/80 font-bold bg-black/50 px-4 py-2 rounded">
                    Imagem 3 (Desktop: 1920x700 | Mobile: 1080x1350)
                  </span>
               </div>
              <div className="container mx-auto px-4 max-w-7xl flex justify-center md:justify-end relative z-10">
                <div className="md:mr-12 mb-8 md:mb-0">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-lg px-10 md:px-12 h-14 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95">
                    Ver Produtos
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-white/50 hover:bg-white border-none shadow-lg text-foreground opacity-70 hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-4 md:right-8 bg-white/50 hover:bg-white border-none shadow-lg text-foreground opacity-70 hover:opacity-100 transition-opacity" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;
