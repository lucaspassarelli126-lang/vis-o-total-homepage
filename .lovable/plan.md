

# Visão Total Ótica — E-Commerce Homepage

## Overview
Build a complete, pixel-perfect e-commerce homepage in Brazilian Portuguese for an optical store. The page includes 13 distinct sections with a white and burgundy (#C0272D) color scheme, mega-menu navigation, product grids, brand showcases, and a full footer.

## Sections to Build

1. **Top Bar** — Dark thin bar with "Seja um Franqueado" (left) and "Central de Atendimento" (right)

2. **Header** — Three-zone: store finder link, bold "Visão Total Ótica" wordmark, account/favorites/cart icons with red badge

3. **Mega-Menu Navigation** — 6 horizontal nav items (Armações, Óculos de Sol, Lentes de Contato, Acessórios, Grandes Marcas, Marcas Exclusivas) each opening a full-width dropdown with multi-column links

4. **Hero Banner** — Full-width gradient banner with "Até 30% OFF" text and CTA button

5. **"Explore por Marcas"** — Horizontal scrollable brand cards (Miu Miu, Ray-Ban, Prada, etc.) with colored placeholder squares

6. **"Navegue por Faixa de Preço"** — 5 price-range cards (R$250 to R$1.500) with gradient backgrounds

7. **"Os Queridinhos do Momento"** — Scrollable product cards with badges, pricing (original/discount/PIX/installments), ratings, and dual action buttons

8. **Brand Editorial Banners** — 4 equal-width dark editorial banners (Prada, Vogue, Miu Miu, Ray-Ban)

9. **"Ray-Bans Mais Vendidos"** — Product grid with "100% ORIGINAL" badge, single cart button, -9% discount

10. **"Lentes de Contato"** — Brand cards row + full-width CTA banner

11. **"Para Quem Pratica Esportes"** — Speedo sunglasses product grid, PIX badge only

12. **Newsletter** — Name + email inputs, "Cadastrar" button, consent text

13. **Footer** — 4 columns (Institucional, Políticas, Sua Conta, Atendimento), social icons, payment methods, security seals, copyright

## Design System Updates
- Primary: #C0272D (burgundy)
- PIX green: #00A859
- Footer/text dark: #1A1A1A
- Card radius: 8px, subtle shadows
- Hover effects: scale + shadow on interactive cards
- Font: Inter (already available)

## Implementation Approach
- Build as modular components: TopBar, Header, MegaMenu, HeroBanner, BrandCarousel, PriceRangeSection, ProductCard, ProductGrid, EditorialBanners, NewsletterSection, Footer
- Reusable ProductCard component with configurable badges, buttons, and pricing
- Horizontal scroll with CSS snap for carousels
- Mega-menu with hover-triggered dropdowns
- All content hardcoded in Portuguese as specified
- Responsive considerations for desktop-first layout

