import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuData } from "./MegaMenu";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="text-left text-xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {menuData.map((item) => (
              <AccordionItem key={item.label} value={item.label}>
                <AccordionTrigger className="text-base font-semibold py-3">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pt-2 pb-4">
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-2">
                          {col.title}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {col.items.map((link) => (
                            <li key={link}>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-primary transition-colors block py-1"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="border-t pt-6 mt-2 space-y-4">
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Encontre uma Visão Total
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Central de Atendimento
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Seja um Franqueado
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
