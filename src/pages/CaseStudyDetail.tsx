import { useParams, useNavigate } from "react-router";
import ArchitectureDiagram from "@/imports/ArchitectureDiagram";
import procesoFlowImg from "@/imports/Proceso_END2END_Flujo__1_.png";
import wfDiscover from "@/imports/Workflow/7d83f6122b084e26bf948137627bf7b61efe9bf0.png";
import wfGather from "@/imports/Workflow/9e36dde141e6cad22c0ee679796db54bd9afa2ad.png";
import wfDesignBefore from "@/imports/Workflow/a5b5485512eaa8ee007e71785524041aeae25be8.png";
import wfDesignAfter from "@/imports/Workflow/1a7f9f2104f879019f38188763c8a2dd395a99b5.png";
import wfImplement from "@/imports/Workflow/24c1528bbc06aa07ddbcb880032eefd0cfb6e73f.png";
import wfShare from "@/imports/Workflow/47feb93c5b1e3caee11fbf696608eab3e183431f.png";

const caseStudyData: Record<string, {
  title: string;
  tag: string;
  tagColor: string;
  role: string;
  timeline: string;
  company: string;
  overview: string;
  problem: string;
  approach: string[];
  solution: string;
  outcomes: { label: string; value: string; description: string }[];
  learnings: string;
}> = {
  "0": {
    title: "Smart Flow",
    tag: "Discovery + AI Prototype + Strategy",
    tagColor: "#0071e3",
    role: "Product Designer / Business Analyst",
    timeline: "Q1–Q4 2026",
    company: "Walmart · Store Operations & Logistics",
    overview: "Inventory flow synchronization across the supply chain: Distribution Center – Suppliers – Store.",
    problem: "Stores' actual receiving capacity was neither defined, standardized, nor integrated as a formal operational constraint within the inventory flow — failing to account for variables such as product type, quantities, and delivery mode (DC or direct supplier). This gap resulted in backroom congestion, operational rework, logistics inefficiencies, and loss of resources.",
    approach: [
      "Discovery — Conducted qualitative research through stakeholder interviews to surface pain points, paired with data analysis and end-to-end process mapping.",
      "Requirements — Translated research findings into a prioritized roadmap, acceptance criteria, and business rules. Aligned deliverables with the replenishment team, a business analyst partner, and the agile squad.",
      "Prototyping — Built the information architecture and an AI-assisted prototype with clickable flows to validate the solution with stakeholders. I walked them through the interface in interviews, shared a public link for async exploration, and iterated quickly — only minor adjustments were needed during technical validation.",
      "Delivery — Defined acceptance criteria and broke the solution into Kanban tasks with clear design direction. Developers could close a task only after my approval, then hand it off to the QA team — keeping quality gates tight throughout the release.",
    ],
    solution: "A tool designed to align product flow based on what arrives at each store, parameterize and manage each store's actual receiving capacity, and enable more precise planning — reducing congestion and improving logistics efficiency. By ensuring the quantity and type of products dispatched stays in balance with real capacity, the solution optimizes resources and strengthens operations across the entire supply chain.",
    outcomes: [
      { label: "Time", value: "~99%", description: "Reduction in time spent on manual capacity coordination across the supply chain." },
      { label: "Flow Variability", value: "20%", description: "Reduction in the variability of inventory flow received at store, capped at a defined maximum." },
      { label: "Centralization", value: "100%", description: "Unified information managed from a single source of truth." },
    ],
    learnings: "This project reshaped how I document information for development teams. I learned to organize requirements by modules, categories, and data catalogs — not just focusing on the visual layer, but going deeper into the systems that feed the product: databases, data types, and the integrations that make everything work. The real design challenge wasn't the UI — it was understanding and mapping the data architecture behind it.",
  },
  "1": {
    title: "Workflow Improvement — Figma Library",
    tag: "Design System · Visual Design",
    tagColor: "#af52de",
    role: "Visual Designer",
    timeline: "2024",
    company: "ViiV Healthcare · Design Team",
    overview: "Built a centralized Figma design library for ViiV Healthcare's four HIV pharmaceutical brands, unifying tokens, components, and agency-approved assets across emails, social media, and web banners.",
    problem: "The design team lacked efficient collaborative processes and centralized asset management, causing inconsistencies across digital products for four distinct pharmaceutical brands. Assets were scattered, file sharing was ad hoc, and no single source of truth existed — a critical compliance risk in a regulated industry.",
    approach: [
      "Discover — Identified agency- and U.S. market-approved assets through team collaboration and direct consultation with ViiV's lead designer inside the Content Management System (Content Lab).",
      "Gather — Organized all identified assets — icons, images, and logos — by brand and format (PNG, SVG) in Figma, ensuring proper categorization and seamless design implementation across platforms.",
      "Design — Built structured reference tables linking each asset's CMS ID, name, and direct URL. Created a before-and-after comparison of the previous ad-hoc format versus the newly organized, consistent library.",
      "Implement — Published the unified library with all variables correctly named by type and brand. Documented step-by-step guides covering thumbnail setup, library integration, and component use — giving the full team a single source of truth.",
      "Train & Share — Delivered live training sessions during general designer meetings for teams in Costa Rica and the U.S., co-developing best-practice presentations with the design team lead.",
    ],
    solution: "A shared Figma design library with reusable tokens and components unifying all approved pharmaceutical assets for ViiV's four brands — Cabenuva, Apretude, Rukobia, and Dovato — covering emails, social media posts, and web banners across Facebook, Pinterest, LinkedIn, and Instagram.",
    outcomes: [
      { label: "Brands", value: "4", description: "Distinct HIV drug brands unified under a single Figma library with brand-specific token sets." },
      { label: "Asset Access", value: "100%", description: "Full team gained immediate access to the latest approved assets — no manual file requests needed." },
      { label: "Tool Migration", value: "XD → Figma", description: "Migrated the full team to Figma as Adobe XD discontinued updates, future-proofing the team workflow." },
    ],
    learnings: "This project taught me that design systems are as much about people as they are about files. The hardest part was not organizing the assets — it was getting a distributed team across Costa Rica and the U.S. to change long-standing habits. I learned to document with training in mind, not just future-me in mind, and that live demonstrations during real team meetings are far more effective than any written guide alone.",
  },
  "2": {
    title: "[Case Study 03]",
    tag: "End-to-End Design",
    tagColor: "#34c759",
    role: "[Your role on this project]",
    timeline: "[Project timeline]",
    company: "[Company · Team or domain]",
    overview: "[Describe a project that shows your full-stack UX process — from discovery to delivery.]",
    problem: "[Describe the core problem this project addressed.]",
    approach: [
      "Discovery — [How you approached research and problem framing.]",
      "Requirements — [How you defined scope and success criteria.]",
      "Design — [What you created and how you validated it.]",
      "Delivery — [How you coordinated the launch and measured results.]",
    ],
    solution: "[What was the solution and how did it address the problem?]",
    outcomes: [
      { label: "[Outcome 1]", value: "[Value]", description: "[Impact description]" },
      { label: "[Outcome 2]", value: "[Value]", description: "[Impact description]" },
      { label: "[Outcome 3]", value: "[Value]", description: "[Impact description]" },
    ],
    learnings: "[Key learnings from this project.]",
  },
};

