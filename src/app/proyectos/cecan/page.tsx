"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Database, Layout, Server, Shield, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CecanCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col selection:bg-secondary selection:text-white pb-0">
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"}}
      />
      
      <Header />

      <div className="flex-1 relative z-10 w-full max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Button */}
        <Link href="/#proyectos" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors font-medium mb-12">
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex glass px-4 py-2 rounded-full text-xs font-semibold text-primary mb-6">
            MVP / SaaS / Fullstack
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Plataforma CECAN <br/><span className="text-gradient">Gestión Científica</span></h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12">
            Plataforma B2B para centro de investigación. Orquesta un monorepo complejo que involucra subidas y escaneo de PDFs científicos, integración con Journal Citation Reports (JCR) y un mapa de redes colosales 3D usando fuerza dirigida.
          </p>
        </motion.div>

        {/* Hero Concept / Placeholder Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-80 md:h-[450px] glass rounded-3xl mb-16 overflow-hidden relative flex items-center justify-center border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-50" />
          <svg className="w-24 h-24 text-white/10 absolute" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z"/></svg>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold opacity-30">App Interna (B2B Login Required)</h3>
          </div>
        </motion.div>

        {/* Content Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Story column */}
          <div className="col-span-1 md:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3"><Layers className="text-primary w-6 h-6"/> El Desafío</h2>
              <p className="text-foreground/70 leading-relaxed">
                El Centro de Investigación CECAN requería una plataforma centralizada para hacer un seguimiento a los investigadores, el cruce bibliométrico de sus publicaciones, y su nivel de impacto mediante OpenAlex y JCR (Journal Citation Reports). Era indispensable una manera intuitiva de subir papers (PDFs), validar DOIs automáticamente e integrarse con modelos unificados.
              </p>
            </motion.section>

             <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3"><Shield className="text-primary w-6 h-6"/> Funcionalidades Core</h2>
              <ul className="list-disc list-inside text-foreground/70 space-y-3 leading-relaxed">
                <li><strong className="text-foreground">Extracción Inteligente:</strong> Lectura de PDFs para auto-detección de DOIs (Digital Object Identifier) y rellenado de metadatos.</li>
                <li><strong className="text-foreground">Métricas Snapshots:</strong> Análisis JRC incorporado con Snapshot Pattern para garantizar que las métricas históricas de un paper queden calcadas conforme el año de su publicación.</li>
                <li><strong className="text-foreground">Mapa Interactivo 3D:</strong> Renderización de redes de investigadores usando Three.js y force-graphs basados en nodos.</li>
                <li><strong className="text-foreground">Planificador Estilo Gantt:</strong> Rutas de desarrollo renderizadas a través de DHTMLX.</li>
              </ul>
            </motion.section>
            
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="p-6 glass rounded-2xl border border-white/10 mt-8">
                <h3 className="font-bold mb-4 text-xl">Ejemplo de Arquitectura REST API (FastAPI)</h3>
                <pre className="text-xs text-foreground/60 overflow-x-auto p-4 bg-black/50 rounded-lg">
{`# /api/publications
# Valida y guarda un paper mediante el Service Layer
@router.post("/upload")
async def upload_publication(
    file: UploadFile,
    db: Session = Depends(get_db)
):
    doi = doi_extractor.extract(file)
    metadata = await openalex_service.fetch(doi)
    return journal_service.save_with_snapshot(metadata, db)
`}
                </pre>
              </div>
            </motion.section>
          </div>

          {/* Sidebar / Stack */}
          <div className="col-span-1 border-l border-white/5 pl-0 md:pl-8 space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground/90 relative inline-flex">
                Stack Tecnológico
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent" />
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Layout className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Frontend (Vue 3 + Vite)</h4>
                    <p className="text-xs text-foreground/60 mt-1">TypeScript 5, Tailwind 4, Pinia, Three.js.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Backend (Python)</h4>
                    <p className="text-xs text-foreground/60 mt-1">FastAPI, SQLAlchemy, Pydantic v2.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5 text-foreground/80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Base de Datos</h4>
                    <p className="text-xs text-foreground/60 mt-1">PostgreSQL + Supabase Storage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 glass rounded-2xl border border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
              <h4 className="font-bold mb-2">Despliegue Serverless</h4>
              <p className="text-sm text-foreground/60 mb-4">
                La arquitectura aprovecha <strong>Vercel Serverless Functions</strong> y <code>NullPool</code> en producción para evitar fugas de conexión de bases de datos entre llamadas en frío.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
