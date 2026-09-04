import { useState } from "react";
import { useNavigate } from "react-router";
import profilePhoto from "./imports/image_135_2.png";

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Case Studies", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "rgba(245, 245, 247, 0.82)",
        borderBottom: "0.5px solid rgba(0,0,0,0.10)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Monogram */}
        <a
          href="#hero"
          style={{
            fontWeight: 600,
            fontSize: 16,
            color: "#1d1d1f",
            textDecoration: "none",
            letterSpacing: "-0.3px",
          }}
        >
          M<span style={{ color: "#0071e3" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#0071e3",
            padding: "7px 16px",
            borderRadius: 980,
            textDecoration: "none",
            transition: "background-color 0.15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0077ed")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0071e3")}
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        textAlign: "center",
        background: "linear-gradient(160deg, #f5f5f7 0%, #e8e8ed 100%)",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          backgroundColor: "rgba(0, 113, 227, 0.08)",
          border: "0.5px solid rgba(0, 113, 227, 0.25)",
          borderRadius: 980,
          padding: "5px 14px",
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 500, color: "#0071e3", letterSpacing: 0.3 }}>
          Product Designer, UX/UI, Business Analyst
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(36px, 7vw, 72px)",
          fontWeight: 700,
          color: "#1d1d1f",
          letterSpacing: "-2px",
          lineHeight: 1.05,
          maxWidth: 820,
          margin: "0 0 24px",
        }}
      >
        Designing products<br /><span style={{ color: "#6e6e73", fontWeight: 400 }}>people really need.</span>
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          fontWeight: 400,
          color: "#6e6e73",
          maxWidth: 540,
          lineHeight: 1.55,
          margin: "0 0 48px",
        }}
      >
        Product professional with 5+ years of experience in tech, leading product discovery.
      </p>

      {/* Actions */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#work"
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#0071e3",
            padding: "13px 28px",
            borderRadius: 980,
            textDecoration: "none",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0077ed")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0071e3")}
        >
          View case studies
        </a>
        <a
          href="#about"
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#0071e3",
            backgroundColor: "transparent",
            border: "1px solid rgba(0,113,227,0.35)",
            padding: "13px 28px",
            borderRadius: 980,
            textDecoration: "none",
          }}
        >
          My story
        </a>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.35,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 1, color: "#1d1d1f" }}>SCROLL</span>
        <div style={{ width: 1, height: 36, backgroundColor: "#1d1d1f" }} />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" style={{ backgroundColor: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionLabel text="About" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
            marginTop: 48,
          }}
          className="grid-single"
        >
          {/* Photo placeholder */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(160deg, #c8d8f0 0%, #dde4f0 60%, #b8cce8 100%)",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <img
                src={profilePhoto}
                alt="Profile photo"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-1.2px",
                color: "#1d1d1f",
                lineHeight: 1.1,
                margin: "0 0 24px",
              }}
            >
              Mar Vargas Barth
            </h2>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#6e6e73",
                margin: "0 0 36px",
              }}
            >
              Product professional with 5+ years of experience leading product discovery, requirements definition, solution strategy, and end-to-end delivery of digital products across store operations and logistics. Experienced in translating business and customer needs into scalable solutions, aligning business and technology stakeholders, prioritizing opportunities, and driving cross-functional teams through the product lifecycle. Strong track record of using user insights, business objectives, and measurable outcomes to inform product decisions and deliver operational impact.
            </p>

            {/* Quick facts */}
            <div style={{ display: "flex", gap: 40 }}>
              {[
                { value: "Experience", label: "Retail · Life Science · Fintech" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{ fontSize: 24, fontWeight: 700, color: "#1d1d1f", margin: "0 0 2px", letterSpacing: "-0.6px" }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 12, color: "#aeaeb2", margin: 0, fontWeight: 400 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    icon: "✦",
    color: "#0071e3",
    title: "UX Foundations",
    description: "Crafting intuitive, user-centered experiences through research, interaction design, and iterative prototyping. Always grounded in real user needs and validated with data.",
    tags: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture", "Figma", "Design Systems"],
  },
  {
    icon: "◈",
    color: "#af52de",
    title: "Product Strategy",
    description: "Translating business goals and user insights into clear product direction; defining roadmaps, setting priorities, and measuring what matters to drive meaningful outcomes.",
    tags: ["Roadmapping", "Risk Management", "Agile", "Data Analysis", "Stakeholder Management"],
  },
  {
    icon: "⬡",
    color: "#34c759",
    title: "Discovery & Validation",
    description: "Identifying the right problems before jumping to solutions; combining qualitative & quantitative research, behavioral data, and structured frameworks to validate ideas and reduce risk.",
    tags: ["Jobs-to-be-Done", "Problem Framing", "Hypothesis Testing", "User Interviews", "Market Research", "AI Prototyping"],
  },
  {
    icon: "△",
    color: "#ff9500",
    title: "Cross-functional Leadership",
    description: "Bridging design, tech, and business by facilitating alignment across teams, communicating a vision clearly, and keeping cross-functional groups moving toward shared goals.",
    tags: ["Collaboration", "Facilitation", "Communication", "Prioritization", "Go-to-Market"],
  },
];

function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "#f5f5f7", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionLabel text="Skills" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            marginTop: 48,
          }}
          className="grid-single"
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  color,
  title,
  description,
  tags,
}: {
  icon: string;
  color: string;
  title: string;
  description: string;
  tags: string[];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 32,
        border: `0.5px solid ${hovered ? color + "40" : "rgba(0,0,0,0.07)"}`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered
          ? `0 8px 40px rgba(0,0,0,0.07), 0 0 0 1px ${color}20`
          : "0 2px 12px rgba(0,0,0,0.04)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          backgroundColor: color + "14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          color,
          marginBottom: 20,
          fontWeight: 400,
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#1d1d1f",
          margin: "0 0 10px",
          letterSpacing: "-0.3px",
        }}
      >
        {title}
      </h3>

      <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6, margin: "0 0 20px" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 12,
              fontWeight: 500,
              color,
              backgroundColor: color + "0f",
              border: `0.5px solid ${color}25`,
              padding: "4px 10px",
              borderRadius: 980,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Smart Flow Cover ─────────────────────────────────────────────────────────

