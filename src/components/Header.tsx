"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
    >
      <nav className="glass px-8 py-4 rounded-full flex items-center gap-8 text-sm font-medium">
        <Link href="#inicio" className="text-foreground/80 hover:text-primary transition-colors">Inicio</Link>
        <Link href="#proyectos" className="text-foreground/80 hover:text-primary transition-colors">Proyectos</Link>
        <Link href="#servicios" className="text-foreground/80 hover:text-primary transition-colors">Servicios</Link>
        <Link href="#contacto" className="text-foreground/80 hover:text-primary transition-colors">Contacto</Link>
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1 rounded-full text-foreground/80 hover:text-primary transition-colors ml-4 focus:outline-none"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
      </nav>
    </motion.header>
  );
}
