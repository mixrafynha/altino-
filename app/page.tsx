import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { gallery, process, services, stats, why, zones } from "@/data/site";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content reveal">
          <p className="eyebrow">Entreprise de bâtiment en France • Devis rapide</p>
          <h1>Rénovation propre, moderne et bien finie.</h1>
          <p className="hero-text">
            Altino Construções réalise vos travaux de rénovation, peinture, carrelage, placo,
            salle de bain et finitions avec sérieux, respect des délais et chantier propre.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">DEVIS GRATUIT <ArrowRight size={18} /></a>
            <a href="#realisations" className="btn btn-ghost">Voir les réalisations</a>
          </div>
          <div className="trust-row" aria-label="Garanties">
            <span><CheckCircle2 size={18}/> DEVIS GRATUIT</span>
            <span><CheckCircle2 size={18}/> Chantier protégé</span>
            <span><CheckCircle2 size={18}/> Finitions professionnelles</span>
          </div>
        </div>

        <div className="hero-visual reveal delay-1">
          <div className="hero-card main-photo">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" alt="Chantier de bâtiment et rénovation" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="mini-photo one"><Image src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop" alt="Travaux de finition" fill sizes="220px" /></div>
          <div className="mini-photo two"><Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Artisan bâtiment" fill sizes="180px" /></div>
          <div className="floating-card"><strong>Intervention rapide</strong><span>Rénovation • Peinture • Sols • Placo</span></div>
        </div>
      </section>

      <section className="stats-section" aria-label="Chiffres clés">
        {stats.map(([n, t]) => <div className="stat" key={t}><strong>{n}</strong><span>{t}</span></div>)}
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <div><p className="eyebrow">Services</p><h2>Tout pour refaire votre logement ou local.</h2></div>
          <p className="section-copy">Une offre claire pour les particuliers, propriétaires, agences et commerces.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article className="service-card" key={s.title}>
                <div className="icon"><Icon size={23}/></div>
                <span className="card-index">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <strong>{s.price}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section">
        <div className="split-image">
          <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1500&auto=format&fit=crop" alt="Artisan bâtiment au travail" fill sizes="(max-width: 900px) 100vw, 44vw" />
        </div>
        <div className="split-content">
          <p className="eyebrow">Pourquoi Altino Construções</p>
          <h2>Un chantier organisé du premier appel à la livraison.</h2>
          <p>Nous préparons le chantier, protégeons les surfaces, expliquons les étapes et livrons un résultat propre. Chaque demande est estimée avec photos, mesures ou visite sur place.</p>
          <div className="why-grid">
            {why.map(item => { const Icon = item.icon; return <div key={item.title}><Icon size={22}/><strong>{item.title}</strong><span>{item.desc}</span></div>; })}
          </div>
        </div>
      </section>

      <section id="realisations" className="section gallery-section">
        <div className="section-head">
          <div><p className="eyebrow">Réalisations</p><h2>Plus de photos, plus de confiance.</h2></div>
          <p className="section-copy">Galerie pensée pour montrer les types de travaux et donner envie de demander un devis.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <article className={`gallery-card card-${i}`} key={item.title}>
              <Image src={item.img} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div><span>{item.tag}</span><strong>{item.title}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="section-head center">
          <div><p className="eyebrow">Méthode</p><h2>Simple, clair, efficace.</h2></div>
        </div>
        <div className="process-grid">
          {process.map((p, i) => { const Icon = p.icon; return <div key={p.title}><span className="step">0{i + 1}</span><Icon/><h3>{p.title}</h3><p>{p.desc}</p></div>; })}
        </div>
      </section>

      <section id="avis" className="reviews-section">
        <div className="review-card big">
          <div className="stars"><Star/><Star/><Star/><Star/><Star/></div>
          <h2>“Travail propre, rapide et très professionnel.”</h2>
          <p>Site prêt pour convertir: avis visibles, contacts rapides, services clairs et photos grandes.</p>
        </div>
        <div className="zones-card">
          <p className="eyebrow">Zones</p>
          <h3>Intervention en France</h3>
          <div className="zones">{zones.map(z => <span key={z}>{z}</span>)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>DEVIS GRATUIT</h2>
          <p>Expliquez votre projet et recevez une réponse rapide pour vos travaux en France.</p>
          <div className="contact-list">
            <a href="tel:+33600000000"><Phone size={18}/> +33 6 00 00 00 00</a>
            <a href="mailto:contact@altino-construcoes.fr"><Mail size={18}/> contact@altino-construcoes.fr</a>
            <span><MapPin size={18}/> France</span>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row"><input placeholder="Nom" /><input placeholder="Téléphone" /></div>
          <input placeholder="Ville / Code postal" />
          <select defaultValue=""><option value="" disabled>Type de travaux</option><option>Rénovation complète</option><option>Peinture</option><option>Carrelage</option><option>Placo / isolation</option><option>Salle de bain</option><option>Petits travaux</option></select>
          <textarea placeholder="Décrivez votre projet, surfaces, délais, photos disponibles..." rows={5}/>
          <button className="btn btn-primary" type="button"><MessageCircle size={18}/> Envoyer la demande</button>
          <small>Remplace le numéro/email dans le code par les vrais contacts d'Altino.</small>
        </form>
      </section>

      <footer className="footer"><strong>Altino Construções</strong><span>© 2026 — Bâtiment, rénovation & finitions en France.</span></footer>

      <a className="whatsapp-float" href="https://wa.me/33600000000" aria-label="WhatsApp devis gratuit"><MessageCircle size={22}/><span>DEVIS GRATUIT</span></a>
    </main>
  );
}