function DonutChart({ value, total, color, label }: { value: number; total: number; color: string; label: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const filled = (value / total) * circ;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <svg width={72} height={72} viewBox="0 0 72 72">
        <circle cx={36} cy={36} r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={8} />
        <circle
          cx={36} cy={36} r={r} fill="none"
          stroke={color} strokeWidth={8}
          strokeDasharray={`${filled} ${circ - filled}`}
          strokeLinecap="round"
          transform="rotate(-90 36 36)"
        />
        <text x={36} y={40} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={700}>{value}</text>
      </svg>
      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: 0.3 }}>{label}</span>
    </div>
  );
}

function SmartFlowCover() {
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 380,
      background: "linear-gradient(145deg, #0d1b3e 0%, #0a2250 50%, #0c1a3a 100%)",
      padding: "28px 28px 24px",
      display: "flex", flexDirection: "column", gap: 20,
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle grid texture */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#ffc220" }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.2px" }}>Smart Flow</span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3 }}>KEY METRICS · WEEK 19 · JUN 2026</span>
        </div>
        <div style={{
          backgroundColor: "rgba(52, 199, 89, 0.15)",
          border: "0.5px solid rgba(52,199,89,0.3)",
          borderRadius: 980, padding: "4px 10px",
          fontSize: 10, fontWeight: 600, color: "#34c759", letterSpacing: 0.4,
        }}>● PRODUCCIÓN</div>
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, position: "relative" }}>
        {[
          { value: "50", label: "Active stores", delta: "+3", up: true, color: "#0071e3" },
          { value: "42", label: "Proj. deliveries", delta: "18 delivered", up: true, color: "#34c759" },
          { value: "7", label: "Active alerts", delta: "3 critical", up: false, color: "#ff9500" },
        ].map((k) => (
          <div key={k.label} style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: "14px 14px 12px",
          }}>
            <p style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 2px", letterSpacing: "-0.8px" }}>{k.value}</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", margin: "0 0 6px" }}>{k.label}</p>
            <span style={{
              fontSize: 10, fontWeight: 500,
              color: k.up ? "#34c759" : "#ff6b6b",
              backgroundColor: k.up ? "rgba(52,199,89,0.12)" : "rgba(255,107,107,0.12)",
              padding: "2px 6px", borderRadius: 4,
            }}>{k.delta}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", position: "relative" }}>
        <DonutChart value={39} total={50} color="#34c759" label="Balanced" />
        <DonutChart value={8} total={50} color="#ff9500" label="On alert" />
        <DonutChart value={18} total={42} color="#0071e3" label="Delivered" />
        <DonutChart value={16} total={42} color="#af52de" label="Scheduled" />
      </div>

      {/* Flow table mini */}
      <div style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { label: "INBOUND", value: "99", sub: "Units received", color: "#0071e3" },
            { label: "OUTBOUND", value: "8,037", sub: "Total dispatched", color: "#34c759" },
            { label: "CROSSDOCK", value: "69,540", sub: "Units processed", color: "#af52de" },
          ].map((row) => (
            <div key={row.label} style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: `0.5px solid ${row.color}30`,
              borderTop: `2px solid ${row.color}`,
              borderRadius: "0 0 8px 8px",
              padding: "10px 12px",
            }}>
              <p style={{ fontSize: 9, fontWeight: 600, color: row.color, margin: "0 0 4px", letterSpacing: 0.6 }}>{row.label}</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 2px", letterSpacing: "-0.5px" }}>{row.value}</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", margin: 0 }}>{row.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Workflow Cover ───────────────────────────────────────────────────────────

const wfBrands = [
  { name: "Cabenuva", color: "#506d85" },
  { name: "Apretude", color: "#999920" },
  { name: "Rukobia",  color: "#414285" },
  { name: "Dovato",   color: "#db146b" },
];

const wfTokens = [
  { label: "Primary", hex: "#1f2c3b" },
  { label: "Accent",  hex: "#015b97" },
  { label: "Surface", hex: "#ffffff" },
  { label: "Gray",    hex: "#6e7b8b" },
];

function WorkflowCover() {
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 380,
      background: "linear-gradient(145deg, #1a2536 0%, #1f2c3b 60%, #182030 100%)",
      padding: "28px 28px 24px",
      display: "flex", flexDirection: "column", gap: 18,
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#af52de" }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.2px" }}>Figma Library</span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: 0.3 }}>VIIV HEALTHCARE · DESIGN SYSTEM</span>
        </div>
        <div style={{
          backgroundColor: "rgba(175,82,222,0.15)",
          border: "0.5px solid rgba(175,82,222,0.3)",
          borderRadius: 980, padding: "4px 10px",
          fontSize: 10, fontWeight: 600, color: "#af52de", letterSpacing: 0.4,
        }}>4 BRANDS</div>
      </div>

      {/* Color tokens row */}
      <div style={{ position: "relative" }}>
        <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 0.8, margin: "0 0 8px" }}>COLOR TOKENS</p>
        <div style={{ display: "flex", gap: 8 }}>
          {wfTokens.map((t) => (
            <div key={t.label} style={{ flex: 1 }}>
              <div style={{ height: 28, borderRadius: 6, backgroundColor: t.hex, border: "0.5px solid rgba(255,255,255,0.1)", marginBottom: 4 }} />
              <p style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: 0.2 }}>{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand chips */}
      <div style={{ position: "relative" }}>
        <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 0.8, margin: "0 0 8px" }}>BRAND VARIANTS</p>
        <div style={{ display: "flex", gap: 8 }}>
          {wfBrands.map((b) => (
            <div key={b.name} style={{
              flex: 1, backgroundColor: b.color, borderRadius: 8,
              padding: "10px 8px", textAlign: "center",
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#fff", margin: 0, letterSpacing: "-0.2px" }}>{b.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Component library mini grid */}
      <div style={{ position: "relative" }}>
        <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 0.8, margin: "0 0 8px" }}>COMPONENT LIBRARY</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[
            { label: "Buttons", count: "12 variants" },
            { label: "Icons",   count: "240+ assets" },
            { label: "Cards",   count: "8 templates" },
            { label: "Logos",   count: "4 brands" },
            { label: "Typography", count: "6 scales" },
            { label: "Layouts", count: "Email · Web" },
          ].map((c) => (
            <div key={c.label} style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: 10, padding: "10px 10px 8px",
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#fff", margin: "0 0 2px", letterSpacing: "-0.2px" }}>{c.label}</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", margin: 0 }}>{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

const caseStudies = [
  {
    label: "Case Study 01",
    tag: "Discovery + AI Prototype + Strategy",
    tagColor: "#0071e3",
    title: "Smart Flow",
    summary:
      "Inventory flow synchronization across the supply chain: Distribution Center – Suppliers – Store",
    outcomes: ["Labor cost", "Productivity", "Demand capacity"],
    imgBg: "#dde4f0",
  },
  {
    label: "Case Study 02",
    tag: "Design System · Visual Design",
    tagColor: "#af52de",
    title: "Workflow Improvement — Figma Library",
    summary:
      "Built a centralized Figma design library for ViiV Healthcare's four HIV pharmaceutical brands, unifying tokens, components, and approved assets across emails, social media, and web banners.",
    outcomes: ["4 brands unified in a single library", "100% team asset access without manual requests", "Adobe XD → Figma migration"],
    imgBg: "#eaddf0",
  },
  {
    label: "Case Study 03",
    tag: "End-to-End Design",
    tagColor: "#34c759",
    title: "[Project Title]",
    summary:
      "[Describe a project that shows your full-stack UX process — from discovery to delivery — and any PM-adjacent decisions you made.]",
    outcomes: ["[Metric 1]", "[Metric 2]", "[Metric 3]"],
    imgBg: "#ddf0e4",
  },
];

function Work() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cs = caseStudies[activeIdx];
  const navigate = useNavigate();

  return (
    <section id="work" style={{ backgroundColor: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionLabel text="Case Studies" />

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            backgroundColor: "#f5f5f7",
            borderRadius: 12,
            padding: 4,
            marginTop: 48,
            width: "fit-content",
          }}
        >
          {caseStudies.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActiveIdx(i)}
              style={{
                fontSize: 13,
                fontWeight: activeIdx === i ? 500 : 400,
                color: activeIdx === i ? "#1d1d1f" : "#6e6e73",
                backgroundColor: activeIdx === i ? "#fff" : "transparent",
                border: "none",
                borderRadius: 9,
                padding: "8px 16px",
                cursor: "pointer",
                transition: "all 0.15s",
                boxShadow: activeIdx === i ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                display: i <= 1 ? "block" : "none",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Case study card */}
        <div
          key={activeIdx}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginTop: 24,
            backgroundColor: "#f5f5f7",
            borderRadius: 24,
            overflow: "hidden",
          }}
          className="grid-single"
        >
          {/* Image */}
          <div style={{ minHeight: 380, overflow: "hidden" }}>
            {activeIdx === 0 ? <SmartFlowCover /> :
             activeIdx === 1 ? <WorkflowCover /> : (
              <div style={{
                backgroundColor: cs.imgBg, height: "100%", minHeight: 380,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ textAlign: "center", color: "rgba(0,0,0,0.3)" }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>🖼</div>
                  <p style={{ fontSize: 13, margin: 0 }}>Project visual / mockup</p>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: "44px 40px 44px 0" }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: cs.tagColor,
                backgroundColor: cs.tagColor + "14",
                border: `0.5px solid ${cs.tagColor}30`,
                padding: "4px 10px",
                borderRadius: 980,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              {cs.tag}
            </span>

            <h3
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                color: "#1d1d1f",
                letterSpacing: "-0.8px",
                lineHeight: 1.15,
                margin: "0 0 16px",
              }}
            >
              {cs.title}
            </h3>

            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6e6e73", margin: "0 0 28px" }}>
              {cs.summary}
            </p>

            {/* Outcomes */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.6, color: "#aeaeb2", margin: "0 0 12px" }}>
                KEY OUTCOMES
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {cs.outcomes.map((o) => (
                  <div key={o} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: cs.tagColor,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 14, color: "#1d1d1f", fontWeight: 500 }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate(`/case-study/${activeIdx}`)}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: cs.tagColor,
                backgroundColor: "transparent",
                border: `1px solid ${cs.tagColor}40`,
                padding: "10px 22px",
                borderRadius: 980,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = cs.tagColor + "10")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "transparent")}
            >
              Read full case study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "I start by listening to users, to data, and to the business. Through interviews, observation, and behavioral analysis, I surface the real friction points that often go unspoken. This phase is about asking better questions before committing to any solution.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Research only creates value when it's translated into clear direction. I synthesize findings into problem statements, opportunity maps, requirements, and measurable success criteria — giving teams a shared understanding of what we're solving for and how we'll know when we've succeeded.",
  },
  {
    num: "03",
    title: "Design",
    desc: "I move from concept to prototype quickly, keeping fidelity proportional to the decision at hand, early alignment, high-fi prototypes for usability testing or validation. Every design decision is tied to an insight, and I stay in close collaboration with developers and architects to ensure what's designed is what gets built.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Shipping is a milestone, not the finish line. I coordinate launches and reviews across design, engineering, QA, and business stakeholders to validate usability. What we learn feeds directly back into the next discovery cycle, closing the loop between outcome and opportunity.",
  },
];

