import { MapPin, User, Heart, ShoppingBag } from "lucide-react";

const Header = () => (
  <header className="bg-background border-b border-border py-4">
    <div className="container mx-auto flex items-center justify-between px-4 max-w-7xl">
      <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <MapPin size={18} />
        <span>Encontre uma Visão Total</span>
      </a>

      <a href="/" className="text-2xl font-extrabold tracking-tight text-foreground">
        Visão Total <span className="text-primary">Ótica</span>
      </a>

      <div className="flex items-center gap-5">
        <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <User size={20} />
          <span className="hidden md:inline">Minha Conta</span>
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors relative">
          <Heart size={20} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors relative">
          <ShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
