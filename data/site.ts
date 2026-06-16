import type { LucideIcon } from "lucide-react";
import { Bath, BrickWall, Building2, ClipboardCheck, Droplets, Hammer, Home, PaintRoller, Ruler, ShieldCheck, Sparkles, Wrench } from "lucide-react";

export type Service = {
  title: string;
  desc: string;
  price: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { title: "Rénovation complète", desc: "Transformation d'appartement, maison, studio ou local commercial avec coordination des étapes.", price: "Sur devis", icon: Home },
  { title: "Peinture & enduits", desc: "Préparation des murs, ratissage, rebouchage, sous-couche et peinture murs/plafonds.", price: "Dès 25€/m²", icon: PaintRoller },
  { title: "Carrelage & sols", desc: "Pose carrelage, faïence, parquet, vinyle, plinthes et finitions propres.", price: "Dès 45€/m²", icon: BrickWall },
  { title: "Placo & isolation", desc: "Cloisons, faux plafonds, doublage, isolation thermique et acoustique.", price: "Sur devis", icon: Ruler },
  { title: "Salle de bain", desc: "Douche, faïence, meuble vasque, étanchéité, joints et finitions modernes.", price: "Sur devis", icon: Bath },
  { title: "Dépannage & petits travaux", desc: "Réparations, montage, reprises, entretien logement et interventions rapides.", price: "Rapide", icon: Wrench },
];

export const stats = [
  ["10+", "années d'expérience"],
  ["48h", "réponse devis"],
  ["100%", "chantier protégé"],
  ["FR", "intervention en France"],
];

export const gallery = [
  { title: "Rénovation intérieure", tag: "Appartement", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop" },
  { title: "Salle de bain moderne", tag: "Faïence", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1400&auto=format&fit=crop" },
  { title: "Peinture & finitions", tag: "Murs propres", img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1400&auto=format&fit=crop" },
  { title: "Chantier maîtrisé", tag: "Bâtiment", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop" },
  { title: "Cuisine & sols", tag: "Pose propre", img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1400&auto=format&fit=crop" },
  { title: "Placo & isolation", tag: "Travaux secs", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1400&auto=format&fit=crop" },
];

export const process = [
  { title: "Analyse", desc: "Vous envoyez photos, mesures et adresse. Si nécessaire, une visite est prévue.", icon: ClipboardCheck },
  { title: "Devis clair", desc: "Prix détaillé, délais, matériaux et étapes du chantier validés avant démarrage.", icon: ShieldCheck },
  { title: "Réalisation", desc: "Protection des zones, suivi régulier, finitions propres et nettoyage final.", icon: Hammer },
];

export const why = [
  { title: "Chantier propre", desc: "Protection des sols, meubles et parties communes.", icon: Sparkles },
  { title: "Finitions solides", desc: "Travail précis, matériaux adaptés, contrôle final.", icon: Building2 },
  { title: "Respect du logement", desc: "Intervention organisée et communication simple.", icon: Droplets },
];

export const zones = ["Paris", "Île-de-France", "Seine-Saint-Denis", "Val-de-Marne", "Hauts-de-Seine", "Essonne", "Yvelines", "France sur demande"];
