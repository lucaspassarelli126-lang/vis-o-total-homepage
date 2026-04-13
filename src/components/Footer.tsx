const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <div className="grid grid-cols-4 gap-8 mb-10">
        <div>
          <h4 className="font-bold text-white text-sm mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm">
            {["Quem Somos", "Sobre Nós", "Visão Total Social", "Seja um Franqueado", "Perguntas Frequentes", "Trabalhe Conosco", "Blog"].map(
              (t) => (
                <li key={t}><a href="#" className="hover:text-white transition-colors">{t}</a></li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-4">Políticas</h4>
          <ul className="space-y-2 text-sm">
            {["Termos de Uso", "Segurança e Privacidade", "Trocas e Devoluções", "Regulamento de Campanhas", "LGPD"].map(
              (t) => (
                <li key={t}><a href="#" className="hover:text-white transition-colors">{t}</a></li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-4">Sua Conta</h4>
          <ul className="space-y-2 text-sm">
            {["Minha Conta", "Meus Pedidos", "Meus Favoritos"].map(
              (t) => (
                <li key={t}><a href="#" className="hover:text-white transition-colors">{t}</a></li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-4">Atendimento</h4>
          <p className="text-sm mb-2">Seg a Sex: 9h às 18h</p>
          <p className="text-sm">sac@visaototalótica.com.br</p>
        </div>
      </div>

      {/* Social */}
      <div className="flex items-center justify-center gap-6 mb-6 text-sm">
        {["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube"].map((s) => (
          <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
        ))}
      </div>

      {/* Payment */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {["Mastercard", "Visa", "Elo", "Amex", "Pix"].map((p) => (
          <span key={p} className="text-[10px] bg-white/10 rounded px-3 py-1 font-medium">{p}</span>
        ))}
      </div>

      {/* Seals */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {["PCI", "Cliente Recomenda", "SSL"].map((s) => (
          <span key={s} className="text-[10px] border border-white/20 rounded px-3 py-1">{s}</span>
        ))}
      </div>

      <div className="text-center border-t border-white/10 pt-6">
        <p className="text-lg font-extrabold text-white mb-2">
          Visão Total <span className="text-primary">Ótica</span>
        </p>
        <p className="text-xs text-footer-foreground">
          © 2025 Visão Total Ótica – Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
