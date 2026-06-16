import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Altino Construções | Bâtiment & rénovation en France",
  description: "Entreprise de rénovation, peinture, carrelage, placo, salle de bain et petits travaux en France.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Altino Construções",
    description: "Travaux propres, solides et bien finis en France.",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#171B1F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr" className={`${inter.variable} ${playfair.variable}`}><body>{children}</body></html>;
}
