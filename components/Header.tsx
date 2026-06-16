import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="Altino Construções accueil">
        <span className="brand-mark"><Image src="/logo.svg" alt="" width={44} height={44} priority /></span>
        <span className="brand-text"><strong>ALTINO</strong><small>Construções</small></span>
      </Link>

      <input className="menu-toggle" type="checkbox" id="menu-toggle" aria-label="Ouvrir le menu" />
      <label className="menu-button" htmlFor="menu-toggle"><Menu size={22} /></label>

      <nav className="nav" aria-label="Navigation principale">
        <a href="#services">Services</a>
        <a href="#realisations">Réalisations</a>
        <a href="#avis">Avis</a>
        <a href="#contact" className="nav-cta"><Phone size={16}/> DEVIS GRATUIT</a>
      </nav>
    </header>
  );
}
