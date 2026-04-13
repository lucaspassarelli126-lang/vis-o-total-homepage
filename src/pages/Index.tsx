import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MegaMenu from "@/components/MegaMenu";
import HeroBanner from "@/components/HeroBanner";
import BrandCarousel from "@/components/BrandCarousel";
import PriceRangeSection from "@/components/PriceRangeSection";
import ProductGrid from "@/components/ProductGrid";
import EditorialBanners from "@/components/EditorialBanners";
import ContactLensesSection from "@/components/ContactLensesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import type { ProductData } from "@/components/ProductCard";

const queridinhos: ProductData[] = [
  { brand: "Calvin Klein Jeans", name: "CKJ20102", originalPrice: 1084.99, discountedPrice: 759.49, discount: 30 },
  { brand: "Carrera", name: "8825/V", originalPrice: 1009.99, discountedPrice: 706.99, discount: 30 },
  { brand: "Calvin Klein Jeans", name: "CKJ20303", originalPrice: 998.99, discountedPrice: 699.29, discount: 30 },
  { brand: "Converse", name: "CV5002", originalPrice: 927.99, discountedPrice: 649.59, discount: 30 },
  { brand: "Calvin Klein Jeans", name: "CKJ19107", originalPrice: 782.99, discountedPrice: 548.09, discount: 30 },
];

const raybans: ProductData[] = [
  { brand: "Ray-Ban", name: "RB3025 Aviador", originalPrice: 899.99, discountedPrice: 818.99, discount: 9, showGrauButton: false, showOriginalBadge: true },
  { brand: "Ray-Ban", name: "RB2140 Wayfarer", originalPrice: 849.99, discountedPrice: 773.49, discount: 9, showGrauButton: false, showOriginalBadge: true },
  { brand: "Ray-Ban", name: "RB3447 Round", originalPrice: 799.99, discountedPrice: 727.99, discount: 9, showGrauButton: false, showOriginalBadge: true },
  { brand: "Ray-Ban", name: "RB4171 Erika", originalPrice: 749.99, discountedPrice: 682.49, discount: 9, showGrauButton: false, showOriginalBadge: true },
  { brand: "Ray-Ban", name: "RB3016 Clubmaster", originalPrice: 879.99, discountedPrice: 800.79, discount: 9, showGrauButton: false, showOriginalBadge: true },
];

const esportes: ProductData[] = [
  { brand: "Speedo", name: "SP5080 Polarizado", originalPrice: 568.99, discountedPrice: 568.99, discount: 0, showGrauButton: false },
  { brand: "Speedo", name: "SP6070 Wind", originalPrice: 698.99, discountedPrice: 698.99, discount: 0, showGrauButton: false },
  { brand: "Speedo", name: "SP8090 Pro", originalPrice: 908.99, discountedPrice: 908.99, discount: 0, showGrauButton: false },
  { brand: "Speedo", name: "SP4050 Action", originalPrice: 648.99, discountedPrice: 648.99, discount: 0, showGrauButton: false },
  { brand: "Speedo", name: "SP3030 Race", originalPrice: 728.99, discountedPrice: 728.99, discount: 0, showGrauButton: false },
];

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Header />
    <MegaMenu />
    <main className="flex-1">
      <HeroBanner />
      <BrandCarousel />
      <PriceRangeSection />
      <ProductGrid title="Os Queridinhos do Momento" products={queridinhos} />
      <EditorialBanners />
      <ProductGrid title="Ray-Bans Mais Vendidos" products={raybans} />
      <ContactLensesSection />
      <ProductGrid title="Para Quem Pratica Esportes" products={esportes} />
      <NewsletterSection />
    </main>
    <Footer />
  </div>
);

export default Index;
