import React, { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// Portfolio — Hakati Youssef · Data Analyst & Data Scientist
// Thème "laboratoire computationnel" : nuit profonde + cyan/violet
// ─────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Hakati Youssef",
  role: "Data Analyst & Data Scientist · Étudiant Ingénieur IA",
  tagline:
    "Développeur logiciel orienté résolution de problèmes, spécialisé dans l'intégration pratique de l'intelligence artificielle. Je transforme l'innovation en valeur métier concrète.",
  email: "youssefhakati0@gmail.com",
  phone: "+212 677762106",
  location: "Casablanca, Maroc",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/feed/",
  cvUrl: "/CV-Hakati-Youssef.pdf",
  photo: "/photo-profil.jpg",
  formspreeId: "VOTRE_ID_FORMSPREE",
};

const SKILLS = [
  { group: "Développement Web", items: ["JavaScript / TypeScript", "React.js", "Redux", "Angular", "Node.js", "Laravel (PHP MVC)", "API REST", "UX/UI"] },
  { group: "Programmation & IA", items: ["Python", "Machine Learning", "Deep Learning", "IA Générative", "Réseaux de neurones", "Java (POO, Design Patterns)"] },
  { group: "Bases de données", items: ["SQL", "MongoDB", "ChromaDB"] },
  { group: "Outils & Méthodes", items: ["Git (GitHub/GitLab)", "Docker", "Cloud Computing", "JIRA", "Agile (Scrum)", "DevOps"] },
];

const PROJECTS = [
  {
    title: "Assistant Sémantique d'Entreprise (RAG)",
    tag: "IA Générative",
    desc: "Projet de Fin d'Année (EMSI). Assistant conversationnel basé sur le RAG qui interroge en langage naturel la base documentaire d'une entreprise (PDF, Word) et fournit des réponses sourcées et téléchargeables. Recherche sémantique via base vectorielle et génération LLM.",
    tech: ["LangChain", "ChromaDB", "Groq / Llama 3.3", "FastAPI", "React", "Embeddings MiniLM"],
    demo: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Système multi-agents de diagnostic médical",
    tag: "IA / Agents",
    desc: "Workflow multi-agents d'orientation clinique avec LangGraph : agent Superviseur, agent Diagnostic (5 questions patient), revue médecin (Human-in-the-Loop) et agent Rapport. État partagé entre agents, outils via MCP et exposition par API FastAPI.",
    tech: ["LangGraph", "LangChain", "MCP", "FastAPI", "Human-in-the-Loop"],
    demo: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Deep Learning — MLP, CNN & RNN/Seq2Seq",
    tag: "Deep Learning",
    desc: "Conception et comparaison de trois architectures : MLP pour la classification de données médicales tabulaires (maladie rénale chronique), CNN de type LeNet pour la vision (Fashion-MNIST), et RNN/LSTM/GRU encodeur-décodeur pour un chatbot conversationnel en français.",
    tech: ["PyTorch", "CNN / LeNet", "LSTM / GRU", "Seq2Seq", "scikit-learn"],
    demo: "#",
    code: "#",
    featured: true,
  },
  {
    title: "Application de gestion de documentation",
    tag: "Full Stack",
    desc: "Stage IWACO — application web full stack pour la gestion documentaire : conception de l'architecture logicielle, analyse des besoins et assurance qualité.",
    tech: ["React.js", "Node.js", "SQL", "API REST"],
    demo: "#",
    code: "#",
  },
  {
    title: "Couche d'abstraction relationnelle",
    tag: "Backend / Data",
    desc: "Stage Artiflow — couche d'abstraction pour les entités Employé, Service et Salaire (CRUD, relations, validation), avec optimisation par cache et indexation SQL.",
    tech: ["Java", "SQL", "Design Patterns"],
    demo: "#",
    code: "#",
  },
];

const EXPERIENCE = [
  { period: "5/2024 — 6/2024", role: "Stagiaire IT", org: "IWACO · Casablanca", desc: "Développement d'une application web full stack pour la gestion de documentation. Conception d'architecture logicielle, analyse des besoins, gestion de projet IT et assurance qualité." },
  { period: "5/2024 — 6/2024", role: "Stagiaire IT", org: "Artiflow · Casablanca", desc: "Développement d'une couche d'abstraction relationnelle (CRUD, relations, validation). Optimisation des performances par cache et indexation SQL avec traçabilité complète." },
];

