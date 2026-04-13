import { useState } from "react";
import { ChevronDown } from "lucide-react";

type MenuColumn = { title: string; items: string[] };
type MenuItem = { label: string; columns: MenuColumn[] };

const menuData: MenuItem[] = [
  {
    label: "Armações",
    columns: [
      { title: "Marcas", items: ["Ana Hickmann", "Guess", "Lacoste", "Ray-Ban", "Todas as Marcas"] },
      { title: "Categorias", items: ["Masculino", "Feminino", "Infantil", "Unissex"] },
      { title: "Por Formato", items: ["Aviador", "Gatinho", "Oval", "Quadrado", "Redondo"] },
      { title: "Marcas Exclusivas", items: ["Dii Collection", "Hit", "DNZ", "Ono"] },
    ],
  },
  {
    label: "Óculos de Sol",
    columns: [
      { title: "Marcas", items: ["Ray-Ban", "Prada", "Tecnol", "Miu Miu", "Todas as Marcas"] },
      { title: "Categorias", items: ["Masculino", "Feminino", "Infantil", "Unissex"] },
      { title: "Por Formato", items: ["Aviador", "Gatinho", "Oval", "Quadrado", "Redondo"] },
      { title: "Marcas Exclusivas", items: ["Dii Collection", "Hit", "DNZ", "Ono"] },
    ],
  },
  {
    label: "Lentes de Contato",
    columns: [
      { title: "Marcas", items: ["Acuvue", "Soflens", "Biofinity"] },
      { title: "Tipo", items: ["Coloridas", "Com Grau"] },
      { title: "Duração", items: ["Quinzenal", "Mensal", "Anual"] },
    ],
  },
  {
    label: "Acessórios",
    columns: [
      { title: "Categorias", items: ["Correntes para Óculos", "Estojos", "Soluções e Cuidados"] },
    ],
  },
  {
    label: "Grandes Marcas",
    columns: [
      { title: "Marcas", items: ["Ray-Ban", "Prada", "Armani Exchange", "Tommy Hilfiger"] },
      { title: "Mais Marcas", items: ["Calvin Klein", "Oakley", "Vogue", "Guess"] },
    ],
  },
  {
    label: "Marcas Exclusivas",
    columns: [
      { title: "Categorias", items: ["Armações", "Óculos de Sol"] },
      { title: "Gênero", items: ["Masculino", "Feminino", "Unissex"] },
      { title: "Por Marca", items: ["Dii Collection", "Hit", "DNZ", "Ono"] },
    ],
  },
];

const MegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="bg-background border-b border-border relative z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <ul className="flex items-center justify-center gap-1">
          {menuData.map((item, i) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <button className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.label}
                <ChevronDown size={14} className={`transition-transform ${activeIndex === i ? "rotate-180" : ""}`} />
              </button>

              {activeIndex === i && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full bg-background border border-border rounded-lg shadow-xl p-6 min-w-[600px] grid grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-200"
                  style={{ gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))` }}
                >
                  {item.columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="font-semibold text-sm text-foreground mb-3">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.items.map((link) => (
                          <li key={link}>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
