"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Serendipia Pan Pizzas",
    description: "Panadería y Pizzería con productos artesanales. Comida real y de fermentación lenta. Interfaz de pedidos optimizada y catálogo dinámico.",
    tags: ["Next.js", "TailwindCSS", "E-commerce"],
    url: "https://serendipia-beta.vercel.app/",
    color: "from-orange-500/20 to-red-500/20",
    image: "/projects/serendipia.png"
  },
  {
    title: "Vegan Neighbor",
    description: "Rico, casero, vegan. Tienda en línea de productos veganos artesanales con un diseño limpio, moderno y orientado a la conversión.",
    tags: ["Next.js", "Frontend", "UI/UX"],
    url: "https://vegan-neighbor.vercel.app/",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/projects/vegan.png"
  },
  {
    title: "Princesa del Color",
    description: "Taller automotriz especializado en desabolladura y pintura. Landing page corporativa que transmite confianza, muestra servicios y facilita el contacto rápido.",
    tags: ["React", "Landing Page", "Performance"],
    url: "https://princesadelcolor.vercel.app/",
    color: "from-blue-500/20 to-purple-500/20",
    image: "/projects/princesa.png"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Proyectos <span className="text-gradient">Destacados</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Una selección de mis últimos trabajos. Cada proyecto refleja un enfoque en la calidad técnica y la excelencia en diseño.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl overflow-hidden flex flex-col group border border-white/10"
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="block relative h-56 w-full bg-gradient-to-br overflow-hidden border-b border-white/5">
                <Image 
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </a>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 glass text-center py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-background hover:border-transparent transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar Sitio
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