function Process() {
  return (
    <section id="process" style={{ backgroundColor: "#f5f5f7", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionLabel text="How I work" />

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-1.2px",
            color: "#1d1d1f",
            lineHeight: 1.1,
            margin: "24px 0 60px",
            maxWidth: 600,
          }}
        >
          From insight to outcome
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  isLast,
}: {
  step: { num: string; title: string; desc: string };
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "0.5px solid rgba(0,0,0,0.07)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "60px 1fr auto",
          alignItems: "center",
          gap: 24,
          padding: "24px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#0071e3",
            fontFeatureSettings: "'tnum'",
            letterSpacing: 0.5,
          }}
        >
          {step.num}
        </span>
        <span
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#1d1d1f",
            letterSpacing: "-0.3px",
          }}
        >
          {step.title}
        </span>
        <span
          style={{
            fontSize: 18,
            color: "#aeaeb2",
            transition: "transform 0.2s",
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div style={{ padding: "0 28px 24px 84px" }}>
          <p style={{ fontSize: 15, color: "#6e6e73", lineHeight: 1.7, margin: 0 }}>
            {step.desc}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Transition Story ─────────────────────────────────────────────────────────

function TransitionStory() {
  return (
    <section style={{ backgroundColor: "#1d1d1f", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 80,
            alignItems: "center",
          }}
          className="grid-single"
        >
          <div>
            <SectionLabel text="UX & BUSINESS" light />
            <p
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                color: "#f5f5f7",
                letterSpacing: "-1.2px",
                lineHeight: 1.1,
                margin: "24px 0 0",
              }}
            >
              The bridge between users and business.
            </p>
          </div>

          <div>
            <blockquote
              style={{
                fontSize: "clamp(16px, 2.2vw, 22px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(245,245,247,0.7)",
                lineHeight: 1.6,
                margin: "0 0 32px",
                borderLeft: "2px solid #0071e3",
                paddingLeft: 28,
              }}
            >
              "Working for Walmart gave me a firsthand view of both the operational backbone and the end-user experience. I learned that informed decisions matter equally to the business and to the people it serves"
            </blockquote>

            <p style={{ fontSize: 16, color: "rgba(245,245,247,0.5)", lineHeight: 1.7, margin: 0 }}>
              Time is one of the most critical resources in product — whether streamlining internal operations or reducing friction in users' daily workflows, its impact translates directly into productivity, capacity, conversion, retention, and business value. Through qualitative research, I have consistently identified opportunities that go beyond design, enabling me to work closely with business stakeholders, anticipate risks, and drive early validation across cross-functional and cross-system dependencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#fff", padding: "100px 24px" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            color: "#1d1d1f",
            lineHeight: 1.05,
            margin: "24px 0 20px",
          }}
        >
          Let's build something together.
        </h2>

        <p style={{ fontSize: 16, color: "#6e6e73", lineHeight: 1.6, margin: "0 0 48px" }}>
          Open to collaborations and conversations.
        </p>

        <a
          href="mailto:mmvb180497@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 16,
            fontWeight: 500,
            color: "#fff",
            backgroundColor: "#0071e3",
            padding: "15px 32px",
            borderRadius: 980,
            textDecoration: "none",
            transition: "background-color 0.15s",
            marginBottom: 40,
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0077ed")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0071e3")}
        >
          mmvb180497@gmail.com →
        </a>

        {/* Social links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 8 }}>
          {[
            { label: "LinkedIn", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#6e6e73",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0071e3")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6e6e73")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f7",
        borderTop: "0.5px solid rgba(0,0,0,0.08)",
        padding: "28px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 13, color: "#aeaeb2" }}>
          Mar Vargas Barth — Product Designer, UX/UI, Business Analyst
        </span>
        <span style={{ fontSize: 13, color: "#aeaeb2" }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#0071e3",
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 1,
          color: light ? "rgba(245,245,247,0.4)" : "#aeaeb2",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .grid-single { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <TransitionStory />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
