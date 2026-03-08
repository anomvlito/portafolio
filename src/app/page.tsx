import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col selection:bg-secondary selection:text-white pb-0">
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"}}
      />
      <Header />
      <div className="flex-1 relative z-10 w-full overflow-hidden">
        <Hero />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
