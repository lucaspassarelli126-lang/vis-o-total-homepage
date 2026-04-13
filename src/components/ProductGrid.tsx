import ProductCard, { type ProductData } from "./ProductCard";

type Props = {
  title: string;
  products: ProductData[];
};

const ProductGrid = ({ title, products }: Props) => (
  <section className="py-12">
    <div className="container mx-auto px-4 max-w-7xl">
      <h2 className="text-xl font-bold tracking-widest uppercase text-foreground mb-8 text-center">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
