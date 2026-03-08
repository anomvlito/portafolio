export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 relative border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <p className="text-foreground/50 text-sm mb-4">
          © {currentYear} Creado por Fabian. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm">GitHub</a>
          <a href="mailto:hola@tudominio.com" className="text-foreground/50 hover:text-primary transition-colors text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
}
