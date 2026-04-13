import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProductData = {
  brand: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image?: string;
  showGrauButton?: boolean;
  showOriginalBadge?: boolean;
};

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const ProductCard = ({ brand, name, originalPrice, discountedPrice, discount, showGrauButton = true, showOriginalBadge = false }: ProductData) => {
  const pixPrice = discountedPrice * 0.95;
  const installment = discountedPrice / 10;

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col w-[240px] shrink-0 snap-start overflow-hidden">
      {/* Image placeholder */}
      <div className="relative bg-secondary aspect-square flex items-center justify-center">
        <div className="w-24 h-12 rounded bg-muted" />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="bg-pix text-pix-foreground text-[10px] font-bold px-2 py-0.5 rounded">5% OFF PIX</span>
          {discount > 0 && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded">-{discount}%</span>
          )}
          {showOriginalBadge && (
            <span className="text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "hsl(220, 60%, 50%)" }}>100% ORIGINAL</span>
          )}
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{brand}</span>
        <h3 className="text-sm font-bold text-foreground mt-0.5 line-clamp-2 min-h-[2.5rem]">{name}</h3>

        {/* Stars */}
        <div className="flex gap-0.5 my-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="text-muted-foreground" />
          ))}
        </div>

        {/* Pricing */}
        <span className="text-xs text-muted-foreground line-through">{fmt(originalPrice)}</span>
        <span className="text-base font-bold text-foreground">{fmt(discountedPrice)}</span>
        <span className="text-xs text-pix font-semibold mt-0.5">
          {fmt(pixPrice)} no Pix (5%)
        </span>
        <span className="text-[10px] text-muted-foreground mt-0.5">
          ou 10x de {fmt(installment)} sem juros
        </span>

        {/* Buttons */}
        <div className="mt-auto pt-3 flex flex-col gap-1.5">
          {showGrauButton && (
            <Button variant="outline" size="sm" className="w-full text-xs border-foreground text-foreground">
              Comprar com Grau
            </Button>
          )}
          <Button size="sm" className="w-full text-xs gap-1.5">
            <ShoppingCart size={14} />
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
