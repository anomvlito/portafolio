"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex glass px-4 py-2 rounded-full text-sm font-medium text-primary mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse self-center" />
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          Transformando ideas en <br />
          <span className="text-gradient">Experiencias Digitales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Especialista en construir aplicaciones web y sitios modernos, rápidos y adaptables a cualquier dispositivo. Diseñado con intención, codificado con precisión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#proyectos" className="bg-primary text-background hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contacto" className="glass px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition-all flex items-center justify-center">
            Contáctame
          </a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 w-full"
        >
          {[
            { icon: Layout, title: "Diseño Premium", desc: "Interfaces limpias y modernas." },
            { icon: Smartphone, title: "100% Responsivo", desc: "Perfecto en móviles y escritorio." },
            { icon: Code, title: "Next.js & Modern Stack", desc: "Tecnología de punta y rendimiento." }
          ].map((feat, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
              <p className="text-sm text-foreground/60">{feat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