const EDUCATION = [
  { period: "2025 — 2027", role: "Diplôme d'ingénieur reconnu par l'État (en cours)", org: "EMSI — La Grande École des Sciences de l'Ingénieur, Anfa" },
  { period: "2024 — 2025", role: "Licence Professionnelle en Génie Informatique", org: "Université Mundiapolis — Nouaceur" },
  { period: "2022 — 2024", role: "Technicien Spécialisé en Développement Digital — Full Stack", org: "Centre de Formation Professionnelle — Tit Mellil" },
];

const CERTIFICATIONS = ["AWS Academy Graduate", "Azur", "Honoris"];

const LANGUAGES = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Avancé" },
  { name: "Anglais", level: "Avancé" },
];

function NeuralBackground() {
  const canvasRef = useRef(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf, nodes = [], W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const count = Math.min(70, Math.floor((W * H) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced.current) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(56,189,248,${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(167,139,250,0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={styles.canvas} aria-hidden="true" />;
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
    }}>{children}</div>
  );
}

function RippleLink({ href, children, style, download, external, label }) {
  const [ripples, setRipples] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 650);
    setClicked(true);
    setTimeout(() => setClicked(false), 900);
  };

  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  if (download) extra.download = true;

  return (
    <a
      href={href}
      onClick={handleClick}
      className="ripple-link"
      style={{ ...style, position: "relative", overflow: "hidden", transform: clicked ? "scale(0.96)" : "scale(1)" }}
      {...extra}
    >
      <span style={{ position: "relative", zIndex: 2 }}>{clicked && label ? label : children}</span>
      {ripples.map((r) => (
        <span key={r.id} className="ripple-wave" style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
      ))}
    </a>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("Tous");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const tags = ["Tous", ...new Set(PROJECTS.map((p) => p.tag))];
  const shown = filter === "Tous" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Votre nom est requis.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Email invalide.";
    if (form.message.trim().length < 10) e.message = "Message trop court (10 caractères min).";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    setSendError("");
    if (Object.keys(e).length > 0) return;

    if (!PROFILE.formspreeId || PROFILE.formspreeId === "VOTRE_ID_FORMSPREE") {
      const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${PROFILE.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Contact portfolio — ${form.name}`,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setSendError("L'envoi a échoué. Réessayez ou écrivez-moi directement par email.");
      }
    } catch (err) {
      setSendError("Problème de connexion. Vérifiez votre réseau et réessayez.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={styles.root}>
      <style>{`
        @media (max-width: 780px) {
          .about-grid, .contact-grid { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; text-align: center; }
          .hero-grid > *:last-child { order: -1; }
        }
        input::placeholder, textarea::placeholder { color: #55617a; }
        a, button { transition: opacity .2s ease, transform .2s ease; }
        a:hover, button:hover { opacity: .85; }

        .ripple-link { display: inline-flex; align-items: center; justify-content: center; }
        .ripple-wave {
          position: absolute;
          border-radius: 50%;
          background: rgba(56,189,248,.45);
          transform: translate(-50%, -50%) scale(0);
          animation: rippleExpand .6s ease-out forwards;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes rippleExpand {
          to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(clamp(115px,14vw,162px)) rotate(0deg)} to{transform:rotate(360deg) translateX(clamp(115px,14vw,162px)) rotate(-360deg)} }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:.5} }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        .photo-hex-border { animation: gradientShift 6s ease infinite; }
        .photo-stage { animation: floatY 6s ease-in-out infinite; }
        .photo-orbit { animation: orbit 14s linear infinite; }
        .photo-pulse { animation: pulse 2s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ripple-wave { animation: none; display: none; }
          .photo-hex-border, .photo-stage, .photo-orbit, .photo-pulse { animation: none !important; }
          .photo-orbit { display: none; }
        }
      `}</style>
      <NeuralBackground />

      <nav style={styles.nav}>
        <span style={styles.logo}>{"< "}HY{" />"}</span>
        <div style={styles.navLinks}>
          {["about", "skills", "projects", "experience", "contact"].map((id) => (
            <button key={id} style={styles.navLink} onClick={() => scrollTo(id)}>
              {{ about: "À propos", skills: "Compétences", projects: "Projets", experience: "Parcours", contact: "Contact" }[id]}
            </button>
          ))}
          <RippleLink href={PROFILE.cvUrl} download style={styles.cvBtn} label="↓ ...">CV ↓</RippleLink>
        </div>
      </nav>

      <header style={styles.hero}>
        <div className="hero-grid" style={styles.heroGrid}>
          <Reveal>
            <p style={styles.eyebrow}>{PROFILE.location} · disponible</p>
            <h1 style={styles.h1}>{PROFILE.name}</h1>
            <p style={styles.role}>{PROFILE.role}</p>
            <p style={styles.tagline}>{PROFILE.tagline}</p>
            <div style={styles.heroBtns}>
              <button style={styles.primaryBtn} onClick={() => scrollTo("projects")}>Voir mes projets</button>
              <button style={styles.ghostBtn} onClick={() => scrollTo("contact")}>Me contacter</button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="photo-order photo-stage" style={styles.photoWrap}>
              <div style={styles.photoHalo} />
              <div className="photo-hex-border" style={styles.photoHexBorder}>
                <div style={styles.photoHexInner}>
                  <img src={PROFILE.photo} alt={PROFILE.name} style={styles.photo} />
                </div>
              </div>
              <span className="photo-orbit" style={styles.photoOrbitDot} />
              <span style={styles.photoStatus}>
                <span className="photo-pulse" style={styles.photoStatusDot} />
                Ouvert aux opportunités
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      <Section id="about" num="01" title="À propos">
        <div className="about-grid" style={styles.aboutGrid}>
          <p style={styles.body}>
            Développeur logiciel adaptable et orienté résolution de problèmes, je conçois des
            applications performantes. Spécialisé dans l'intégration pratique de l'intelligence
            artificielle, je mets ma créativité au service des défis techniques. En veille
            technologique constante, je m'engage à transformer l'innovation en valeur métier concrète.
          </p>
          <div style={styles.sidePanel}>
            <h4 style={styles.sideTitle}>Langues</h4>
            {LANGUAGES.map((l) => (
              <div key={l.name} style={styles.langRow}>
                <span>{l.name}</span><span style={styles.langLevel}>{l.level}</span>
              </div>
            ))}
            <h4 style={{ ...styles.sideTitle, marginTop: 22 }}>Certifications</h4>
            <div style={styles.chips}>
              {CERTIFICATIONS.map((c) => <span key={c} style={styles.chipSm}>{c}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" num="02" title="Compétences">
        <div style={styles.skillGrid}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div style={styles.skillCard}>
                <h3 style={styles.skillTitle}>{s.group}</h3>
                <div style={styles.chips}>
                  {s.items.map((it) => <span key={it} style={styles.chip}>{it}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="projects" num="03" title="Projets">
        <div style={styles.filters}>
          {tags.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              style={{ ...styles.filterBtn, ...(filter === t ? styles.filterActive : {}) }}>{t}</button>
          ))}
        </div>
        <div style={styles.projectGrid}>
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article style={{ ...styles.projectCard, ...(p.featured ? styles.projectCardFeatured : {}) }}>
                <div style={styles.projectTagRow}>
                  <span style={styles.projectTag}>{p.tag}</span>
                  {p.featured && <span style={styles.featuredBadge}>★ À la une</span>}
                </div>
                <h3 style={styles.projectTitle}>{p.title}</h3>
                <p style={styles.projectDesc}>{p.desc}</p>
                <div style={styles.chips}>
                  {p.tech.map((t) => <span key={t} style={styles.chipSm}>{t}</span>)}
                </div>
                <div style={styles.projectLinks}>
                  <a href={p.demo} style={styles.link}>Démo →</a>
                  <a href={p.code} style={styles.link}>Code →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="experience" num="04" title="Parcours">
        <h3 style={styles.subhead}>Expériences</h3>
        <div style={styles.timeline}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={styles.tlItem}>
                <div style={styles.tlDot} />
                <div>
                  <span style={styles.tlPeriod}>{e.period}</span>
                  <h3 style={styles.tlRole}>{e.role} · <span style={styles.tlOrg}>{e.org}</span></h3>
                  <p style={styles.projectDesc}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <h3 style={{ ...styles.subhead, marginTop: 50 }}>Formation</h3>
        <div style={styles.timeline}>
          {EDUCATION.map((e, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={styles.tlItem}>
                <div style={styles.tlDot} />
                <div>
                  <span style={styles.tlPeriod}>{e.period}</span>
                  <h3 style={styles.tlRole}>{e.role}</h3>
                  <p style={styles.tlOrg}>{e.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact" num="05" title="Contact">
        <div className="contact-grid" style={styles.contactGrid}>
          <div>
            <p style={styles.body}>
              Un projet, un stage de fin d'études, une collaboration en Data / IA ?
              Écrivez-moi directement ou via le formulaire.
            </p>
            <div style={styles.contactList}>
              <a href={`mailto:${PROFILE.email}`} style={styles.contactItem}>
                <span style={styles.contactLabel}>Email</span>
                <span style={styles.contactValue}>{PROFILE.email}</span>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} style={styles.contactItem}>
                <span style={styles.contactLabel}>Téléphone</span>
                <span style={styles.contactValue}>{PROFILE.phone}</span>
              </a>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Localisation</span>
                <span style={styles.contactValue}>{PROFILE.location}</span>
              </div>
            </div>
            <div style={styles.socialRow}>
              <RippleLink href={PROFILE.linkedin} external style={styles.ghostBtn} label="Ouverture…">LinkedIn</RippleLink>
              <RippleLink href={PROFILE.github} external style={styles.ghostBtn} label="Ouverture…">GitHub</RippleLink>
              <RippleLink href={PROFILE.cvUrl} download style={styles.ghostBtn} label="Téléchargement…">CV ↓</RippleLink>
            </div>
          </div>

          <div style={styles.formCard}>
            {sent ? (
              <div style={styles.successBox}>
                <span style={styles.successIcon}>✓</span>
                <h3 style={styles.formTitle}>Message envoyé</h3>
                <p style={styles.projectDesc}>
                  Merci {form.name || ""} ! Votre message m'a bien été transmis.
                  Je vous répondrai dès que possible.
                </p>
                <button style={styles.ghostBtn} onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}>
                  Nouveau message
                </button>
              </div>
            ) : (
              <div>
                <div style={styles.field}>
                  <label style={styles.label} htmlFor="name">Nom</label>
                  <input id="name" style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                    value={form.name} placeholder="Votre nom"
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <span style={styles.errorText}>{errors.name}</span>}
                </div>
                <div style={styles.field}>
                  <label style={styles.label} htmlFor="email">Email</label>
                  <input id="email" type="email" style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                    value={form.email} placeholder="vous@exemple.com"
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <span style={styles.errorText}>{errors.email}</span>}
                </div>
                <div style={styles.field}>
                  <label style={styles.label} htmlFor="message">Message</label>
                  <textarea id="message" rows={5} style={{ ...styles.input, ...styles.textarea, ...(errors.message ? styles.inputError : {}) }}
                    value={form.message} placeholder="Bonjour Youssef, ..."
                    onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  {errors.message && <span style={styles.errorText}>{errors.message}</span>}
                </div>
                <button
                  style={{ ...styles.primaryBtn, width: "100%", marginTop: 6, opacity: sending ? 0.7 : 1, cursor: sending ? "wait" : "pointer" }}
                  onClick={handleSubmit}
                  disabled={sending}
                >
                  {sending ? "Envoi en cours…" : "Envoyer le message"}
                </button>
                {sendError && <span style={{ ...styles.errorText, display: "block", marginTop: 12 }}>{sendError}</span>}
              </div>
            )}
          </div>
        </div>
      </Section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} {PROFILE.name} · <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" style={{ color: C.cyan }}>GitHub</a> · <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: C.cyan }}>LinkedIn</a>
      </footer>
    </div>
  );
}

function Section({ id, num, title, children }) {
  return (
    <section id={id} style={styles.section}>
      <Reveal>
        <div style={styles.sectionHead}>
          <span style={styles.sectionNum}>{num}</span>
          <h2 style={styles.h2}>{title}</h2>
          <span style={styles.rule} />
        </div>
      </Reveal>
      {children}
    </section>
  );
}

const C = {
  bg: "#0a0e1a", panel: "#111828", border: "#1e2a44",
  text: "#e2e8f0", dim: "#8494b0", cyan: "#38bdf8", violet: "#a78bfa",
};
const mono = "'JetBrains Mono', 'Fira Code', ui-monospace, monospace";
const sans = "'Inter', system-ui, -apple-system, sans-serif";

const styles = {
  root: { background: C.bg, color: C.text, fontFamily: sans, minHeight: "100vh", position: "relative", overflowX: "hidden" },
  canvas: { position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" },
  nav: { position: "sticky", top: 0, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px clamp(20px,5vw,80px)", backdropFilter: "blur(12px)", background: "rgba(10,14,26,.7)", borderBottom: `1px solid ${C.border}` },
  logo: { fontFamily: mono, color: C.cyan, fontWeight: 700, letterSpacing: "1px" },
  navLinks: { display: "flex", gap: "clamp(8px,2vw,24px)", alignItems: "center", flexWrap: "wrap" },
  navLink: { background: "none", border: "none", color: C.dim, cursor: "pointer", fontFamily: mono, fontSize: 13, padding: "6px 4px" },
  cvBtn: { fontFamily: mono, fontSize: 13, color: C.bg, background: C.cyan, padding: "8px 14px", borderRadius: 6, textDecoration: "none", fontWeight: 600 },
  hero: { position: "relative", zIndex: 1, minHeight: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(20px,6vw,90px)", maxWidth: 1100, margin: "0 auto" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 50, alignItems: "center" },
  photoWrap: { position: "relative", width: "clamp(210px,26vw,300px)", aspectRatio: "1", margin: "0 auto" },
  photoHalo: { position: "absolute", inset: "-18%", borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, ${C.cyan}, transparent 55%), radial-gradient(circle at 70% 75%, ${C.violet}, transparent 55%)`, filter: "blur(34px)", opacity: 0.5, zIndex: 0 },
  photoHexBorder: { position: "relative", zIndex: 2, width: "100%", height: "100%", padding: 3, background: `linear-gradient(135deg, ${C.cyan}, ${C.violet}, ${C.cyan})`, backgroundSize: "300% 300%", clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)" },
  photoHexInner: { width: "100%", height: "100%", background: C.bg, clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)", overflow: "hidden" },
  photo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  photoOrbitDot: { position: "absolute", top: "50%", left: "50%", width: 10, height: 10, marginTop: -5, marginLeft: -5, borderRadius: "50%", background: C.cyan, boxShadow: `0 0 14px ${C.cyan}`, transformOrigin: "0 0", zIndex: 3 },
  photoStatus: { position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", background: "rgba(17,24,40,.92)", border: `1px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", fontFamily: mono, fontSize: 12, color: C.text, backdropFilter: "blur(6px)" },
  photoStatusDot: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" },
  eyebrow: { fontFamily: mono, color: C.cyan, fontSize: 13, letterSpacing: "2px", textTransform: "uppercase" },
  h1: { fontSize: "clamp(44px,8vw,88px)", fontWeight: 800, lineHeight: 1.02, margin: "12px 0", letterSpacing: "-2px" },
  role: { fontSize: "clamp(18px,3vw,26px)", color: C.violet, fontWeight: 600, margin: 0 },
  tagline: { fontSize: "clamp(16px,2vw,19px)", color: C.dim, maxWidth: 620, marginTop: 18, lineHeight: 1.6 },
  heroBtns: { display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" },
  primaryBtn: { background: `linear-gradient(135deg,${C.cyan},${C.violet})`, color: C.bg, border: "none", padding: "13px 26px", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: 15, textDecoration: "none" },
  ghostBtn: { background: "transparent", color: C.text, border: `1px solid ${C.border}`, padding: "13px 26px", borderRadius: 8, cursor: "pointer", fontSize: 15, textDecoration: "none" },
  section: { position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "90px clamp(20px,6vw,90px)" },
  sectionHead: { display: "flex", alignItems: "center", gap: 16, marginBottom: 40 },
  sectionNum: { fontFamily: mono, color: C.cyan, fontSize: 15 },
  h2: { fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, margin: 0, letterSpacing: "-1px" },
  rule: { flex: 1, height: 1, background: C.border },
  body: { fontSize: 17, lineHeight: 1.8, color: C.dim, maxWidth: 620 },
  aboutGrid: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "start" },
  sidePanel: { background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12, padding: 22 },
  sideTitle: { fontFamily: mono, color: C.cyan, fontSize: 13, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "1px" },
  langRow: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14, borderBottom: `1px solid ${C.border}` },
  langLevel: { color: C.dim, fontSize: 13 },
  subhead: { fontFamily: mono, color: C.violet, fontSize: 14, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 24 },
  skillGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 },
  skillCard: { background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12, padding: 22, height: "100%" },
  skillTitle: { fontFamily: mono, color: C.cyan, fontSize: 14, marginTop: 0, marginBottom: 14 },
  chips: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { background: "rgba(56,189,248,.1)", color: C.cyan, padding: "5px 12px", borderRadius: 20, fontSize: 13, fontFamily: mono },
  chipSm: { background: "rgba(167,139,250,.1)", color: C.violet, padding: "3px 9px", borderRadius: 6, fontSize: 12, fontFamily: mono },
  filters: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 },
  filterBtn: { background: "transparent", border: `1px solid ${C.border}`, color: C.dim, padding: "7px 16px", borderRadius: 20, cursor: "pointer", fontFamily: mono, fontSize: 13 },
  filterActive: { background: C.cyan, color: C.bg, borderColor: C.cyan, fontWeight: 700 },
  projectGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 },
  projectCard: { background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 26, height: "100%", display: "flex", flexDirection: "column" },
  projectCardFeatured: { border: `1px solid ${C.cyan}`, background: "linear-gradient(160deg, rgba(56,189,248,.06), rgba(167,139,250,.04))" },
  projectTagRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 },
  projectTag: { fontFamily: mono, fontSize: 12, color: C.violet, letterSpacing: "1px", textTransform: "uppercase" },
  featuredBadge: { fontFamily: mono, fontSize: 11, color: C.cyan, border: `1px solid ${C.cyan}`, padding: "2px 8px", borderRadius: 20, whiteSpace: "nowrap" },
  projectTitle: { fontSize: 20, fontWeight: 700, margin: "10px 0 8px" },
  projectDesc: { color: C.dim, fontSize: 15, lineHeight: 1.6, flex: 1, marginBottom: 16 },
  projectLinks: { display: "flex", gap: 18, marginTop: 16 },
  link: { color: C.cyan, textDecoration: "none", fontFamily: mono, fontSize: 14 },
  timeline: { display: "flex", flexDirection: "column", gap: 32, borderLeft: `2px solid ${C.border}`, paddingLeft: 28 },
  tlItem: { position: "relative", display: "flex", gap: 4 },
  tlDot: { position: "absolute", left: -35, top: 6, width: 12, height: 12, borderRadius: "50%", background: C.cyan, boxShadow: `0 0 12px ${C.cyan}` },
  tlPeriod: { fontFamily: mono, color: C.violet, fontSize: 13 },
  tlRole: { fontSize: 18, fontWeight: 700, margin: "6px 0 8px" },
  tlOrg: { color: C.cyan, fontWeight: 500, fontSize: 15 },
  contactGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" },
  contactList: { display: "flex", flexDirection: "column", gap: 4, margin: "28px 0" },
  contactItem: { display: "flex", flexDirection: "column", gap: 2, padding: "14px 0", borderBottom: `1px solid ${C.border}`, textDecoration: "none" },
  contactLabel: { fontFamily: mono, color: C.dim, fontSize: 12, textTransform: "uppercase", letterSpacing: "1px" },
  contactValue: { color: C.cyan, fontSize: 16 },
  socialRow: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 },
  formCard: { background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 30 },
  field: { marginBottom: 18, display: "flex", flexDirection: "column" },
  label: { fontFamily: mono, fontSize: 13, color: C.dim, marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" },
  input: { background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", color: C.text, fontSize: 15, fontFamily: sans, outline: "none" },
  textarea: { resize: "vertical", minHeight: 110 },
  inputError: { borderColor: "#f87171" },
  errorText: { color: "#f87171", fontSize: 13, marginTop: 6, fontFamily: mono },
  formTitle: { fontSize: 20, fontWeight: 700, margin: "12px 0 8px" },
  successBox: { textAlign: "center", padding: "10px 0" },
  successIcon: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 54, height: 54, borderRadius: "50%", background: `linear-gradient(135deg,${C.cyan},${C.violet})`, color: C.bg, fontSize: 26, fontWeight: 800 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", padding: "40px 20px", color: C.dim, fontFamily: mono, fontSize: 13, borderTop: `1px solid ${C.border}` },
};