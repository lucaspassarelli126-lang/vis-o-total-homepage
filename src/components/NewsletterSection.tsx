import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => (
  <section className="py-12 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <h2 className="text-xl font-bold text-foreground mb-2">
        Receba descontos e novidades diretamente no seu e-mail
      </h2>
      <div className="flex flex-col md:flex-row gap-3 mt-6">
        <Input placeholder="Seu nome" className="w-full md:flex-1" />
        <Input placeholder="Seu e-mail" type="email" className="w-full md:flex-1" />
        <Button className="font-bold px-6 w-full md:w-auto">Cadastrar</Button>
      </div>
      <p className="text-[11px] text-muted-foreground mt-3">
        Ao cadastrar, você concorda com nossa{" "}
        <a href="#" className="underline hover:text-primary">Política de Privacidade</a>.
      </p>
    </div>
  </section>
);

export default NewsletterSection;
