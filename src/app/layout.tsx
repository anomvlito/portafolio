import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Desarrollador Web",
  description: "Portafolio profesional destacando sitios web escalables y modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-secondary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
