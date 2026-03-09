"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Plataforma Centro de Investigación CECAN",
    description: "MVP de Sistema de Gestión Científica. Cuenta con lectura e integración automática de métricas JCR, redes en grafos 3D y diagramas Gantt.",
    tags: ["SaaS / B2B", "FastAPI", "Vue 3", "Supabase"],
    url: "/proyectos/cecan",
    color: "from-neutral-800 to-black",
    isInternal: true,
  },
  {
    title: "Serendipia Pan Pizzas",
    description: "Panadería y Pizzería con productos artesanales. Comida real y de fermentación lenta. Interfaz de pedidos optimizada y catálogo dinámico.",
    tags: ["Next.js", "TailwindCSS", "E-commerce"],
    url: "https://serendipia-beta.vercel.app/",
    color: "from-white/10 to-white/5",
    image: "/projects/serendipia.png"
  },
  {
    title: "Vegan Neighbor",
    description: "Rico, casero, vegan. Tienda en línea de productos veganos artesanales con un diseño limpio, moderno y orientado a la conversión.",
    tags: ["Next.js", "Frontend", "UI/UX"],
    url: "https://vegan-neighbor.vercel.app/",
    color: "from-neutral-500/10 to-neutral-400/5",
    image: "/projects/vegan.png"
  },
  {
    title: "Princesa del Color",
    description: "Taller automotriz especializado en desabolladura y pintura. Landing page corporativa que transmite confianza, muestra servicios y facilita el contacto rápido.",
    tags: ["React", "Landing Page", "Performance"],
    url: "https://princesadelcolor.vercel.app/",
    color: "from-zinc-500/10 to-zinc-400/5",
    image: "/projects/princesa.png"
  },
  {
    title: "Dittmar Estructuras Metálicas",
    description: "Empresa de construcción en acero y metales. Diseño industrial premium, enfocado en mostrar su portafolio de manera robusta y métricas de toneladas de acero.",
    tags: ["Next.js", "SEO", "Generación de Leads"],
    url: "https://dittmarestructurasmetalicas-beta.vercel.app/",
    color: "from-yellow-500/10 to-yellow-600/5",
    image: "/projects/dittmar.webp"
  },
  {
    title: "Masoy Rehabilitación",
    description: "Centro de masoterapia y rehabilitación física. Una plataforma SPA moderna orientada a captación local y agenda directa por Setmore y WhatsApp.",
    tags: ["Next.js", "SPA", "Reservas Web"],
    url: "https://rocio-masoterapia.vercel.app/",
    color: "from-stone-500/10 to-stone-400/5",
    image: "/projects/rocio.webp"
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
            Proyectos & <span className="text-gradient">Casos de Estudio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Sistemas B2B, automatización, E-commerces y Landings. Desde aplicaciones bajo login empresarial hasta vitrinas al público.
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
              
              {/* Image or Abstraction render header */}
              {project.isInternal ? (
                <Link href={project.url} className={`block relative h-56 w-full bg-gradient-to-br ${project.color} overflow-hidden border-b border-white/5 flex flex-col items-center justify-center`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/noise.png')" }} />
                  <Database className="w-12 h-12 text-white/20 mb-2 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
                  <span className="text-xs uppercase font-bold text-white/40 tracking-widest">Login Required App</span>
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
              ) : (
                <a href={project.url} target="_blank" rel="noreferrer" className="block relative h-56 w-full bg-gradient-to-br overflow-hidden border-b border-white/5">
                  <Image 
                    src={project.image!}
                    alt={`Captura de pantalla de ${project.title}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </a>
              )}

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
                  {project.isInternal ? (
                    <Link href={project.url} className="flex-1 glass text-center py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-background hover:border-transparent transition-all">
                      <Code className="w-4 h-4" />
                      Ver Caso de Estudio
                    </Link>
                  ) : (
                    <a href={project.url} target="_blank" rel="noreferrer" className="flex-1 glass text-center py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-background hover:border-transparent transition-all">
                      <ExternalLink className="w-4 h-4" />
                      Visitar Sitio
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