export default function CaseStudyDetail() {
  const { id = "0" } = useParams();
  const navigate = useNavigate();
  const cs = caseStudyData[id] ?? caseStudyData["0"];

  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif", backgroundColor: "#f5f5f7", minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 768px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-outcomes { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Top nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "rgba(245,245,247,0.82)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 13, fontWeight: 500, color: "#0071e3",
              background: "none", border: "none", cursor: "pointer", padding: 0,
            }}
          >
            ← Back to portfolio
          </button>
          <span style={{ fontSize: 13, color: "#aeaeb2", fontWeight: 400 }}>Case Study</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#fff", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
            color: cs.tagColor,
            backgroundColor: cs.tagColor + "14",
            border: `0.5px solid ${cs.tagColor}30`,
            padding: "4px 12px", borderRadius: 980,
            display: "inline-block", marginBottom: 20,
          }}>{cs.tag}</span>

          <h1 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700,
            letterSpacing: "-1.5px", color: "#1d1d1f", lineHeight: 1.05,
            margin: "0 0 28px", maxWidth: 800,
          }}>{cs.title}</h1>

          <p style={{ fontSize: 18, color: "#6e6e73", lineHeight: 1.6, maxWidth: 680, margin: "0 0 40px" }}>
            {cs.overview}
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Role", value: cs.role },
              { label: "Timeline", value: cs.timeline },
              { label: "Company", value: cs.company },
            ].map((m) => (
              <div key={m.label}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.6, color: "#aeaeb2", margin: "0 0 4px", textTransform: "uppercase" }}>{m.label}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#1d1d1f", margin: 0 }}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section style={{ backgroundColor: "#0d1b3e", padding: "0", overflow: "hidden" }}>
        <ProjectedDeliveriesHero />
      </section>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>

        {/* Problem */}
        <section style={{ padding: "72px 0 0" }}>
          <SectionLabel text="The Problem" color={cs.tagColor} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, marginTop: 32, alignItems: "start" }} className="cs-grid">
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f", margin: 0, lineHeight: 1.1 }}>
                What we were solving for
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#6e6e73", margin: 0 }}>{cs.problem}</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Approach */}
        <section style={{ padding: "0 0 0" }}>
          <SectionLabel text="Approach" color={cs.tagColor} />
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f", margin: "24px 0 40px", lineHeight: 1.1 }}>
            How I worked through it
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cs.approach.map((step, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "40px 1fr", gap: 20, alignItems: "start",
                backgroundColor: "#fff", borderRadius: 16, padding: "24px 28px",
                border: "0.5px solid rgba(0,0,0,0.07)",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  backgroundColor: cs.tagColor + "14",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, color: cs.tagColor, flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6e6e73", margin: 0 }}>{step}</p>
                  {i === 0 && id === "0" && (
                    <img
                      src={procesoFlowImg}
                      alt="End-to-End Inventory Flow Process"
                      style={{ width: "100%", borderRadius: 10, marginTop: 20, display: "block" }}
                    />
                  )}
                  {id === "1" && i === 0 && (
                    <img src={wfDiscover} alt="CMS asset discovery in Content Lab"
                      style={{ width: "100%", borderRadius: 10, marginTop: 20, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                  )}
                  {id === "1" && i === 1 && (
                    <img src={wfGather} alt="Asset collection and categorization in Figma"
                      style={{ width: "100%", borderRadius: 10, marginTop: 20, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                  )}
                  {id === "1" && i === 2 && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 600, color: "#aeaeb2", letterSpacing: 0.5, margin: "0 0 8px" }}>BEFORE</p>
                        <img src={wfDesignBefore} alt="Before: scattered asset format"
                          style={{ width: "100%", borderRadius: 8, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 600, color: "#af52de", letterSpacing: 0.5, margin: "0 0 8px" }}>AFTER</p>
                        <img src={wfDesignAfter} alt="After: structured library table with CMS links"
                          style={{ width: "100%", borderRadius: 8, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                      </div>
                    </div>
                  )}
                  {id === "1" && i === 3 && (
                    <img src={wfImplement} alt="Published Figma library — team access"
                      style={{ width: "100%", borderRadius: 10, marginTop: 20, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                  )}
                  {id === "1" && i === 4 && (
                    <img src={wfShare} alt="Training presentation shared with design team"
                      style={{ width: "100%", borderRadius: 10, marginTop: 20, display: "block", border: "0.5px solid rgba(0,0,0,0.07)" }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Solution */}
        <section>
          <SectionLabel text="Solution" color={cs.tagColor} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, marginTop: 32, alignItems: "start" }} className="cs-grid">
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f", margin: 0, lineHeight: 1.1 }}>
                What we built
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#6e6e73", margin: "0 0 32px" }}>{cs.solution}</p>
              <ArchitectureDiagram />
            </div>
          </div>
        </section>

        <Divider />

        {/* Outcomes */}
        <section>
          <SectionLabel text="Outcomes" color={cs.tagColor} />
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f", margin: "24px 0 40px", lineHeight: 1.1 }}>
            Measurable impact
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="cs-outcomes">
            {cs.outcomes.map((o) => (
              <div key={o.label} style={{
                backgroundColor: "#fff", borderRadius: 20, padding: "32px 28px",
                border: "0.5px solid rgba(0,0,0,0.07)",
              }}>
                <p style={{ fontSize: 40, fontWeight: 700, color: cs.tagColor, margin: "0 0 8px", letterSpacing: "-1.5px" }}>{o.value}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", margin: "0 0 8px" }}>{o.label}</p>
                <p style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6, margin: 0 }}>{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Learnings */}
        <section style={{ paddingBottom: 80 }}>
          <SectionLabel text="Learnings" color={cs.tagColor} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, marginTop: 32 }} className="cs-grid">
            <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.8px", color: "#1d1d1f", margin: 0, lineHeight: 1.1 }}>
              What I took away
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "#6e6e73", margin: 0 }}>{cs.learnings}</p>
          </div>
        </section>

        {/* Back CTA */}
        <section style={{ borderTop: "0.5px solid rgba(0,0,0,0.08)", padding: "40px 0 80px", display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              fontSize: 15, fontWeight: 500, color: "#0071e3",
              backgroundColor: "transparent", border: "1px solid rgba(0,113,227,0.35)",
              padding: "13px 28px", borderRadius: 980, cursor: "pointer",
            }}
          >
            ← Back to portfolio
          </button>
        </section>

      </div>
    </div>
  );
}

function ProjectedDeliveriesHero() {
  const days = ["Sun 26", "Mon 27", "Tue 28", "Wed 29", "Thu 30", "Fri 01", "Sat 02"];
  const deliveries = [
    { day: 2, start: 7, dur: 1.5, type: "CEDI", label: "GT-0451 · CEDI", units: "26 tar." },
    { day: 3, start: 8, dur: 2.5, type: "CEDI", label: "GT-0451 · CEDI", units: "32 tar." },
    { day: 3, start: 9, dur: 1.5, type: "DSD",  label: "GT-0451 · DSD",  units: "14 tar." },
    { day: 3, start: 10, dur: 1, type: "Planta", label: "GT-0451 · Planta", units: "18 tar." },
    { day: 4, start: 7.5, dur: 1.5, type: "CEDI", label: "GT-0451 · CEDI", units: "25 tar." },
    { day: 5, start: 6, dur: 1, type: "CEDI", label: "GT-0451 · CEDI", units: "20 tar." },
  ];
  const typeColor: Record<string, string> = {
    CEDI: "#0071e3", DSD: "#af52de", Planta: "#ff9500",
  };
  const colW = 88;
  const rowH = 40;
  const startHour = 6;
  const totalHours = 6;
  const svgW = 7 * colW + 48;
  const svgH = totalHours * rowH + 56;

  return (
    <div style={{
      background: "linear-gradient(160deg,#0d1b3e 0%,#0a2250 55%,#0c1a3a 100%)",
      padding: "28px 32px 24px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 220px", gap: 20, alignItems: "start" }}>

        {/* Calendar */}
        <div>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.3px" }}>Projected Deliveries</span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: 0.3 }}>WEEK 19 · GT-0451 BARCENAS</span>
          </div>

          {/* Alert bar */}
          <div style={{
            backgroundColor: "rgba(255,59,48,0.12)", border: "0.5px solid rgba(255,59,48,0.3)",
            borderRadius: 8, padding: "6px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 6,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#ff3b30", flexShrink: 0 }} />
            <span style={{ fontSize: 9.5, color: "rgba(255,100,90,0.9)", lineHeight: 1.4 }}>
              Critical alert: GT-0451 has 3 overlapping deliveries Wed Apr 30 · Saturation risk notified to Transport.
            </span>
          </div>

          {/* SVG calendar grid */}
          <div style={{ overflowX: "auto" }}>
            <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: "block", minWidth: svgW }}>
              {/* Day headers */}
              {days.map((d, i) => (
                <g key={d}>
                  <rect x={48 + i * colW} y={0} width={colW} height={28}
                    fill={i === 4 ? "rgba(255,59,48,0.12)" : "rgba(255,255,255,0.03)"}
                    stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                  <text x={48 + i * colW + colW / 2} y={18} textAnchor="middle"
                    fill={i === 4 ? "#ff6b6b" : "rgba(255,255,255,0.5)"} fontSize="9.5" fontWeight={i === 4 ? "700" : "400"}>
                    {d}
                  </text>
                </g>
              ))}
              {/* Hour rows */}
              {Array.from({ length: totalHours }).map((_, h) => (
                <g key={h}>
                  <text x={42} y={28 + h * rowH + rowH / 2 + 4} textAnchor="end"
                    fill="rgba(255,255,255,0.2)" fontSize="8">{startHour + h}:00</text>
                  <line x1={48} y1={28 + h * rowH} x2={svgW} y2={28 + h * rowH}
                    stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                </g>
              ))}
              {/* Col dividers */}
              {days.map((_, i) => (
                <line key={i} x1={48 + i * colW} y1={28} x2={48 + i * colW} y2={svgH}
                  stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              ))}
              {/* Delivery blocks */}
              {deliveries.map((d, i) => {
                const x = 48 + d.day * colW + 4;
                const y = 28 + (d.start - startHour) * rowH + 2;
                const h = d.dur * rowH - 4;
                const c = typeColor[d.type];
                return (
                  <g key={i}>
                    <rect x={x} y={y} width={colW - 8} height={h} rx="5"
                      fill={c + "22"} stroke={c + "80"} strokeWidth="0.8" />
                    <text x={x + 5} y={y + 13} fill={c} fontSize="8" fontWeight="600">{d.label}</text>
                    <text x={x + 5} y={y + 24} fill={c + "aa"} fontSize="7.5">{d.units}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
            {Object.entries(typeColor).map(([k, c]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: c + "55", border: `1px solid ${c}80` }} />
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Capacity panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{
            backgroundColor: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: 14, padding: "16px 16px 14px",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 }}>CAPACITY VS LOAD</span>
              <span style={{ fontSize: 9, color: "#0071e3", backgroundColor: "rgba(0,113,227,0.12)", padding: "2px 7px", borderRadius: 4, fontWeight: 600 }}>GT-0451</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
              <div style={{ backgroundColor: "rgba(0,113,227,0.1)", borderRadius: 8, padding: "10px 10px 8px" }}>
                <p style={{ fontSize: 9, color: "#0071e3", margin: "0 0 2px", fontWeight: 600, letterSpacing: 0.4 }}>CAPACITY</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: "#0071e3", margin: 0, letterSpacing: "-0.8px" }}>345</p>
                <p style={{ fontSize: 8, color: "rgba(0,113,227,0.6)", margin: 0 }}>tarimas / day</p>
              </div>
              <div style={{ backgroundColor: "rgba(52,199,89,0.1)", borderRadius: 8, padding: "10px 10px 8px" }}>
                <p style={{ fontSize: 9, color: "#34c759", margin: "0 0 2px", fontWeight: 600, letterSpacing: 0.4 }}>PROJ. LOAD</p>
                <p style={{ fontSize: 22, fontWeight: 700, color: "#34c759", margin: 0, letterSpacing: "-0.8px" }}>387</p>
                <p style={{ fontSize: 8, color: "rgba(52,199,89,0.6)", margin: 0 }}>tarimas / day</p>
              </div>
            </div>
            {/* Utilization bar */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)" }}>% Utilization</span>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#ff3b30" }}>112%</span>
              </div>
              <div style={{ height: 5, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "#ff3b30", borderRadius: 3 }} />
              </div>
              <p style={{ fontSize: 8, color: "rgba(255,59,48,0.7)", margin: "4px 0 0" }}>Exceeded by 42 tarimas (peak week)</p>
            </div>
            {/* Mini bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 48 }}>
              {[
                { label: "Sat 26", cap: 80, load: 70 },
                { label: "Mon 27", cap: 80, load: 60 },
                { label: "Tue 28", cap: 80, load: 55 },
                { label: "Wed 29", cap: 80, load: 100 },
                { label: "Thu 30", cap: 80, load: 112 },
                { label: "Fri 01", cap: 80, load: 65 },
                { label: "Sat 02", cap: 80, load: 50 },
              ].map((b) => (
                <div key={b.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div style={{ width: "100%", display: "flex", gap: 1, alignItems: "flex-end", height: 36 }}>
                    <div style={{ flex: 1, height: `${(b.cap / 112) * 100}%`, backgroundColor: "rgba(0,113,227,0.4)", borderRadius: "2px 2px 0 0" }} />
                    <div style={{ flex: 1, height: `${(b.load / 112) * 100}%`, backgroundColor: b.load > 100 ? "rgba(255,59,48,0.7)" : "rgba(52,199,89,0.6)", borderRadius: "2px 2px 0 0" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: 1, backgroundColor: "rgba(0,113,227,0.4)" }} />
                <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)" }}>Capacity</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: 1, backgroundColor: "rgba(52,199,89,0.6)" }} />
                <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)" }}>Load</span>
              </div>
            </div>
          </div>

          {/* Exceeded weeks */}
          <div style={{
            backgroundColor: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: 12, padding: "12px 14px",
          }}>
            <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.35)", margin: "0 0 10px", letterSpacing: 0.5 }}>WEEKS EXCEEDED</p>
            {[{ w: "W1", v: 95 }, { w: "W2", v: 38 }].map((r) => (
              <div key={r.w} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", width: 16 }}>{r.w}</span>
                <div style={{ flex: 1, height: 8, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${r.v}%`, height: "100%", backgroundColor: "#ff3b30", borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: color }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, color: "#aeaeb2", textTransform: "uppercase" }}>{text}</span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 0.5, backgroundColor: "rgba(0,0,0,0.08)", margin: "56px 0" }} />;
}
