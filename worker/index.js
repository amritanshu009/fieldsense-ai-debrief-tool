const DEFAULT_VISITS = [
  {
    id: "VST-1042",
    location: "Mandya, Karnataka",
    date: "2026-06-18",
    program: "Skilling",
    stakeholders: "SHG women, local coordinator, trainer",
    sentiment: "Concerned",
    summary:
      "Women showed interest in tailoring training, but attendance was affected by wage-work timings, travel cost, and concern about delayed stipends from the previous batch.",
    notes:
      "Met 18 women from SHG group. Attendance was lower than expected because many had wage work. They were interested in tailoring training but worried about travel cost. Local coordinator said previous batch had delayed stipend issues.",
    findings: [
      "Strong interest in tailoring and income-linked skilling.",
      "Attendance depends on wage-work schedules.",
      "Trust can drop when stipend timelines are unclear.",
    ],
    blockers: ["Travel cost", "Wage-work timing", "Delayed stipend concern"],
    followUps: [
      "Discuss travel support options.",
      "Clarify stipend timeline before next mobilization.",
      "Schedule sessions after wage-work hours.",
    ],
    tags: ["skilling", "women", "attendance", "stipend", "travel"],
  },
  {
    id: "VST-1039",
    location: "Ranchi, Jharkhand",
    date: "2026-06-14",
    program: "Livelihood",
    stakeholders: "Farmers, producer group lead",
    sentiment: "Neutral",
    summary:
      "Farmers were open to adopting improved vegetable cultivation practices, but input access and market linkage clarity remain unresolved.",
    notes:
      "Farmers said they want to try vegetable cultivation this season. Seeds and inputs are not easily available locally. They asked who will buy the produce and at what price.",
    findings: [
      "Adoption intent is present.",
      "Input availability is a recurring operational constraint.",
      "Market assurance is needed before farmers commit.",
    ],
    blockers: ["Input availability", "Market linkage uncertainty"],
    followUps: [
      "Map nearby input vendors.",
      "Share buyer linkage plan with farmer group.",
      "Plan one demo plot visit.",
    ],
    tags: ["agriculture", "market-linkage", "inputs"],
  },
  {
    id: "VST-1036",
    location: "Barabanki, Uttar Pradesh",
    date: "2026-06-11",
    program: "Economic Inclusion",
    stakeholders: "Women entrepreneurs, field facilitator",
    sentiment: "Positive",
    summary:
      "Participants reported improved confidence in managing small shops, with digital payments and basic bookkeeping emerging as useful support areas.",
    notes:
      "Women entrepreneurs shared that business is slowly improving. Many are using UPI but still maintain rough paper records. They asked for simple bookkeeping help.",
    findings: [
      "Confidence is improving among micro-entrepreneurs.",
      "Digital payment adoption is visible.",
      "Bookkeeping support can improve business tracking.",
    ],
    blockers: ["Manual bookkeeping", "Low confidence in monthly profit calculation"],
    followUps: [
      "Run a simple bookkeeping session.",
      "Create a one-page monthly profit sheet.",
      "Check progress in next visit.",
    ],
    tags: ["entrepreneurship", "upi", "bookkeeping"],
  },
  {
    id: "VST-1033",
    location: "Chittoor, Andhra Pradesh",
    date: "2026-06-09",
    program: "Economic Inclusion",
    stakeholders: "Women entrepreneurs, village volunteer, field coordinator",
    sentiment: "Positive",
    summary:
      "Women entrepreneurs reported better sales confidence after adopting UPI, but bookkeeping and monthly profit tracking still need practical support.",
    notes:
      "Met 14 women entrepreneurs from the self-help group. Most participants were positive and said their small shops are improving after using UPI payments. However, many still maintain rough paper records and are not confident about calculating monthly profit.",
    findings: [
      "UPI usage is improving confidence among micro-entrepreneurs.",
      "Participants want simple tools for monthly profit tracking.",
      "Peer examples are helping other women adopt digital payments.",
    ],
    blockers: ["Manual bookkeeping", "Low confidence in monthly profit calculation"],
    followUps: [
      "Run a simple bookkeeping session.",
      "Share a one-page profit tracking template.",
      "Check UPI transaction records during the next visit.",
    ],
    tags: ["economic-inclusion", "women", "upi", "bookkeeping"],
  },
  {
    id: "VST-1030",
    location: "Tumakuru, Karnataka",
    date: "2026-06-07",
    program: "Skilling",
    stakeholders: "Youth trainees, trainer, placement coordinator",
    sentiment: "Concerned",
    summary:
      "Youth trainees value the course, but attendance is slipping because travel costs and unclear placement timelines are reducing motivation.",
    notes:
      "Met 22 youth trainees. They liked the training but said bus fare is difficult to manage daily. Several asked when placement interviews will happen. Trainer said attendance dropped after the second week because the placement timeline was unclear.",
    findings: [
      "Training interest is present but attendance is fragile.",
      "Travel cost is affecting daily participation.",
      "Placement clarity is important for continued motivation.",
    ],
    blockers: ["Travel cost", "Placement timeline uncertainty", "Attendance drop"],
    followUps: [
      "Share placement calendar with trainees.",
      "Explore travel support for low-income trainees.",
      "Track attendance for the next two weeks.",
    ],
    tags: ["skilling", "youth", "attendance", "travel", "placement"],
  },
  {
    id: "VST-1027",
    location: "Gaya, Bihar",
    date: "2026-06-05",
    program: "Livelihood",
    stakeholders: "Farmer group, input dealer, cluster coordinator",
    sentiment: "Neutral",
    summary:
      "Farmers are willing to try vegetable cultivation, but input access and buyer assurance remain unresolved before adoption can scale.",
    notes:
      "Farmers were open to vegetable cultivation but said seeds and fertilizer are not reliably available nearby. They also asked who will buy the produce and whether the price will be shared before sowing.",
    findings: [
      "Adoption intent is visible among farmers.",
      "Input availability is still a practical barrier.",
      "Market linkage clarity is needed before farmers commit.",
    ],
    blockers: ["Input availability", "Market linkage uncertainty"],
    followUps: [
      "List nearby input vendors with current stock.",
      "Share buyer linkage and price communication plan.",
      "Identify one demo farmer for early adoption.",
    ],
    tags: ["livelihood", "farmers", "inputs", "market-linkage"],
  },
  {
    id: "VST-1024",
    location: "Kolar, Karnataka",
    date: "2026-06-03",
    program: "Livelihood",
    stakeholders: "Women farmers, local input vendor, field coordinator",
    sentiment: "Concerned",
    summary:
      "Women farmers are interested in crop diversification, but delayed input delivery and uncertainty around market buyers are creating hesitation.",
    notes:
      "Met 16 women farmers. They want to diversify crops but said input delivery was delayed last season. The local vendor could not confirm seed availability. Farmers also asked whether a buyer will be confirmed before harvest.",
    findings: [
      "Crop diversification interest is present.",
      "Past input delays have reduced confidence.",
      "Buyer confirmation is important before farmers invest.",
    ],
    blockers: ["Input availability", "Market linkage uncertainty", "Delayed input delivery"],
    followUps: [
      "Confirm seed availability with vendors.",
      "Set a buyer discussion before sowing.",
      "Track input delivery date commitments.",
    ],
    tags: ["livelihood", "women", "inputs", "market-linkage"],
  },
  {
    id: "VST-1021",
    location: "Dharwad, Karnataka",
    date: "2026-06-01",
    program: "Skilling",
    stakeholders: "SHG members, trainer, block coordinator",
    sentiment: "Concerned",
    summary:
      "SHG members want to continue tailoring training, but delayed stipends and session timing conflicts are repeatedly affecting trust and attendance.",
    notes:
      "Met 20 SHG members. Participants want to continue tailoring training but said the previous stipend was delayed. Some women cannot attend morning sessions because of wage work and household responsibilities.",
    findings: [
      "Training demand remains strong among SHG members.",
      "Delayed stipend communication is affecting trust.",
      "Morning timing clashes with wage work and household duties.",
    ],
    blockers: ["Delayed stipend concern", "Wage-work timing", "Attendance drop"],
    followUps: [
      "Share stipend status before the next session.",
      "Pilot an afternoon training slot.",
      "Ask block coordinator to call absentees before next class.",
    ],
    tags: ["skilling", "women", "stipend", "attendance", "timing"],
  },
];

const VISIT_COLUMNS = [
  "id",
  "location",
  "date",
  "program",
  "stakeholders",
  "sentiment",
  "summary",
  "notes",
  "findings",
  "blockers",
  "followUps",
  "tags",
  "media",
  "createdAt",
];

const DEFAULT_MEDIA_BUCKET = "visit-media";
const MAX_MEDIA_FILES = 5;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_VIDEO_BYTES = 50 * 1024 * 1024;
const MAX_AUDIO_BYTES = 25 * 1024 * 1024;
const EMBEDDING_DIMENSIONS = 768;
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";
const DEFAULT_GEMINI_EMBEDDING_MODEL = "gemini-embedding-2";
const SESSION_COOKIE = "fs_session";
const ROLES = ["field_staff", "manager", "admin"];

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FieldSense - Field Visit Intelligence</title>
    <style>
      :root {
        --bg: #faf7f3;
        --panel: #ffffff;
        --ink: #2f2723;
        --muted: #776a64;
        --line: #eadfd9;
        --primary: #6f3f31;
        --primary-dark: #43271f;
        --primary-soft: #efe4df;
        --accent: #a56a58;
        --warning: #b45309;
        --warning-soft: #fff3d6;
        --success: #68744f;
        --success-soft: #e8ede0;
        --neutral-soft: #efe4df;
        --danger-soft: #f7dfd3;
        --danger: #9a4f34;
        --sand: #f5eee9;
        --taupe: #c7ada4;
        --shadow: 0 20px 54px rgba(67, 39, 31, 0.11);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at 72% 8%, rgba(111, 63, 49, 0.07), transparent 28rem),
          linear-gradient(180deg, #ffffff 0%, var(--bg) 56%, #f4ece6 100%);
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      button,
      input,
      textarea,
      select {
        font: inherit;
      }

      button {
        cursor: pointer;
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-height: 68px;
        padding: 0.65rem clamp(1rem, 5vw, 4rem);
        background: var(--primary);
        color: #fff8f2;
        box-shadow: 0 6px 20px rgba(67, 39, 31, 0.14);
      }

      .topbar-actions {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      .brand-mark {
        display: grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border: 1px solid rgba(255, 248, 242, 0.36);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.11);
        color: #fff8f2;
        font-weight: 900;
      }

      .brand-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 850;
        color: #fff8f2;
      }

      .brand-subtitle {
        margin: 0.08rem 0 0;
        color: rgba(255, 248, 242, 0.75);
        font-size: 0.78rem;
      }

      .api-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        border: 1px solid rgba(255, 248, 242, 0.26);
        border-radius: 999px;
        padding: 0.4rem 0.65rem;
        background: rgba(255, 255, 255, 0.12);
        color: #fff8f2;
        font-size: 0.78rem;
        font-weight: 750;
      }

      .api-chip,
      .drawer-toggle,
      .btn,
      .media-link,
      .upload-zone,
      .tag {
        transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease, color 160ms ease;
      }

      .api-chip strong {
        color: #ffffff;
      }

      .api-chip:hover,
      .drawer-toggle:hover {
        transform: translateY(-1px);
        border-color: rgba(255, 248, 242, 0.48);
        background: rgba(255, 255, 255, 0.17);
      }

      .layout {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 1.2rem;
        width: min(1180px, 100%);
        margin: 0 auto;
        padding: 1rem clamp(1rem, 4vw, 2.5rem) 2.5rem;
      }

      .sidebar {
        position: fixed;
        top: 68px;
        right: 0;
        z-index: 55;
        width: min(360px, 86vw);
        height: calc(100vh - 68px);
        max-height: calc(100vh - 68px);
        overflow-y: auto;
        border: 0;
        border-left: 0;
        border-radius: 0;
        padding: 1.4rem;
        background:
          linear-gradient(270deg, rgba(67, 39, 31, 0.92), rgba(111, 63, 49, 0.72)),
          rgba(255, 253, 249, 0.95);
        box-shadow: var(--shadow);
        transform: translateX(105%);
        transition: transform 220ms ease;
      }

      body.drawer-open .sidebar {
        transform: translateX(0);
      }

      .drawer-toggle {
        display: inline-grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border: 1px solid rgba(255, 248, 242, 0.26);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 900;
        transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
      }

      .drawer-overlay {
        position: fixed;
        inset: 68px 0 0;
        z-index: 35;
        display: none;
        background: rgba(47, 39, 35, 0.28);
      }

      body.drawer-open .drawer-overlay {
        display: block;
      }

      .drawer-close {
        display: none;
        background: rgba(255, 255, 255, 0.12);
        color: #fff8f2;
      }

      .nav-button {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0.7rem;
        margin: 0.18rem 0;
        border: 0;
        border-radius: 8px;
        padding: 0.82rem 0.88rem;
        background: transparent;
        color: rgba(255, 248, 242, 0.82);
        text-align: left;
        transition: transform 160ms ease, background 160ms ease, color 160ms ease;
      }

      .nav-button:hover,
      .nav-button.active {
        transform: translateX(-5px);
        background: rgba(255, 255, 255, 0.14);
        color: #ffffff;
      }

      .nav-icon {
        display: grid;
        width: 32px;
        height: 32px;
        place-items: center;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.15);
        font-weight: 850;
        transition: transform 160ms ease, background 160ms ease;
      }

      .nav-button:hover .nav-icon,
      .nav-button.active .nav-icon {
        transform: scale(1.07);
        background: rgba(255, 255, 255, 0.22);
      }

      .logout-icon svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
      }

      .sidebar-note {
        margin-top: 0.8rem;
        border-radius: 8px;
        padding: 0.95rem;
        background: rgba(47, 39, 35, 0.55);
        color: #f7fffd;
      }

      .sidebar-note p {
        margin: 0.4rem 0 0;
        color: rgba(247, 255, 253, 0.76);
        font-size: 0.84rem;
        line-height: 1.45;
      }

      .sidebar-links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        margin-top: 0.8rem;
      }

      .sidebar-links a {
        border: 1px solid rgba(255, 248, 242, 0.26);
        border-radius: 8px;
        padding: 0.5rem 0.62rem;
        color: #fff8f2;
        font-size: 0.78rem;
        font-weight: 850;
        text-decoration: none;
      }

      .main {
        min-width: 0;
      }

      .hero {
        display: none;
      }

      .page-header {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 1rem;
        margin: 0 0 0.85rem;
      }

      .page-header h1 {
        margin: 0;
        color: var(--primary-dark);
        font-size: 1.35rem;
        line-height: 1.2;
      }

      .page-header p {
        margin: 0.24rem 0 0;
        color: var(--muted);
        font-size: 0.88rem;
      }

      .hero-panel {
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: clamp(1.2rem, 3vw, 1.8rem);
        background:
          linear-gradient(135deg, rgba(239, 228, 223, 0.86), rgba(255, 253, 249, 0.96)),
          radial-gradient(circle at 90% 18%, rgba(111, 63, 49, 0.10), transparent 18rem);
        box-shadow: var(--shadow);
        transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
      }

      .hero-panel:hover {
        transform: translateY(-2px);
        border-color: rgba(111, 63, 49, 0.22);
        box-shadow: 0 24px 64px rgba(67, 39, 31, 0.13);
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        margin: 0 0 0.75rem;
        border-radius: 999px;
        padding: 0.42rem 0.7rem;
        background: #ffffff;
        color: var(--primary-dark);
        font-size: 0.76rem;
        font-weight: 850;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .hero h1 {
        max-width: 760px;
        margin: 0;
        color: var(--primary-dark);
        font-size: clamp(2rem, 4vw, 3.6rem);
        line-height: 1.04;
      }

      .hero p {
        max-width: 760px;
        margin: 0.95rem 0 0;
        color: var(--muted);
        line-height: 1.65;
      }

      body.auth-screen {
        background:
          radial-gradient(circle at 16% 16%, rgba(165, 106, 88, 0.13), transparent 22rem),
          radial-gradient(circle at 88% 16%, rgba(104, 116, 79, 0.11), transparent 20rem),
          linear-gradient(180deg, #fffdf9 0%, #f8f0eb 100%);
      }

      body.auth-screen .hero {
        display: none;
      }

      body.auth-screen #drawerToggle {
        display: none;
      }

      body.auth-screen .layout {
        display: flex;
        min-height: calc(100vh - 68px);
        align-items: center;
        justify-content: center;
        padding-top: clamp(1.2rem, 4vw, 3rem);
      }

      .login-shell {
        display: grid;
        grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.78fr);
        width: min(1040px, 100%);
        overflow: hidden;
        border: 1px solid rgba(234, 223, 217, 0.95);
        border-radius: 8px;
        background: rgba(255, 253, 249, 0.94);
        box-shadow: 0 26px 70px rgba(67, 39, 31, 0.13);
      }

      .login-story {
        position: relative;
        min-height: 520px;
        padding: clamp(1.4rem, 4vw, 2.4rem);
        background:
          linear-gradient(135deg, rgba(67, 39, 31, 0.95), rgba(111, 63, 49, 0.88)),
          radial-gradient(circle at 88% 18%, rgba(255, 248, 242, 0.18), transparent 16rem);
        color: #fff8f2;
      }

      .login-story::after {
        content: "";
        position: absolute;
        right: -4rem;
        bottom: -5rem;
        width: 16rem;
        height: 16rem;
        border: 1px solid rgba(255, 248, 242, 0.14);
        border-radius: 50%;
      }

      .login-mark {
        display: grid;
        width: 58px;
        height: 58px;
        place-items: center;
        border: 1px solid rgba(255, 248, 242, 0.34);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.10);
        font-weight: 900;
        font-size: 1.1rem;
      }

      .login-story .eyebrow {
        margin-top: 2rem;
        background: rgba(255, 248, 242, 0.12);
        color: #fff8f2;
      }

      .login-story h1 {
        max-width: 560px;
        margin: 0.8rem 0 0;
        font-size: clamp(2rem, 4vw, 3.25rem);
        line-height: 1.02;
      }

      .login-story p {
        max-width: 520px;
        margin: 1rem 0 0;
        color: rgba(255, 248, 242, 0.76);
        line-height: 1.65;
      }

      .login-card {
        display: flex;
        min-height: 520px;
        flex-direction: column;
        justify-content: center;
        padding: clamp(1.4rem, 4vw, 2.25rem);
        background: #fffdf9;
      }

      .login-card h2 {
        margin: 0;
        color: var(--primary-dark);
        font-size: 1.75rem;
      }

      .login-card > p {
        margin: 0.45rem 0 1.2rem;
        color: var(--muted);
        line-height: 1.55;
      }

      .login-form {
        display: grid;
        gap: 0.9rem;
      }

      .login-form .input {
        height: 52px;
        background: #ffffff;
      }

      .login-form .btn {
        width: 100%;
        min-height: 50px;
        margin-top: 0.2rem;
      }

      .system-card {
        display: none;
      }

      .system-card h2 {
        margin: 0;
        font-size: 1rem;
      }

      .system-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.8rem;
        align-items: center;
        border-top: 1px solid var(--line);
        padding: 0.78rem 0;
      }

      .system-row:first-of-type {
        margin-top: 0.8rem;
      }

      .system-row span {
        color: var(--muted);
        font-size: 0.86rem;
      }

      .ok {
        color: var(--success);
        font-weight: 850;
      }

      .warn {
        color: var(--warning);
        font-weight: 850;
      }

      .view {
        display: none;
      }

      .view.active {
        display: block;
        animation: viewIn 220ms ease both;
      }

      .grid {
        display: grid;
        gap: 0.85rem;
      }

      .metrics {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .card {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: rgba(255, 253, 249, 0.92);
        box-shadow: 0 16px 40px rgba(67, 39, 31, 0.08);
        transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
      }

      .metric-card:hover,
      .section-card:hover,
      .media-card:hover {
        transform: translateY(-2px);
        border-color: rgba(111, 63, 49, 0.18);
        box-shadow: 0 20px 48px rgba(67, 39, 31, 0.11);
      }

      .metric-card {
        padding: 0.85rem;
      }

      .metric-label {
        margin: 0;
        color: var(--muted);
        font-size: 0.84rem;
      }

      .metric-value {
        margin: 0.28rem 0 0;
        color: var(--primary-dark);
        font-size: 1.6rem;
        font-weight: 900;
      }

      .metric-note {
        margin: 0.25rem 0 0;
        color: var(--muted);
        font-size: 0.82rem;
      }

      .content-grid {
        grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
        margin-top: 0.85rem;
      }

      .detail-grid {
        grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
      }

      .section-card {
        padding: 0.95rem;
      }

      .section-head {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.75rem;
      }

      .section-head h2 {
        margin: 0;
        color: var(--primary-dark);
        font-size: 1rem;
      }

      .section-head p {
        margin: 0.23rem 0 0;
        color: var(--muted);
        font-size: 0.86rem;
      }

      .chart-list {
        display: grid;
        gap: 0.7rem;
      }

      .bar-row {
        display: grid;
        grid-template-columns: 130px 1fr 40px;
        align-items: center;
        gap: 0.75rem;
        color: var(--muted);
        font-size: 0.9rem;
        transition: transform 160ms ease, color 160ms ease;
      }

      .bar-row:hover {
        transform: translateX(4px);
        color: var(--primary-dark);
      }

      .bar-shell {
        overflow: hidden;
        height: 10px;
        border-radius: 999px;
        background: var(--primary-soft);
      }

      .bar-fill {
        height: 100%;
        border-radius: inherit;
        background: var(--primary);
        transform-origin: left center;
        animation: barGrow 520ms ease both;
      }

      .bar-fill.alt {
        background: var(--taupe);
      }

      .visit-list {
        display: grid;
        gap: 0.7rem;
      }

      .visit-card {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.8rem;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 0.8rem;
        background: #ffffff;
        transition: 160ms ease;
      }

      .visit-card:hover {
        transform: translateY(-3px);
        border-color: rgba(111, 63, 49, 0.24);
        box-shadow: 0 18px 36px rgba(67, 39, 31, 0.12);
      }

      .visit-card h3 {
        margin: 0;
        color: var(--primary-dark);
        font-size: 0.98rem;
      }

      .visit-card p {
        margin: 0.35rem 0 0;
        color: var(--muted);
        font-size: 0.84rem;
        line-height: 1.45;
      }

      .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.38rem;
        margin-top: 0.65rem;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        padding: 0.3rem 0.52rem;
        background: var(--primary-soft);
        color: var(--primary-dark);
        font-size: 0.74rem;
        font-weight: 800;
      }

      .tag:hover {
        transform: translateY(-1px);
        background: #e6d7d0;
      }

      .status {
        align-self: start;
        border-radius: 999px;
        padding: 0.32rem 0.6rem;
        font-size: 0.74rem;
        font-weight: 850;
      }

      .status.positive {
        background: var(--success-soft);
        color: var(--success);
      }

      .status.neutral {
        background: var(--neutral-soft);
        color: var(--primary);
      }

      .status.concerned {
        background: var(--danger-soft);
        color: var(--danger);
      }

      .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 0.7rem;
        margin-bottom: 1rem;
      }

      .input,
      .textarea,
      .select {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 8px;
        outline: none;
        background: #ffffff;
        color: var(--ink);
        transition: 160ms ease;
      }

      .input,
      .select {
        height: 42px;
        padding: 0 0.78rem;
      }

      .textarea {
        min-height: 132px;
        resize: vertical;
        padding: 0.85rem;
        line-height: 1.55;
      }

      .input:focus,
      .textarea:focus,
      .select:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(111, 63, 49, 0.16);
      }

      .form-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.7rem;
      }

      .field {
        display: grid;
        gap: 0.36rem;
      }

      .field.full {
        grid-column: 1 / -1;
      }

      label {
        color: var(--primary-dark);
        font-size: 0.82rem;
        font-weight: 850;
      }

      .field-help {
        margin: 0;
        color: var(--muted);
        font-size: 0.78rem;
        line-height: 1.45;
      }

      .file-input {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
      }

      .upload-zone {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        min-height: 64px;
        border: 1px dashed var(--taupe);
        border-radius: 8px;
        padding: 0.85rem 0.95rem;
        background: rgba(239, 228, 223, 0.35);
        cursor: pointer;
      }

      .upload-zone:hover,
      .file-input:focus + .upload-zone {
        transform: translateY(-1px);
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(111, 63, 49, 0.12);
      }

      .upload-zone strong,
      .upload-zone span {
        display: block;
      }

      .upload-zone strong {
        color: var(--primary-dark);
        font-size: 0.9rem;
      }

      .upload-zone span {
        color: var(--muted);
        font-size: 0.78rem;
        line-height: 1.45;
      }

      .upload-action {
        flex: 0 0 auto;
        border-radius: 999px;
        padding: 0.44rem 0.68rem;
        background: var(--primary-soft);
        color: var(--primary-dark);
        font-size: 0.76rem;
        font-weight: 850;
      }

      .media-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.7rem;
        margin-top: 0.75rem;
      }

      .media-card {
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #ffffff;
      }

      .media-card img,
      .media-card video {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        background: var(--primary-soft);
      }

      .media-card audio {
        display: block;
        width: calc(100% - 1rem);
        margin: 1rem 0.5rem 0.4rem;
      }

      .media-meta {
        padding: 0.62rem;
      }

      .media-meta strong,
      .media-meta span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .media-meta strong {
        color: var(--primary-dark);
        font-size: 0.82rem;
      }

      .media-meta span {
        margin-top: 0.18rem;
        color: var(--muted);
        font-size: 0.74rem;
      }

      .media-link {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        margin-top: 0.5rem;
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 0.35rem 0.62rem;
        background: var(--primary-soft);
        color: var(--primary-dark);
        font-size: 0.74rem;
        font-weight: 850;
        text-decoration: none;
      }

      .media-link:hover {
        transform: translateY(-1px);
        background: var(--primary);
        color: #ffffff;
      }

      .button-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
        margin-top: 0.85rem;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
        min-height: 40px;
        border: 0;
        border-radius: 8px;
        padding: 0.64rem 0.85rem;
        font-weight: 850;
      }

      .btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 28px rgba(67, 39, 31, 0.12);
      }

      .btn:active,
      .drawer-toggle:active,
      .nav-button:active {
        transform: translateY(0) scale(0.98);
      }

      .btn.primary {
        background: var(--primary);
        color: #ffffff;
        box-shadow: 0 14px 28px rgba(111, 63, 49, 0.2);
      }

      .btn.secondary {
        border: 1px solid var(--line);
        background: #ffffff;
        color: var(--primary-dark);
      }

      .btn.danger {
        border: 1px solid #e7c6ba;
        background: #fff7f3;
        color: var(--danger);
      }

      .btn:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }

      .btn:disabled:hover {
        transform: none;
        box-shadow: none;
      }

      .ai-panel {
        position: sticky;
        top: 78px;
        align-self: start;
      }

      .debrief-block {
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 0.75rem;
        background: #fffaf6;
        transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
      }

      .debrief-block:hover {
        transform: translateY(-1px);
        border-color: rgba(111, 63, 49, 0.18);
        background: #fffdf9;
      }

      .debrief-block + .debrief-block {
        margin-top: 0.7rem;
      }

      .insight-grid .debrief-block + .debrief-block {
        margin-top: 0;
      }

      .debrief-block h3 {
        margin: 0 0 0.45rem;
        color: var(--primary-dark);
        font-size: 0.92rem;
      }

      .debrief-block p,
      .debrief-block li {
        color: var(--muted);
        font-size: 0.88rem;
        line-height: 1.55;
      }

      .debrief-block p {
        margin: 0;
      }

      .debrief-block ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      .empty-state {
        border: 1px dashed var(--taupe);
        border-radius: 8px;
        padding: 1rem;
        background: rgba(239, 228, 223, 0.45);
        color: var(--muted);
        font-size: 0.9rem;
        line-height: 1.5;
      }

      .insight-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
      }

      .mobile-tabs {
        display: none;
      }

      .toast {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 30;
        max-width: 360px;
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 0.85rem 0.95rem;
        background: var(--primary-dark);
        color: #ffffff;
        box-shadow: var(--shadow);
        transform: translateY(140%);
        transition: 180ms ease;
      }

      .toast.show {
        transform: translateY(0);
      }

      @keyframes viewIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes barGrow {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 1ms !important;
          scroll-behavior: auto !important;
          transition-duration: 1ms !important;
        }
      }

      @media (max-width: 1050px) {
        .hero,
        .content-grid,
        .detail-grid,
        .login-shell {
          grid-template-columns: 1fr;
        }

        .login-story,
        .login-card {
          min-height: auto;
        }

        .ai-panel {
          position: static;
        }
      }

      @media (max-width: 760px) {
        .api-chip {
          display: none;
        }

        .metrics,
        .form-grid,
        .insight-grid {
          grid-template-columns: 1fr;
        }

        .bar-row {
          grid-template-columns: 96px 1fr 34px;
        }

        .hero h1 {
          font-size: 2.15rem;
        }

        body.auth-screen .layout {
          align-items: stretch;
          padding-top: 1rem;
        }

        .login-story,
        .login-card {
          padding: 1.2rem;
        }

        .login-story h1 {
          font-size: 2rem;
        }

      }
    </style>
  </head>
  <body>
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">FS</div>
        <div>
          <p class="brand-title">FieldSense</p>
          <p class="brand-subtitle">Field Visit Debrief Tool</p>
        </div>
      </div>
      <div class="topbar-actions">
        <span id="apiStatusChip" class="api-chip"><strong>Checking</strong></span>
        <button id="drawerToggle" class="drawer-toggle" type="button" aria-label="Open options" aria-controls="sidebarDrawer" aria-expanded="false">☰</button>
      </div>
    </header>

    <div id="drawerOverlay" class="drawer-overlay"></div>

    <div class="layout">
      <aside id="sidebarDrawer" class="sidebar" aria-label="Main navigation">
        <nav id="sidebarNav"></nav>
      </aside>

      <main class="main">
        <section class="hero">
          <div class="hero-panel">
            <span class="eyebrow">Field intelligence workspace</span>
            <h1>Capture visits, generate AI debriefs, and track program risks.</h1>
            <p>FieldSense helps field teams turn notes, media, and observations into structured debriefs, recurring issue patterns, and manager-ready follow-ups.</p>
          </div>
        </section>

        <section id="login" class="view active"></section>
        <section id="dashboard" class="view"></section>
        <section id="newVisit" class="view"></section>
        <section id="history" class="view"></section>
        <section id="rag" class="view"></section>
        <section id="details" class="view"></section>
      </main>
    </div>

    <div id="toast" class="toast" role="status" aria-live="polite"></div>

    <script>
      var visits = [];
      var activeView = "login";
      var selectedVisitId = null;
      var apiInfo = { storage: "unknown", ai: "unknown" };
      var currentUser = null;
      var loginBusy = false;
      var historyFilters = {
        query: "",
        program: "All programs",
        sentiment: "All sentiment"
      };
      var generatedDebrief = emptyDebrief();
      var generatedDebriefFormKey = "";
      var selectedMedia = [];
      var editingVisitId = null;
      var ragQuestion = "";
      var ragResult = null;
      var ragBusy = false;

      var allNavItems = [
        { id: "dashboard", label: "Dashboard", roles: ["manager", "admin"] },
        { id: "newVisit", label: "New Visit", roles: ["field_staff", "admin"] },
        { id: "history", label: "Visit History", roles: ["field_staff", "manager", "admin"] },
        { id: "rag", label: "Ask AI", roles: ["manager", "admin"] },
        { id: "details", label: "Visit Details", roles: ["field_staff", "manager", "admin"] }
      ];

      function hasRole(allowed) {
        return Boolean(currentUser && allowed.indexOf(currentUser.role) !== -1);
      }

      function visibleNavItems() {
        if (!currentUser) return [];
        return allNavItems.filter(function(item) {
          return hasRole(item.roles);
        });
      }

      function defaultViewForRole() {
        if (hasRole(["manager", "admin"])) return "dashboard";
        if (hasRole(["field_staff"])) return "newVisit";
        return "login";
      }

      function emptyDebrief() {
        return {
          summary: "Generate a debrief from field notes to see the structured output here.",
          findings: ["The debrief will extract findings from the visit notes."],
          blockers: ["The debrief will detect operational blockers."],
          sentiment: "Neutral",
          followUps: ["The debrief will suggest practical follow-up actions."],
          tags: ["field-notes"]
        };
      }

      function escapeHtml(value) {
        return String(value == null ? "" : value)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      async function api(path, options) {
        options = options || {};
        var isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
        var headers = isFormData ? {} : { "content-type": "application/json" };
        var response = await fetch(path, Object.assign({
          credentials: "same-origin",
          headers: Object.assign(headers, options.headers || {})
        }, options));
        var text = await response.text();
        var data = text ? JSON.parse(text) : null;
        if (!response.ok) {
          if (response.status === 401) {
            currentUser = null;
            activeView = "login";
            renderAll();
          }
          throw new Error(data && data.error ? data.error : "Request failed");
        }
        return data;
      }

      function showToast(message) {
        var toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.add("show");
        window.setTimeout(function() {
          toast.classList.remove("show");
        }, 2600);
      }

      function updateSystemStatus(info) {
        apiInfo = info || apiInfo;
        document.getElementById("apiStatusChip").innerHTML = "<strong>Online</strong>";
        var restStatus = document.getElementById("restStatus");
        var dbStatus = document.getElementById("dbStatus");
        var aiStatus = document.getElementById("aiStatus");
        if (restStatus) {
          restStatus.textContent = "online";
          restStatus.className = "ok";
        }
        if (dbStatus) {
          dbStatus.textContent = apiInfo.storage === "supabase-postgresql" ? "PostgreSQL connected" : apiInfo.storage === "d1" ? "D1 fallback" : "sample fallback";
          dbStatus.className = apiInfo.storage === "supabase-postgresql" ? "ok" : "warn";
        }
        if (aiStatus) {
          aiStatus.textContent = apiInfo.ai === "gemini" || apiInfo.ai === "openai" ? "ready" : "limited";
          aiStatus.className = apiInfo.ai === "gemini" || apiInfo.ai === "openai" ? "ok" : "warn";
        }
      }

      function setApiOffline(error) {
        document.getElementById("apiStatusChip").innerHTML = "<strong>Offline</strong>";
        var restStatus = document.getElementById("restStatus");
        if (restStatus) {
          restStatus.textContent = "offline";
          restStatus.className = "warn";
        }
        showToast(error.message || "Could not reach the API.");
      }

      async function loadVisits() {
        var health = await api("/api/health");
        updateSystemStatus(health);
        var session = await api("/api/auth/me");
        currentUser = session.user || null;
        if (!currentUser) {
          activeView = "login";
          visits = [];
          return;
        }
        var payload = await api("/api/visits");
        visits = payload.visits || [];
        selectedVisitId = selectedVisitId || (visits[0] && visits[0].id);
        activeView = activeView === "login" ? defaultViewForRole() : activeView;
      }

      function getSelectedVisit() {
        return visits.find(function(visit) {
          return visit.id === selectedVisitId;
        }) || visits[0] || null;
      }

      function countBy(items, getter) {
        return items.reduce(function(acc, item) {
          var key = getter(item);
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {});
      }

      function blockerCounts() {
        var counts = {};
        visits.forEach(function(visit) {
          (visit.blockers || []).forEach(function(blocker) {
            counts[blocker] = (counts[blocker] || 0) + 1;
          });
        });
        return counts;
      }

      function sortedEntries(counts) {
        return Object.keys(counts)
          .map(function(key) { return { label: key, count: counts[key] }; })
          .sort(function(a, b) { return b.count - a.count || a.label.localeCompare(b.label); });
      }

      function getManagerInsights() {
        var blockers = sortedEntries(blockerCounts());
        var programs = sortedEntries(countBy(visits, function(visit) { return visit.program || "Unassigned"; }));
        var concernVisits = visits.filter(function(visit) { return visit.sentiment === "Concerned"; });
        var topBlocker = blockers[0];
        var secondBlocker = blockers[1];
        var topProgram = programs[0];
        var insights = [];

        if (topBlocker) {
          insights.push(topBlocker.label + " appears in " + topBlocker.count + " visit" + (topBlocker.count === 1 ? "" : "s") + ".");
        }

        if (secondBlocker && secondBlocker.count > 1) {
          insights.push(secondBlocker.label + " is also recurring across " + secondBlocker.count + " visits.");
        }

        if (concernVisits.length) {
          insights.push(concernVisits.length + " visit" + (concernVisits.length === 1 ? "" : "s") + " need manager attention before the next field cycle.");
        }

        if (topProgram) {
          insights.push(topProgram.label + " has the highest field activity with " + topProgram.count + " visit" + (topProgram.count === 1 ? "" : "s") + ".");
        }

        if (!insights.length) {
          insights.push("No recurring issue is visible yet. Add more visits to build stronger field intelligence.");
        }

        var recommendation = "Review the top blocker with the program lead and assign owners for the next follow-up cycle.";
        if (topBlocker) {
          var key = topBlocker.label.toLowerCase();
          if (key.includes("stipend") || key.includes("payment")) {
            recommendation = "Publish a clear stipend/payment timeline before the next mobilization.";
          } else if (key.includes("travel") || key.includes("transport")) {
            recommendation = "Test travel support or closer session locations for affected participants.";
          } else if (key.includes("market")) {
            recommendation = "Share buyer linkage and expected price clarity before asking farmers to commit.";
          } else if (key.includes("input")) {
            recommendation = "Confirm input vendor stock and delivery dates before the next farmer meeting.";
          } else if (key.includes("bookkeeping") || key.includes("profit")) {
            recommendation = "Run a practical bookkeeping session and provide a one-page monthly profit sheet.";
          } else if (key.includes("attendance") || key.includes("timing")) {
            recommendation = "Pilot a timing slot that does not clash with wage-work or household schedules.";
          }
        }

        return {
          insights: insights.slice(0, 4),
          recommendation: recommendation,
        };
      }

      function statusClass(sentiment) {
        var value = String(sentiment || "").toLowerCase();
        if (value === "positive") return "positive";
        if (value === "concerned") return "concerned";
        return "neutral";
      }

      function unique(items) {
        return Array.from(new Set(items.filter(Boolean)));
      }

      function formatFileSize(bytes) {
        var size = Number(bytes || 0);
        if (size >= 1024 * 1024) return (size / (1024 * 1024)).toFixed(1) + " MB";
        if (size >= 1024) return Math.round(size / 1024) + " KB";
        return size + " B";
      }

      function validateMediaFile(file) {
        var type = file.type || "";
        var isPhoto = type.startsWith("image/");
        var isVideo = type.startsWith("video/");
        var isAudio = type.startsWith("audio/");
        if (!isPhoto && !isVideo && !isAudio) return "Only photo, video, and voice memo files are supported.";
        if (isPhoto && file.size > 5 * 1024 * 1024) return "Photos must be 5 MB or smaller.";
        if (isVideo && file.size > 50 * 1024 * 1024) return "Videos must be 50 MB or smaller.";
        if (isAudio && file.size > 25 * 1024 * 1024) return "Voice memos must be 25 MB or smaller.";
        return "";
      }

      function clearSelectedMedia() {
        selectedMedia.forEach(function(item) {
          if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
        });
        selectedMedia = [];
      }

      function renderSelectedMediaPreview() {
        var target = document.getElementById("mediaPreview");
        if (!target) return;
        if (!selectedMedia.length) {
          target.innerHTML = '<div class="empty-state">No photo, video, or voice memo selected yet.</div>';
          return;
        }
        target.innerHTML = selectedMedia.map(function(item) {
          var fileType = item.file.type || "";
          return mediaCard({
            mediaType: fileType.startsWith("video/") ? "video" : fileType.startsWith("audio/") ? "audio" : "photo",
            mimeType: fileType,
            fileName: item.file.name,
            fileSize: item.file.size,
            url: item.previewUrl
          });
        }).join("");
      }

      function setSelectedMedia(files) {
        clearSelectedMedia();
        var accepted = [];
        Array.from(files || []).slice(0, 5).forEach(function(file) {
          var issue = validateMediaFile(file);
          if (issue) {
            showToast(file.name + ": " + issue);
            return;
          }
          accepted.push({ file: file, previewUrl: URL.createObjectURL(file) });
        });
        selectedMedia = accepted;
        renderSelectedMediaPreview();
      }

      function mediaCard(media) {
        var isVideo = media.mediaType === "video" || String(media.mimeType || "").startsWith("video/");
        var isAudio = media.mediaType === "audio" || String(media.mimeType || "").startsWith("audio/");
        var mediaLabel = isVideo ? "Video memo" : isAudio ? "Voice memo" : "Photo";
        var preview = isVideo
          ? '<video controls preload="metadata" src="' + escapeHtml(media.url) + '"></video>'
          : isAudio
            ? '<audio controls preload="metadata" src="' + escapeHtml(media.url) + '"></audio>'
            : '<img alt="' + escapeHtml(media.fileName || "Field visit photo") + '" src="' + escapeHtml(media.url) + '">';
        return '<article class="media-card">' +
          preview +
          '<div class="media-meta">' +
            '<strong>' + escapeHtml(media.fileName || mediaLabel) + '</strong>' +
            '<span>' + escapeHtml(mediaLabel) + ' - ' + escapeHtml(formatFileSize(media.fileSize)) + '</span>' +
            '<a class="media-link" href="' + escapeHtml(media.url) + '" target="_blank" rel="noreferrer">Open media</a>' +
          '</div>' +
        '</article>';
      }

      function renderVisitMedia(visit) {
        var media = visit.media || [];
        if (!media.length) {
          return '<div class="empty-state">No photo, video, or voice memos attached to this visit.</div>';
        }
        return '<div class="media-grid">' + media.map(mediaCard).join("") + '</div>';
      }

      function renderNav(targetId) {
        var target = document.getElementById(targetId);
        if (!target) return;
        var navItems = visibleNavItems();
        target.innerHTML = navItems.map(function(item) {
          return '<button class="nav-button ' + (activeView === item.id ? "active" : "") + '" type="button" data-view="' + item.id + '">' +
            '<span>' + item.label + '</span>' +
            '</button>';
        }).join("") + (currentUser ? '<button class="nav-button" type="button" id="' + targetId + 'Logout"><span class="nav-icon logout-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4"></path><path d="M14 16l4-4-4-4"></path><path d="M18 12H9"></path></svg></span><span>Logout</span></button>' : "");
      }

      function setDrawer(open) {
        document.body.classList.toggle("drawer-open", open);
        var toggle = document.getElementById("drawerToggle");
        if (toggle) {
          toggle.setAttribute("aria-expanded", open ? "true" : "false");
          toggle.setAttribute("aria-label", open ? "Close options" : "Open options");
          toggle.textContent = open ? "×" : "☰";
        }
      }

      function openDrawer() {
        setDrawer(true);
      }

      function closeDrawer() {
        setDrawer(false);
      }

      function toggleDrawer() {
        setDrawer(!document.body.classList.contains("drawer-open"));
      }

      function renderLogin() {
        var target = document.getElementById("login");
        if (!target) return;
        target.innerHTML =
          '<div class="login-shell">' +
            '<section class="login-story">' +
              '<div class="login-mark">FS</div>' +
              '<span class="eyebrow">FieldSense</span>' +
              '<h1>Welcome to your field visit workspace.</h1>' +
              '<p>Capture field notes, organize follow-ups, and keep program teams aligned from one secure place.</p>' +
            '</section>' +
            '<section class="login-card">' +
              '<span class="eyebrow">Sign in</span>' +
              '<h2>Welcome back</h2>' +
              '<p>Enter your credentials to continue.</p>' +
              '<div class="login-form">' +
                '<div class="field full"><label>Email</label><input id="loginEmail" class="input" type="email" placeholder="you@example.com" autocomplete="email" /></div>' +
                '<div class="field full"><label>Password</label><div style="position:relative"><input id="loginPassword" class="input" type="password" placeholder="Enter your password" autocomplete="current-password" style="padding-right:78px" /><button id="togglePassword" type="button" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);width:auto;min-width:52px;height:34px;border:0;background:transparent;color:#6f3f31;font-weight:800;cursor:pointer">Show</button></div></div>' +
                '<button id="loginButton" class="btn primary" type="button">' + (loginBusy ? "Checking access..." : "Login to FieldSense") + '</button>' +
              '</div>' +
            '</section>' +
          '</div>';
      }

      async function login() {
        var email = (document.getElementById("loginEmail").value || "").trim();
        var password = document.getElementById("loginPassword").value || "";
        if (!email || !password) {
          showToast("Enter email and password.");
          return;
        }

        loginBusy = true;
        renderLogin();
        try {
          var payload = await api("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password })
          });
          currentUser = payload.user;
          activeView = defaultViewForRole();
          showToast("Logged in as " + currentUser.roleLabel + ".");
          await loadVisits();
          renderAll();
        } catch (error) {
          showToast(error.message || "Login failed.");
        } finally {
          loginBusy = false;
          renderLogin();
        }
      }

      async function logout() {
        try {
          await api("/api/auth/logout", { method: "POST" });
        } catch (error) {
          console.warn(error);
        }
        currentUser = null;
        visits = [];
        selectedVisitId = null;
        activeView = "login";
        renderAll();
        showToast("Logged out.");
      }

      function renderDashboard() {
        if (!visits.length) {
          document.getElementById("dashboard").innerHTML =
            pageHeader("Dashboard", "Overview of field visits, risks, and follow-ups.") +
            '<div class="empty-state">No visits yet. Add the first field visit to start building program intelligence.</div>';
          return;
        }

        var sentiment = countBy(visits, function(visit) { return visit.sentiment || "Neutral"; });
        var programs = countBy(visits, function(visit) { return visit.program || "Unassigned"; });
        var blockers = blockerCounts();
        var maxProgram = Math.max.apply(null, Object.values(programs).concat([1]));
        var maxBlocker = Math.max.apply(null, Object.values(blockers).concat([1]));
        var pendingFollowUps = visits.reduce(function(total, visit) {
          return total + (visit.followUps || []).length;
        }, 0);
        var managerInsights = getManagerInsights();

        document.getElementById("dashboard").innerHTML =
          pageHeader("Dashboard", "Overview of field visits, risks, and follow-ups.") +
          '<div class="grid metrics">' +
            metricCard("Total visits", visits.length, "Saved field records") +
            metricCard("Pending follow-ups", pendingFollowUps, "Action items extracted") +
            metricCard("Concern visits", sentiment.Concerned || 0, "Need manager attention") +
            metricCard("Positive sentiment", Math.round(((sentiment.Positive || 0) / visits.length) * 100) + "%", "Community signal") +
          '</div>' +
          '<div class="grid content-grid">' +
            '<div class="card section-card">' +
              sectionHead("Program patterns", "Where field activity is concentrated.") +
              '<div class="chart-list">' +
                Object.keys(programs).map(function(program, index) {
                  return barRow(program, programs[program], Math.round((programs[program] / maxProgram) * 100), index % 2 ? "alt" : "");
                }).join("") +
              '</div>' +
            '</div>' +
            '<div class="card section-card">' +
              sectionHead("Top blockers", "Recurring issues across saved visits.") +
              '<div class="chart-list">' +
                Object.keys(blockers).slice(0, 5).map(function(blocker, index) {
                  return barRow(blocker, blockers[blocker], Math.round((blockers[blocker] / maxBlocker) * 100), index % 2 ? "alt" : "");
                }).join("") +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card section-card" style="margin-top: 1rem;">' +
            sectionHead("Manager insights", "Patterns and recommended next action.") +
            '<div class="insight-grid">' +
              debriefBlock("What changed across visits", list(managerInsights.insights)) +
              debriefBlock("Recommended action", '<p>' + escapeHtml(managerInsights.recommendation) + '</p>') +
            '</div>' +
          '</div>' +
          '<div class="card section-card" style="margin-top: 1rem;">' +
            sectionHead("Recent field visits", "Click any visit to review the structured debrief.") +
            '<div class="visit-list">' + visits.map(visitCard).join("") + '</div>' +
          '</div>';
      }

      function metricCard(label, value, note) {
        return '<div class="card metric-card">' +
          '<p class="metric-label">' + escapeHtml(label) + '</p>' +
          '<p class="metric-value">' + escapeHtml(value) + '</p>' +
          '<p class="metric-note">' + escapeHtml(note) + '</p>' +
        '</div>';
      }

      function sectionHead(title, subtitle) {
        return '<div class="section-head"><div><h2>' + escapeHtml(title) + '</h2>' + (subtitle ? '<p>' + escapeHtml(subtitle) + '</p>' : "") + '</div></div>';
      }

      function pageHeader(title, subtitle) {
        return '<div class="page-header"><div><h1>' + escapeHtml(title) + '</h1>' + (subtitle ? '<p>' + escapeHtml(subtitle) + '</p>' : "") + '</div></div>';
      }

      function barRow(label, value, width, color) {
        return '<div class="bar-row">' +
          '<span>' + escapeHtml(label) + '</span>' +
          '<span class="bar-shell"><span class="bar-fill ' + color + '" style="width: ' + Number(width || 0) + '%"></span></span>' +
          '<strong>' + escapeHtml(value) + '</strong>' +
        '</div>';
      }

      function visitCard(visit) {
        var mediaCount = (visit.media || []).length;
        return '<article class="visit-card" data-visit="' + escapeHtml(visit.id) + '">' +
          '<div>' +
            '<h3>' + escapeHtml(visit.location) + ' - ' + escapeHtml(visit.program) + '</h3>' +
            '<p>' + escapeHtml(visit.date) + ' - ' + escapeHtml(visit.summary) + '</p>' +
            '<div class="tag-row">' +
              (visit.tags || []).slice(0, 4).map(function(tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("") +
              '<span class="tag">' + escapeHtml((visit.followUps || []).length) + ' follow-ups</span>' +
              (mediaCount ? '<span class="tag">' + escapeHtml(mediaCount) + ' media</span>' : "") +
            '</div>' +
          '</div>' +
          '<span class="status ' + statusClass(visit.sentiment) + '">' + escapeHtml(visit.sentiment || "Neutral") + '</span>' +
        '</article>';
      }

      function renderNewVisit() {
        document.getElementById("newVisit").innerHTML =
          pageHeader("New visit", "Capture field notes, media, and follow-up actions.") +
          '<div class="grid content-grid">' +
            '<div class="card section-card">' +
              sectionHead("Log a field visit", "Capture the visit details in one place.") +
              '<form class="form-grid">' +
                field("Location", '<input id="visitLocation" class="input" placeholder="e.g. Chittoor, Andhra Pradesh" />') +
                field("Visit date", '<input id="visitDate" class="input" type="date" />') +
                field("Program area", '<select id="visitProgram" class="select"><option value="">Select program area</option><option>Skilling</option><option>Livelihood</option><option>Economic Inclusion</option><option>Agriculture</option></select>') +
                field("Stakeholders met", '<input id="visitStakeholders" class="input" placeholder="e.g. Women entrepreneurs, field coordinator" />') +
                field("Field notes", '<textarea id="visitNotes" class="textarea" placeholder="Write the field observations here..."></textarea>', true) +
                field("Photo / video / voice memos", '<input id="visitMedia" class="file-input" type="file" accept="image/*,video/*,audio/*" multiple /><label class="upload-zone" for="visitMedia"><span><strong>Add media memos</strong><span>Photos, videos, or voice notes from the field.</span></span><span class="upload-action">Choose files</span></label><p class="field-help">Attach up to 5 files. Photos max 5 MB, videos max 50 MB, voice memos max 25 MB each.</p><div id="mediaPreview" class="media-grid"><div class="empty-state">No photo, video, or voice memo selected yet.</div></div>', true) +
              '</form>' +
              '<div class="button-row">' +
                '<button id="generateDebrief" class="btn primary" type="button">Generate AI debrief</button>' +
                '<button id="saveVisit" class="btn secondary" type="button">Save visit</button>' +
              '</div>' +
            '</div>' +
            '<aside class="card section-card ai-panel">' +
              sectionHead("Debrief preview", "Review the summary before saving.") +
              '<div id="aiPreviewContent">' + debriefPreview(generatedDebrief) + '</div>' +
            '</aside>' +
          '</div>';
      }

      function field(label, control, full) {
        return '<div class="field ' + (full ? "full" : "") + '"><label>' + escapeHtml(label) + '</label>' + control + '</div>';
      }

      function debriefPreview(data) {
        return debriefBlock("Structured summary", '<p>' + escapeHtml(data.summary) + '</p>') +
          debriefBlock("Key findings", list(data.findings || [])) +
          debriefBlock("Blockers observed", list(data.blockers || [])) +
          debriefBlock("Community sentiment", '<p><span class="status ' + statusClass(data.sentiment) + '">' + escapeHtml(data.sentiment || "Neutral") + '</span></p>') +
          debriefBlock("Suggested follow-ups", list(data.followUps || [])) +
          '<div class="tag-row">' + (data.tags || []).map(function(tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("") + '</div>';
      }

      function debriefBlock(title, content) {
        return '<div class="debrief-block"><h3>' + escapeHtml(title) + '</h3>' + content + '</div>';
      }

      function list(items) {
        return '<ul>' + items.map(function(item) { return '<li>' + escapeHtml(item) + '</li>'; }).join("") + '</ul>';
      }

      function option(value, label, currentValue) {
        return '<option value="' + escapeHtml(value) + '" ' + (value === currentValue ? "selected" : "") + '>' + escapeHtml(label) + '</option>';
      }

      function programSelect(id, currentValue) {
        var programs = ["", "Skilling", "Livelihood", "Economic Inclusion", "Agriculture"];
        return '<select id="' + escapeHtml(id) + '" class="select">' +
          programs.map(function(program) {
            return option(program, program || "Select program area", currentValue || "");
          }).join("") +
        '</select>';
      }

      function getVisitSearchText(visit) {
        return [
          visit.location,
          visit.program,
          visit.stakeholders,
          visit.sentiment,
          visit.summary,
          visit.notes,
          (visit.findings || []).join(" "),
          (visit.blockers || []).join(" "),
          (visit.followUps || []).join(" "),
          (visit.tags || []).join(" "),
          (visit.media || []).map(function(item) { return item.fileName; }).join(" ")
        ].join(" ").toLowerCase();
      }

      function getFilteredVisits() {
        var query = historyFilters.query.trim().toLowerCase();
        return visits.filter(function(visit) {
          var matchesQuery = !query || getVisitSearchText(visit).includes(query);
          var matchesProgram = historyFilters.program === "All programs" || visit.program === historyFilters.program;
          var matchesSentiment = historyFilters.sentiment === "All sentiment" || visit.sentiment === historyFilters.sentiment;
          return matchesQuery && matchesProgram && matchesSentiment;
        });
      }

      function renderHistoryResults() {
        var target = document.getElementById("historyResults");
        if (!target) return;
        var filteredVisits = getFilteredVisits();
        target.innerHTML = filteredVisits.length
          ? filteredVisits.map(visitCard).join("")
          : '<div class="empty-state">No visits match this search or filter.</div>';
      }

      function renderHistory() {
        var programs = unique(visits.map(function(visit) { return visit.program; })).sort();
        var filteredVisits = getFilteredVisits();

        document.getElementById("history").innerHTML =
          pageHeader("Visit history", "Search and review saved field visits.") +
          '<div class="card section-card">' +
            sectionHead("Saved visits", filteredVisits.length + " of " + visits.length + " visits visible.") +
            '<div class="toolbar">' +
              '<input id="historySearch" class="input" style="max-width: 340px;" placeholder="Search by location, program, blocker..." value="' + escapeHtml(historyFilters.query) + '" />' +
              '<select id="historyProgramFilter" class="select" style="max-width: 210px;">' +
                option("All programs", "All programs", historyFilters.program) +
                programs.map(function(program) { return option(program, program, historyFilters.program); }).join("") +
              '</select>' +
              '<select id="historySentimentFilter" class="select" style="max-width: 190px;">' +
                option("All sentiment", "All sentiment", historyFilters.sentiment) +
                option("Positive", "Positive", historyFilters.sentiment) +
                option("Neutral", "Neutral", historyFilters.sentiment) +
                option("Concerned", "Concerned", historyFilters.sentiment) +
              '</select>' +
            '</div>' +
            '<div id="historyResults" class="grid">' +
              (filteredVisits.length ? filteredVisits.map(visitCard).join("") : '<div class="empty-state">No visits match this search or filter.</div>') +
            '</div>' +
          '</div>';
      }

      function formatDebriefText(visit) {
        return [
          "FieldSense Debrief",
          "",
          "Location: " + visit.location,
          "Date: " + visit.date,
          "Program: " + visit.program,
          "Stakeholders: " + visit.stakeholders,
          "Sentiment: " + visit.sentiment,
          "",
          "Summary:",
          visit.summary,
          "",
          "Key Findings:",
          (visit.findings || []).map(function(item) { return "- " + item; }).join("\\n"),
          "",
          "Blockers:",
          (visit.blockers || []).map(function(item) { return "- " + item; }).join("\\n"),
          "",
          "Suggested Follow-ups:",
          (visit.followUps || []).map(function(item) { return "- " + item; }).join("\\n"),
          "",
          "Tags: " + (visit.tags || []).join(", "),
          "",
          "Media memos: " + ((visit.media || []).length ? (visit.media || []).map(function(item) { return item.fileName; }).join(", ") : "None")
        ].join("\\n");
      }

      function copySelectedDebrief() {
        var visit = getSelectedVisit();
        if (!visit) return;
        var text = formatDebriefText(visit);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function() {
            showToast("Debrief copied to clipboard.");
          }).catch(function() {
            alert(text);
          });
        } else {
          alert(text);
        }
      }

      function collectVisitForm() {
        return {
          location: document.getElementById("visitLocation").value.trim() || "Unknown location",
          date: document.getElementById("visitDate").value || new Date().toISOString().slice(0, 10),
          program: document.getElementById("visitProgram").value,
          stakeholders: document.getElementById("visitStakeholders").value.trim() || "Field stakeholders",
          notes: document.getElementById("visitNotes").value.trim()
        };
      }

      function collectEditVisitForm() {
        return {
          location: document.getElementById("editLocation").value.trim() || "Unknown location",
          date: document.getElementById("editDate").value || new Date().toISOString().slice(0, 10),
          program: document.getElementById("editProgram").value,
          stakeholders: document.getElementById("editStakeholders").value.trim() || "Field stakeholders",
          notes: document.getElementById("editNotes").value.trim()
        };
      }

      function visitFormKey(form) {
        return JSON.stringify({
          location: form.location,
          date: form.date,
          program: form.program,
          stakeholders: form.stakeholders,
          notes: form.notes
        });
      }

      async function uploadVisitMedia(visitId) {
        if (!selectedMedia.length) return [];
        var formData = new FormData();
        selectedMedia.forEach(function(item) {
          formData.append("files", item.file, item.file.name);
        });
        var payload = await api("/api/visits/" + encodeURIComponent(visitId) + "/media", {
          method: "POST",
          body: formData
        });
        return payload.media || [];
      }

      async function generateDebrief() {
        var form = collectVisitForm();
        if (!form.notes) {
          showToast("Please add field notes before generating a debrief.");
          return;
        }

        var button = document.getElementById("generateDebrief");
        button.disabled = true;
        button.textContent = "Generating...";

        try {
          var payload = await api("/api/debrief", {
            method: "POST",
            body: JSON.stringify(form)
          });
          generatedDebrief = payload.debrief;
          generatedDebriefFormKey = visitFormKey(form);
          document.getElementById("aiPreviewContent").innerHTML = debriefPreview(generatedDebrief);
          showToast("Debrief generated.");
          if (payload.provider === "gemini" || payload.provider === "openai") {
            apiInfo.ai = payload.provider;
            updateSystemStatus(apiInfo);
          }
        } catch (error) {
          showToast(error.message || "Could not generate debrief.");
        } finally {
          button.disabled = false;
          button.textContent = "Generate AI debrief";
        }
      }

      async function saveGeneratedVisit() {
        var form = collectVisitForm();
        if (!form.notes) {
          showToast("Please add field notes before saving the visit.");
          return;
        }

        var button = document.getElementById("saveVisit");
        button.disabled = true;
        button.textContent = "Saving...";

        try {
          var formKey = visitFormKey(form);
          var debrief = generatedDebrief && generatedDebriefFormKey === formKey
            ? generatedDebrief
            : (await api("/api/debrief", { method: "POST", body: JSON.stringify(form) })).debrief;

          var payload = await api("/api/visits", {
            method: "POST",
            body: JSON.stringify(Object.assign({}, form, debrief))
          });

          if (selectedMedia.length) {
            payload.visit.media = await uploadVisitMedia(payload.visit.id);
          }

          visits.unshift(payload.visit);
          selectedVisitId = payload.visit.id;
          clearSelectedMedia();
          renderAll();
          switchView("details");
          showToast("Visit saved.");
        } catch (error) {
          showToast(error.message || "Could not save visit.");
        } finally {
          button.disabled = false;
          button.textContent = "Save visit";
        }
      }

      async function deleteSelectedVisit() {
        var visit = getSelectedVisit();
        if (!visit) return;

        var confirmed = window.confirm("Delete this visit permanently?");
        if (!confirmed) return;

        try {
          await api("/api/visits/" + encodeURIComponent(visit.id), {
            method: "DELETE"
          });

          visits = visits.filter(function(item) {
            return item.id !== visit.id;
          });
          selectedVisitId = visits[0] && visits[0].id;
          editingVisitId = null;
          renderAll();
          switchView("dashboard");
          showToast("Visit deleted.");
        } catch (error) {
          showToast(error.message || "Could not delete visit.");
        }
      }

      function startEditSelectedVisit() {
        var visit = getSelectedVisit();
        if (!visit) return;
        editingVisitId = visit.id;
        renderDetails();
      }

      function cancelEditVisit() {
        editingVisitId = null;
        renderDetails();
      }

      async function saveEditedVisit() {
        var visit = getSelectedVisit();
        if (!visit) return;

        var form = collectEditVisitForm();
        if (!form.notes) {
          showToast("Please add field notes before saving changes.");
          return;
        }

        var button = document.getElementById("saveEditedVisit");
        button.disabled = true;
        button.textContent = "Saving...";

        try {
          var debrief = (await api("/api/debrief", {
            method: "POST",
            body: JSON.stringify(form)
          })).debrief;

          var payload = await api("/api/visits/" + encodeURIComponent(visit.id), {
            method: "PUT",
            body: JSON.stringify(Object.assign({}, form, debrief))
          });

          visits = visits.map(function(item) {
            return item.id === payload.visit.id ? payload.visit : item;
          });
          selectedVisitId = payload.visit.id;
          editingVisitId = null;
          renderAll();
          switchView("details");
          showToast("Visit updated and AI debrief refreshed.");
        } catch (error) {
          showToast(error.message || "Could not update visit.");
        } finally {
          button.disabled = false;
          button.textContent = "Save changes";
        }
      }

      function renderEditDetails(visit) {
        return pageHeader("Edit visit", "Update the field record and refresh the debrief.") +
          '<div class="card section-card">' +
          sectionHead("Visit details", "Edit the saved field notes.") +
          '<form class="form-grid">' +
            field("Location", '<input id="editLocation" class="input" value="' + escapeHtml(visit.location) + '" />') +
            field("Visit date", '<input id="editDate" class="input" type="date" value="' + escapeHtml(visit.date) + '" />') +
            field("Program area", programSelect("editProgram", visit.program)) +
            field("Stakeholders met", '<input id="editStakeholders" class="input" value="' + escapeHtml(visit.stakeholders) + '" />') +
            field("Field notes", '<textarea id="editNotes" class="textarea">' + escapeHtml(visit.notes) + '</textarea>', true) +
          '</form>' +
          '<div class="button-row">' +
            '<button id="saveEditedVisit" class="btn primary" type="button">Save changes</button>' +
            '<button id="cancelEditVisit" class="btn secondary" type="button">Cancel</button>' +
          '</div>' +
          '<div class="empty-state" style="margin-top: 0.8rem;">Existing photo, video, and voice memos stay attached. The structured debrief is regenerated from the edited notes.</div>' +
        '</div>';
      }

      function renderDetails() {
        var visit = getSelectedVisit();
        if (!visit) {
          document.getElementById("details").innerHTML =
            pageHeader("Visit details", "Review field notes, media, and follow-ups.") +
            '<div class="empty-state">No visit selected.</div>';
          return;
        }

        if (editingVisitId === visit.id) {
          document.getElementById("details").innerHTML = renderEditDetails(visit);
          return;
        }

        document.getElementById("details").innerHTML =
          pageHeader("Visit details", "Review field notes, media, and follow-ups.") +
          '<div class="grid detail-grid">' +
            '<div class="card section-card">' +
              sectionHead(visit.location, visit.date + " - " + visit.program + " - " + visit.stakeholders) +
              '<div class="debrief-block"><h3>Original field notes</h3><p>' + escapeHtml(visit.notes) + '</p></div>' +
              '<div style="margin-top: 0.8rem;">' +
                debriefBlock("Photos, Videos & Voice Memos", renderVisitMedia(visit)) +
              '</div>' +
            '</div>' +
            '<div class="card section-card">' +
              sectionHead("Structured debrief", "Manager-ready summary and follow-ups.") +
              '<div class="button-row" style="margin-top: 0; margin-bottom: 0.85rem;">' +
                (hasRole(["field_staff", "admin"]) ? '<button id="editVisit" class="btn primary" type="button">Edit visit</button>' : "") +
                '<button id="copyDebrief" class="btn secondary" type="button">Copy debrief</button>' +
                (hasRole(["admin"]) ? '<button id="deleteVisit" class="btn danger" type="button">Delete visit</button>' : "") +
              '</div>' +
              debriefPreview(visit) +
            '</div>' +
          '</div>' +
          '<div class="card section-card" style="margin-top: 1rem;">' +
            sectionHead("Manager insight snapshot", "Pattern signals from this visit.") +
            '<div class="insight-grid">' +
              debriefBlock("Community sentiment", '<p><span class="status ' + statusClass(visit.sentiment) + '">' + escapeHtml(visit.sentiment) + '</span></p>') +
              debriefBlock("Program risk", '<p>' + escapeHtml(visit.sentiment === "Concerned" ? "Needs follow-up before next mobilization cycle." : "Monitor in next field visit.") + '</p>') +
              debriefBlock("Follow-up count", '<p>' + escapeHtml((visit.followUps || []).length) + ' actions pending</p>') +
              debriefBlock("Tags", '<div class="tag-row">' + (visit.tags || []).map(function(tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("") + '</div>') +
            '</div>' +
          '</div>';
      }

      function renderRagMatch(match) {
        var visit = match.visit || {};
        return '<article class="visit-card" data-visit="' + escapeHtml(visit.id) + '">' +
          '<div>' +
            '<h3>' + escapeHtml(visit.location || "Unknown location") + ' - ' + escapeHtml(visit.program || "Unassigned") + '</h3>' +
            '<p>' + escapeHtml(visit.summary || "No summary available.") + '</p>' +
            '<div class="tag-row">' +
              '<span class="tag">Similarity ' + escapeHtml(Math.round(Number(match.similarity || 0) * 100)) + '%</span>' +
              ((visit.tags || []).slice(0, 3).map(function(tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("")) +
            '</div>' +
          '</div>' +
          '<span class="status ' + statusClass(visit.sentiment) + '">' + escapeHtml(visit.sentiment || "Neutral") + '</span>' +
        '</article>';
      }

      function renderRagSources(sources) {
        if (!sources || !sources.length) return '<div class="empty-state">No sources returned.</div>';
        return '<div class="tag-row">' + sources.slice(0, 5).map(function(source) {
          return '<span class="tag">' + escapeHtml(source.visitId) + ' - ' + escapeHtml(source.location) + ' (' + escapeHtml(Math.round(Number(source.similarity || 0) * 100)) + '%)</span>';
        }).join("") + '</div>';
      }

      function renderRagPipeline(stages) {
        return "";
      }

      function renderRag() {
        var resultHtml = "";

        if (ragBusy) {
          resultHtml = '<div class="empty-state">Working on the answer...</div>';
        } else if (ragResult) {
          resultHtml =
            '<div class="card section-card" style="margin-top: 1rem;">' +
              sectionHead("AI answer", "Answer based on matching visit records.") +
              '<div class="debrief-block"><p>' + escapeHtml(ragResult.answer || "No answer returned.") + '</p></div>' +
              debriefBlock("Sources", renderRagSources(ragResult.sources)) +
              renderRagPipeline(ragResult.pipeline) +
            '</div>' +
            '<div class="card section-card" style="margin-top: 1rem;">' +
              sectionHead("Supporting visits", "Visits related to this answer.") +
              '<div class="visit-list">' + ((ragResult.matches || []).length ? ragResult.matches.map(renderRagMatch).join("") : '<div class="empty-state">No matching visits found.</div>') + '</div>' +
            '</div>';
        } else {
          resultHtml = '<div class="empty-state">Ask something like: Which visits mention attendance issues? or Summarize market linkage blockers.</div>';
        }

        document.getElementById("rag").innerHTML =
          pageHeader("Ask AI", "Ask questions across saved field visits.") +
          '<div class="card section-card">' +
            sectionHead("Ask AI about visits", "") +
            '<div class="field full"><label>Question</label><textarea id="ragQuestion" class="textarea" placeholder="Ask about blockers, sentiment, follow-ups, programs, or locations...">' + escapeHtml(ragQuestion) + '</textarea></div>' +
            '<div class="button-row">' +
              '<button id="askRag" class="btn primary" type="button">' + (ragBusy ? "Asking..." : "Ask AI") + '</button>' +
              (hasRole(["admin"]) ? '<button id="reindexRag" class="btn secondary" type="button">Refresh search</button>' : "") +
            '</div>' +
          '</div>' +
          resultHtml;
      }

      async function askRag() {
        var question = (document.getElementById("ragQuestion").value || "").trim();
        if (!question) {
          showToast("Enter a question first.");
          return;
        }
        ragQuestion = question;
        ragBusy = true;
        renderRag();
        try {
          ragResult = await api("/api/rag/query", {
            method: "POST",
            body: JSON.stringify({ question: question, topK: 5 })
          });
          showToast("Answer generated.");
        } catch (error) {
          showToast(error.message || "Could not answer the question.");
        } finally {
          ragBusy = false;
          renderRag();
        }
      }

      async function reindexRag() {
        ragBusy = true;
        renderRag();
        try {
          var payload = await api("/api/rag/reindex", { method: "POST" });
          showToast("Indexed " + payload.indexed + " of " + payload.total + " visits.");
        } catch (error) {
          showToast(error.message || "Could not refresh search.");
        } finally {
          ragBusy = false;
          renderRag();
        }
      }

      function switchView(viewId) {
        if (viewId !== "login" && !visibleNavItems().some(function(item) { return item.id === viewId; })) {
          showToast("This section is not available for your role.");
          viewId = defaultViewForRole();
        }
        if (viewId === "newVisit") {
          generatedDebrief = emptyDebrief();
          generatedDebriefFormKey = "";
          clearSelectedMedia();
          renderNewVisit();
        }
        activeView = viewId;
        document.querySelectorAll(".view").forEach(function(view) {
          view.classList.toggle("active", view.id === viewId);
        });
        renderNav("sidebarNav");
        renderNav("mobileNav");
        if (viewId === "details") renderDetails();
        if (viewId === "rag") renderRag();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      function syncActiveView() {
        document.body.classList.toggle("auth-screen", activeView === "login");
        document.querySelectorAll(".view").forEach(function(view) {
          view.classList.toggle("active", view.id === activeView);
        });
      }

      function renderAll() {
        renderNav("sidebarNav");
        renderNav("mobileNav");
        renderLogin();
        renderDashboard();
        renderNewVisit();
        renderHistory();
        renderRag();
        renderDetails();
        syncActiveView();
      }

      document.addEventListener("click", function(event) {
        if (event.target.closest("#drawerToggle")) {
          toggleDrawer();
          return;
        }

        if (event.target.closest("#drawerClose") || event.target.closest("#drawerOverlay")) {
          closeDrawer();
          return;
        }

        var navButton = event.target.closest("[data-view]");
        if (navButton) {
          switchView(navButton.dataset.view);
          closeDrawer();
          return;
        }

        if (event.target.closest("#togglePassword")) {
          var input = document.getElementById("loginPassword");
          var button = document.getElementById("togglePassword");
          var showing = input.type === "text";
          input.type = showing ? "password" : "text";
          button.textContent = showing ? "Show" : "Hide";
          return;
        }

        if (event.target.closest("#loginButton")) {
          login();
          return;
        }

        if (event.target.closest("#sidebarNavLogout") || event.target.closest("#mobileNavLogout")) {
          logout();
          closeDrawer();
          return;
        }

        var visitCard = event.target.closest("[data-visit]");
        if (visitCard) {
          selectedVisitId = visitCard.dataset.visit;
          editingVisitId = null;
          switchView("details");
          return;
        }

        if (event.target.closest("#generateDebrief")) {
          generateDebrief();
          return;
        }

        if (event.target.closest("#saveVisit")) {
          saveGeneratedVisit();
          return;
        }

        if (event.target.closest("#askRag")) {
          askRag();
          return;
        }

        if (event.target.closest("#reindexRag")) {
          reindexRag();
          return;
        }

        if (event.target.closest("#copyDebrief")) {
          copySelectedDebrief();
          return;
        }

        if (event.target.closest("#editVisit")) {
          startEditSelectedVisit();
          return;
        }

        if (event.target.closest("#cancelEditVisit")) {
          cancelEditVisit();
          return;
        }

        if (event.target.closest("#saveEditedVisit")) {
          saveEditedVisit();
          return;
        }

        if (event.target.closest("#deleteVisit")) {
          deleteSelectedVisit();
        }
      });

      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          closeDrawer();
        }
      });

      document.addEventListener("input", function(event) {
        if (event.target.id === "historySearch") {
          historyFilters.query = event.target.value;
          renderHistoryResults();
        }

        if (event.target.id === "ragQuestion") {
          ragQuestion = event.target.value;
        }

        if (event.target.id && event.target.id.startsWith("visit")) {
          generatedDebrief = emptyDebrief();
          generatedDebriefFormKey = "";
          var preview = document.getElementById("aiPreviewContent");
          if (preview) preview.innerHTML = debriefPreview(generatedDebrief);
        }
      });

      document.addEventListener("change", function(event) {
        if (event.target.id === "visitMedia") {
          setSelectedMedia(event.target.files);
          return;
        }

        if (event.target.id === "historyProgramFilter") {
          historyFilters.program = event.target.value;
          renderHistory();
        }

        if (event.target.id === "historySentimentFilter") {
          historyFilters.sentiment = event.target.value;
          renderHistory();
        }
      });

      (async function init() {
        renderAll();
        try {
          await loadVisits();
          renderAll();
        } catch (error) {
          setApiOffline(error);
          renderAll();
        }
      })();
    </script>
  </body>
</html>`;

const docsPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FieldSense API Docs</title>
    <style>
      body { margin: 0; background: #faf7f3; color: #2f2723; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
      main { width: min(980px, calc(100% - 2rem)); margin: 0 auto; padding: 2rem 0 3rem; }
      h1 { margin: 0 0 0.5rem; font-size: 2rem; }
      p { color: #776a64; line-height: 1.6; }
      code { border-radius: 6px; padding: 0.18rem 0.35rem; background: #efe4df; color: #43271f; }
      .endpoint { margin-top: 1rem; border: 1px solid #eadfd9; border-radius: 8px; padding: 1rem; background: #fffdf9; }
      .method { display: inline-flex; min-width: 64px; justify-content: center; border-radius: 999px; padding: 0.25rem 0.5rem; background: #6f3f31; color: #fff; font-weight: 800; }
      a { color: #6f3f31; font-weight: 800; }
    </style>
  </head>
  <body>
    <main>
      <h1>FieldSense REST API</h1>
      <p>This deployed Worker exposes REST endpoints for authentication, role-based field visit storage, AI debrief generation, vector indexing, and RAG search. PostgreSQL is the primary storage layer through Supabase. The machine-readable OpenAPI document is available at <a href="/openapi.json">/openapi.json</a>.</p>
      <div class="endpoint"><span class="method">GET</span> <code>/api/health</code><p>Checks REST API, storage mode, and AI provider configuration.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/auth/login</code><p>Signs in with Supabase Auth and creates an HTTP-only session cookie.</p></div>
      <div class="endpoint"><span class="method">GET</span> <code>/api/auth/me</code><p>Returns the current authenticated user and app role.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/auth/logout</code><p>Clears the session cookie.</p></div>
      <div class="endpoint"><span class="method">GET</span> <code>/api/visits</code><p>Lists saved visits from Supabase PostgreSQL when <code>SUPABASE_URL</code> and <code>SUPABASE_SERVICE_ROLE_KEY</code> are configured.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/visits</code><p>Creates a visit record with structured summary, findings, blockers, follow-ups, sentiment, and tags.</p></div>
      <div class="endpoint"><span class="method">GET</span> <code>/api/visits/{id}</code><p>Fetches one visit by ID.</p></div>
      <div class="endpoint"><span class="method">PUT</span> <code>/api/visits/{id}</code><p>Updates one existing visit and refreshes its structured debrief fields.</p></div>
      <div class="endpoint"><span class="method">DELETE</span> <code>/api/visits/{id}</code><p>Deletes one visit by ID.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/visits/{id}/media</code><p>Uploads photo, video, and voice memos to Supabase Storage and saves file metadata in PostgreSQL.</p></div>
      <div class="endpoint"><span class="method">GET</span> <code>/api/media/{id}</code><p>Streams one attached photo, video, or voice memo through the backend.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/debrief</code><p>Generates a debrief using Gemini when <code>GEMINI_API_KEY</code> is configured, OpenAI when <code>OPENAI_API_KEY</code> is configured, otherwise returns a local fallback.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/rag/reindex</code><p>Embeds all visits into Supabase <code>pgvector</code> using Gemini Embedding 2 when available, otherwise a local deterministic fallback.</p></div>
      <div class="endpoint"><span class="method">POST</span> <code>/api/rag/query</code><p>Runs vector similarity search over indexed visits and returns an AI answer with supporting visit matches.</p></div>
    </main>
  </body>
</html>`;

const openApiSpec = {
  openapi: "3.1.0",
  info: {
    title: "FieldSense API",
    version: "1.0.0",
    description: "REST API for field visit capture, AI debrief generation, and visit intelligence.",
  },
  paths: {
    "/api/health": {
      get: {
        summary: "Check API health",
        responses: {
          200: {
            description: "API status",
          },
        },
      },
    },
    "/api/auth/login": {
      post: {
        summary: "Login with Supabase Auth",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginRequest" },
            },
          },
        },
        responses: {
          200: { description: "Authenticated user and session cookie" },
          401: { description: "Invalid credentials" },
        },
      },
    },
    "/api/auth/me": {
      get: {
        summary: "Get current authenticated user",
        responses: {
          200: { description: "Current user or null" },
        },
      },
    },
    "/api/auth/logout": {
      post: {
        summary: "Logout current user",
        responses: {
          200: { description: "Session cleared" },
        },
      },
    },
    "/api/visits": {
      get: {
        summary: "List visits",
        responses: {
          200: {
            description: "Visit list",
          },
        },
      },
      post: {
        summary: "Create a visit",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/VisitInput" },
            },
          },
        },
        responses: {
          201: {
            description: "Created visit",
          },
        },
      },
    },
    "/api/visits/{id}": {
      get: {
        summary: "Get one visit",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Visit record" },
          404: { description: "Visit not found" },
        },
      },
      put: {
        summary: "Update one visit",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/VisitInput" },
            },
          },
        },
        responses: {
          200: { description: "Updated visit" },
          404: { description: "Visit not found" },
        },
      },
      delete: {
        summary: "Delete one visit",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Visit deleted" },
        },
      },
    },
    "/api/debrief": {
      post: {
        summary: "Generate AI debrief",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/DebriefRequest" },
            },
          },
        },
        responses: {
          200: { description: "Generated debrief" },
        },
      },
    },
    "/api/rag/reindex": {
      post: {
        summary: "Index visits for RAG vector search",
        responses: {
          200: { description: "RAG indexing result" },
        },
      },
    },
    "/api/rag/query": {
      post: {
        summary: "Ask a RAG question over indexed visits",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/RagQueryRequest" },
            },
          },
        },
        responses: {
          200: { description: "RAG answer and matching visits" },
        },
      },
    },
    "/api/visits/{id}/media": {
      post: {
        summary: "Upload visit media",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  files: {
                    type: "array",
                    items: { type: "string", format: "binary" },
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Uploaded media records" },
        },
      },
    },
    "/api/media/{id}": {
      get: {
        summary: "Stream one media file",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: { description: "Media file" },
          404: { description: "Media not found" },
        },
      },
    },
  },
  components: {
    schemas: {
      DebriefRequest: {
        type: "object",
        required: ["notes"],
        properties: {
          location: { type: "string" },
          date: { type: "string" },
          program: { type: "string" },
          stakeholders: { type: "string" },
          notes: { type: "string" },
        },
      },
      LoginRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", format: "email" },
          password: { type: "string", format: "password" },
        },
      },
      RagQueryRequest: {
        type: "object",
        required: ["question"],
        properties: {
          question: { type: "string" },
          topK: { type: "integer", minimum: 1, maximum: 10 },
        },
      },
      VisitInput: {
        allOf: [
          { $ref: "#/components/schemas/DebriefRequest" },
          {
            type: "object",
            properties: {
              summary: { type: "string" },
              findings: { type: "array", items: { type: "string" } },
              blockers: { type: "array", items: { type: "string" } },
              sentiment: { type: "string", enum: ["Positive", "Neutral", "Concerned"] },
              followUps: { type: "array", items: { type: "string" } },
              tags: { type: "array", items: { type: "string" } },
            },
          },
        ],
      },
    },
  },
};

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders,
    },
  });
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function error(message, status = 400) {
  return json({ error: message }, status);
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    throw new Error("Request body must be valid JSON.");
  }
}

function sanitizeText(value, fallback = "") {
  return String(value == null ? fallback : value).trim().slice(0, 6000);
}

function sanitizeList(value, fallback = []) {
  if (!Array.isArray(value)) return fallback;
  return value.map((item) => sanitizeText(item)).filter(Boolean).slice(0, 12);
}

function normalizeSentiment(value) {
  const sentiment = sanitizeText(value, "Neutral");
  if (["Positive", "Neutral", "Concerned"].includes(sentiment)) return sentiment;
  return "Neutral";
}

function normalizeDebrief(value) {
  const debrief = value && typeof value === "object" ? value : {};
  return {
    summary: sanitizeText(debrief.summary, "The visit captured useful field observations."),
    findings: sanitizeList(debrief.findings, ["The visit captured useful field observations."]),
    blockers: sanitizeList(debrief.blockers, ["No major blocker explicitly mentioned."]),
    sentiment: normalizeSentiment(debrief.sentiment),
    followUps: sanitizeList(debrief.followUps, ["Review the observations with the program lead."]),
    tags: sanitizeList(debrief.tags, ["field-notes"]).map((tag) =>
      tag.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, ""),
    ).filter(Boolean),
  };
}

function communitySentimentFromNotes(form, debrief) {
  const text = [
    form.location,
    form.program,
    form.stakeholders,
    form.notes,
  ].map((value) => sanitizeText(value).toLowerCase()).join(" ");

  const positiveMood = includesAny(text, [
    "overall, the group was positive",
    "overall the group was positive",
    "group was positive",
    "participants were positive",
    "positive and interested",
    "interested in learning",
    "showed interest",
    "strong interest",
    "open to",
    "enthusiastic",
    "happy",
    "confident",
    "improved",
    "improving",
  ]);

  const strongConcern = includesAny(text, [
    "angry",
    "refused",
    "dropout",
    "dropped out",
    "stopped attending",
    "strongly opposed",
    "not interested",
    "loss of trust",
    "distrust",
    "unsafe",
    "harassment",
    "violence",
  ]);

  if (strongConcern) return { ...debrief, sentiment: "Concerned" };
  if (positiveMood) return { ...debrief, sentiment: "Positive" };
  return debrief;
}

function createVisit(input) {
  const now = new Date().toISOString();
  const debrief = normalizeDebrief(input);
  return {
    id: sanitizeText(input.id, `VST-${String(Date.now()).slice(-6)}`),
    location: sanitizeText(input.location, "Unknown location"),
    date: sanitizeText(input.date, now.slice(0, 10)),
    program: sanitizeText(input.program, "Unassigned"),
    stakeholders: sanitizeText(input.stakeholders, "Field stakeholders"),
    sentiment: debrief.sentiment,
    summary: debrief.summary,
    notes: sanitizeText(input.notes),
    findings: debrief.findings,
    blockers: debrief.blockers,
    followUps: debrief.followUps,
    tags: debrief.tags,
    media: Array.isArray(input.media) ? input.media.map(rowToMedia) : [],
    createdAt: sanitizeText(input.createdAt, now),
  };
}

function parseStoredList(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function rowToMedia(row, signedUrl = null) {
  return {
    id: row.id,
    visitId: row.visit_id || row.visitId,
    mediaType: row.media_type || row.mediaType,
    fileName: row.file_name || row.fileName,
    storagePath: row.storage_path || row.storagePath,
    mimeType: row.mime_type || row.mimeType,
    fileSize: Number(row.file_size || row.fileSize || 0),
    createdAt: row.created_at || row.createdAt,
    url: signedUrl || row.url || `/api/media/${encodeURIComponent(row.id)}`,
  };
}

function rowToVisit(row, mediaRows = []) {
  const media = Array.isArray(row.visit_media)
    ? row.visit_media
    : mediaRows;
  return {
    id: row.id,
    location: row.location,
    date: row.visit_date || row.date,
    program: row.program,
    stakeholders: row.stakeholders,
    sentiment: row.sentiment,
    summary: row.summary,
    notes: row.notes,
    findings: parseStoredList(row.findings),
    blockers: parseStoredList(row.blockers),
    followUps: parseStoredList(row.follow_ups || row.followUps),
    tags: parseStoredList(row.tags),
    media: media.map(rowToMedia),
    createdAt: row.created_at || row.createdAt,
  };
}

function supabaseConfigured(env) {
  return Boolean(env.SUPABASE_URL && (env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY));
}

function supabaseAuthKey(env) {
  return env.SUPABASE_ANON_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
}

function supabaseAuthEndpoint(env, path) {
  return `${String(env.SUPABASE_URL).replace(/\/+$/, "")}/auth/v1${path}`;
}

function parseCookie(header) {
  const cookies = {};
  for (const part of String(header || "").split(";")) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (key) cookies[key] = decodeURIComponent(value);
  }
  return cookies;
}

function sessionCookie(value, request, maxAge = 60 * 60 * 24 * 7) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  return `${SESSION_COOKIE}=${encodeURIComponent(value || "")}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

function adminEmails(env) {
  return String(env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeRole(value) {
  const role = sanitizeText(value, "field_staff");
  return ROLES.includes(role) ? role : "field_staff";
}

function roleLabel(role) {
  return {
    field_staff: "Field Staff",
    manager: "Manager",
    admin: "Admin",
  }[role] || "Field Staff";
}

function canRole(role, allowed) {
  return allowed.includes(normalizeRole(role));
}

async function getUserRole(env, email) {
  const normalizedEmail = sanitizeText(email).toLowerCase();
  if (!normalizedEmail) return "field_staff";
  if (adminEmails(env).includes(normalizedEmail)) return "admin";
  if (!supabaseConfigured(env) || !env.SUPABASE_SERVICE_ROLE_KEY) return "field_staff";

  const rows = await supabaseRequest(
    env,
    `/user_roles?email=eq.${encodeURIComponent(normalizedEmail)}&select=role&limit=1`,
  );

  return normalizeRole(rows?.[0]?.role);
}

async function getSession(request, env) {
  const token = parseCookie(request.headers.get("cookie"))[SESSION_COOKIE];
  if (!token || !supabaseConfigured(env) || !supabaseAuthKey(env)) return null;

  const response = await fetch(supabaseAuthEndpoint(env, "/user"), {
    headers: {
      apikey: supabaseAuthKey(env),
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) return null;

  const user = await response.json();
  const email = sanitizeText(user.email).toLowerCase();
  const role = await getUserRole(env, email);

  return {
    token,
    user: {
      id: user.id,
      email,
      role,
      roleLabel: roleLabel(role),
    },
  };
}

async function loginWithSupabase(env, email, password) {
  if (!supabaseConfigured(env) || !supabaseAuthKey(env)) {
    throw new Error("Supabase Auth requires SUPABASE_URL and SUPABASE_ANON_KEY.");
  }

  const response = await fetch(supabaseAuthEndpoint(env, "/token?grant_type=password"), {
    method: "POST",
    headers: {
      apikey: supabaseAuthKey(env),
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: sanitizeText(email),
      password: String(password || ""),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Login failed: ${details.slice(0, 180)}`);
  }

  return response.json();
}

async function requireSession(request, env, allowedRoles = ROLES) {
  const session = await getSession(request, env);
  if (!session) {
    throw Object.assign(new Error("Please log in to continue."), { status: 401 });
  }
  if (!canRole(session.user.role, allowedRoles)) {
    throw Object.assign(new Error("You do not have permission for this action."), { status: 403 });
  }
  return session;
}

function supabaseHeaders(env, extra = {}) {
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  return {
    apikey: key,
    authorization: `Bearer ${key}`,
    "content-type": "application/json",
    ...extra,
  };
}

function supabaseEndpoint(env, path) {
  return `${String(env.SUPABASE_URL).replace(/\/+$/, "")}/rest/v1${path}`;
}

function supabaseStorageUrl(env, path) {
  return `${String(env.SUPABASE_URL).replace(/\/+$/, "")}/storage/v1${path}`;
}

function supabasePublicObjectUrl(env, storagePath) {
  return supabaseStorageUrl(
    env,
    `/object/public/${encodeURIComponent(mediaBucket(env))}/${encodePathSegments(storagePath)}`,
  );
}

function mediaBucket(env) {
  return sanitizeText(env.SUPABASE_STORAGE_BUCKET, DEFAULT_MEDIA_BUCKET) || DEFAULT_MEDIA_BUCKET;
}

function encodePathSegments(path) {
  return String(path).split("/").map(encodeURIComponent).join("/");
}

function supabaseStorageHeaders(env, extra = {}) {
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  return {
    apikey: key,
    authorization: `Bearer ${key}`,
    ...extra,
  };
}

function visitToSupabaseRow(visit) {
  return {
    id: visit.id,
    location: visit.location,
    visit_date: visit.date,
    program: visit.program,
    stakeholders: visit.stakeholders,
    sentiment: visit.sentiment,
    summary: visit.summary,
    notes: visit.notes,
    findings: visit.findings,
    blockers: visit.blockers,
    follow_ups: visit.followUps,
    tags: visit.tags,
    created_at: visit.createdAt,
  };
}

function mediaToSupabaseRow(media) {
  return {
    id: media.id,
    visit_id: media.visitId,
    media_type: media.mediaType,
    file_name: media.fileName,
    storage_path: media.storagePath,
    mime_type: media.mimeType,
    file_size: media.fileSize,
    created_at: media.createdAt,
  };
}

async function supabaseRequest(env, path, options = {}) {
  const response = await fetch(supabaseEndpoint(env, path), {
    ...options,
    headers: supabaseHeaders(env, options.headers || {}),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase PostgreSQL request failed: ${details.slice(0, 260)}`);
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function geminiApiKey(env) {
  return sanitizeText(env.GEMINI_API_KEY || env.GOOGLE_API_KEY);
}

function geminiModel(env) {
  return sanitizeText(env.GEMINI_MODEL, DEFAULT_GEMINI_MODEL) || DEFAULT_GEMINI_MODEL;
}

function geminiEmbeddingModel(env) {
  return sanitizeText(env.GEMINI_EMBEDDING_MODEL || env.EMBEDDING_MODEL, DEFAULT_GEMINI_EMBEDDING_MODEL) || DEFAULT_GEMINI_EMBEDDING_MODEL;
}

function embeddingModel(env) {
  if (geminiApiKey(env)) return geminiEmbeddingModel(env);
  return sanitizeText(env.EMBEDDING_MODEL, "local-hashing-embedding-v1") || "local-hashing-embedding-v1";
}

function embeddingProvider(env) {
  return geminiApiKey(env) ? "gemini" : "local-js";
}

function buildVisitEmbeddingText(visit) {
  return [
    `Visit ID: ${sanitizeText(visit.id)}`,
    `Location: ${sanitizeText(visit.location)}`,
    `Date: ${sanitizeText(visit.date)}`,
    `Program: ${sanitizeText(visit.program)}`,
    `Stakeholders: ${sanitizeText(visit.stakeholders)}`,
    `Sentiment: ${sanitizeText(visit.sentiment)}`,
    `Original notes: ${sanitizeText(visit.notes)}`,
    `Structured summary: ${sanitizeText(visit.summary)}`,
    `Key findings: ${(visit.findings || []).map((item) => sanitizeText(item)).join("; ")}`,
    `Blockers observed: ${(visit.blockers || []).map((item) => sanitizeText(item)).join("; ")}`,
    `Suggested follow-ups: ${(visit.followUps || []).map((item) => sanitizeText(item)).join("; ")}`,
    `Tags: ${(visit.tags || []).map((item) => sanitizeText(item)).join(", ")}`,
  ].join("\n").slice(0, 12000);
}

function vectorLiteral(values) {
  return `[${values.map((value) => Number(value).toFixed(8)).join(",")}]`;
}

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalizeVector(values) {
  const magnitude = Math.sqrt(values.reduce((sum, value) => sum + value * value, 0)) || 1;
  return values.map((value) => value / magnitude);
}

function localEmbedding(text) {
  const vector = Array.from({ length: EMBEDDING_DIMENSIONS }, () => 0);
  const tokens = sanitizeText(text)
    .toLowerCase()
    .match(/[a-z0-9][a-z0-9-]{1,}/g) || [];

  for (const token of tokens) {
    const hash = hashString(token);
    const index = hash % EMBEDDING_DIMENSIONS;
    const sign = hash & 1 ? 1 : -1;
    vector[index] += sign;
  }

  return normalizeVector(vector);
}

function geminiEmbeddingPrompt(text, task) {
  const prefix = task === "query"
    ? "Represent this field intelligence question for retrieval:"
    : "Represent this field visit document for retrieval:";
  return `${prefix}\n\n${sanitizeText(text).slice(0, 12000)}`;
}

async function geminiEmbedding(env, text, task = "document") {
  const key = geminiApiKey(env);
  if (!key) return null;

  const model = geminiEmbeddingModel(env);
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:embedContent`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": key,
    },
    body: JSON.stringify({
      model: `models/${model}`,
      content: {
        parts: [{ text: geminiEmbeddingPrompt(text, task) }],
      },
      output_dimensionality: EMBEDDING_DIMENSIONS,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Gemini embedding request failed: ${details.slice(0, 240)}`);
  }

  const payload = await response.json();
  const values = payload.embedding?.values || payload.embeddings?.[0]?.values || null;
  return Array.isArray(values) ? values : null;
}

async function createEmbedding(env, text, task = "document") {
  try {
    const embedding = await geminiEmbedding(env, text, task);
    if (embedding) {
      return {
        values: normalizeVector(embedding),
        provider: "gemini",
        model: geminiEmbeddingModel(env),
      };
    }
  } catch (err) {
    console.warn(err);
  }

  return {
    values: localEmbedding(text),
    provider: "local-js",
    model: "local-hashing-embedding-v1",
  };
}

async function saveSupabaseVisitEmbedding(env, visit) {
  if (!supabaseConfigured(env) || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return { indexed: false, reason: "Supabase service role key missing." };
  }

  const embeddingText = buildVisitEmbeddingText(visit);
  const embedding = await createEmbedding(env, embeddingText, "document");
  if (!embedding.values?.length) return { indexed: false, reason: "Embedding was not returned." };

  await supabaseRequest(env, "/visit_embeddings?on_conflict=visit_id", {
    method: "POST",
    headers: {
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify({
      visit_id: visit.id,
      embedding: vectorLiteral(embedding.values),
      embedding_text: embeddingText,
      provider: embedding.provider,
      model: embedding.model,
      updated_at: new Date().toISOString(),
    }),
  });

  return { indexed: true, provider: embedding.provider, model: embedding.model };
}

async function safeIndexVisit(env, visit) {
  try {
    return await saveSupabaseVisitEmbedding(env, visit);
  } catch (err) {
    console.warn(err);
    return { indexed: false, reason: err.message || "Embedding indexing failed." };
  }
}

async function supabaseStorageRequest(env, path, options = {}) {
  const response = await fetch(supabaseStorageUrl(env, path), {
    ...options,
    headers: supabaseStorageHeaders(env, options.headers || {}),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Supabase Storage request failed: ${details.slice(0, 260)}`);
  }

  return response;
}

async function createSupabaseSignedUrl(env, storagePath) {
  const response = await supabaseStorageRequest(
    env,
    `/object/sign/${encodeURIComponent(mediaBucket(env))}/${encodePathSegments(storagePath)}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ expiresIn: 60 * 60 }),
    },
  );

  const payload = await response.json();
  const signedUrl = payload.signedURL || payload.signedUrl || payload.url;
  if (!signedUrl) return null;
  if (/^https?:\/\//i.test(signedUrl)) return signedUrl;
  return `${String(env.SUPABASE_URL).replace(/\/+$/, "")}${signedUrl.startsWith("/") ? "" : "/"}${signedUrl}`;
}

async function mediaRowsToMedia(env, rows = []) {
  return Promise.all((rows || []).map(async (row) => {
    const publicUrl = supabasePublicObjectUrl(env, row.storage_path);
    try {
      return rowToMedia(row, publicUrl || await createSupabaseSignedUrl(env, row.storage_path));
    } catch (err) {
      console.warn(err);
      return rowToMedia(row, publicUrl);
    }
  }));
}

async function listSupabaseVisits(env) {
  const rows = await supabaseRequest(env, "/visits?select=*&order=created_at.desc");
  const mediaRows = await supabaseRequest(env, "/visit_media?select=*&order=created_at.asc");
  const mediaByVisit = (mediaRows || []).reduce((acc, row) => {
    const visitId = row.visit_id;
    acc[visitId] = acc[visitId] || [];
    acc[visitId].push(row);
    return acc;
  }, {});
  return Promise.all((rows || []).map(async (row) => {
    const media = await mediaRowsToMedia(env, mediaByVisit[row.id] || []);
    return rowToVisit({ ...row, visit_media: media }, []);
  }));
}

async function getSupabaseVisit(env, id) {
  const rows = await supabaseRequest(
    env,
    `/visits?id=eq.${encodeURIComponent(id)}&select=*&limit=1`,
  );
  if (!rows?.[0]) return null;
  const mediaRows = await supabaseRequest(
    env,
    `/visit_media?visit_id=eq.${encodeURIComponent(id)}&select=*&order=created_at.asc`,
  );
  const media = await mediaRowsToMedia(env, mediaRows || []);
  return rowToVisit({ ...rows[0], visit_media: media }, []);
}

async function saveSupabaseVisit(env, visit) {
  const rows = await supabaseRequest(env, "/visits?select=*", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(visitToSupabaseRow(visit)),
  });
  return rows?.[0] ? rowToVisit(rows[0], []) : { ...visit, media: [] };
}

async function updateSupabaseVisit(env, visit) {
  const rows = await supabaseRequest(env, `/visits?id=eq.${encodeURIComponent(visit.id)}&select=*`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(visitToSupabaseRow(visit)),
  });

  if (!rows?.[0]) return null;
  const mediaRows = await supabaseRequest(
    env,
    `/visit_media?visit_id=eq.${encodeURIComponent(visit.id)}&select=*&order=created_at.asc`,
  );
  const media = await mediaRowsToMedia(env, mediaRows || []);
  return rowToVisit({ ...rows[0], visit_media: media }, []);
}

async function deleteSupabaseVisit(env, id) {
  const mediaRows = await supabaseRequest(
    env,
    `/visit_media?visit_id=eq.${encodeURIComponent(id)}&select=storage_path`,
  );

  const paths = (mediaRows || []).map((row) => row.storage_path).filter(Boolean);
  if (paths.length) {
    try {
      await supabaseStorageRequest(env, `/object/${encodeURIComponent(mediaBucket(env))}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prefixes: paths }),
      });
    } catch (err) {
      console.warn(err);
    }
  }

  await supabaseRequest(env, `/visits?id=eq.${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
}

async function saveSupabaseMedia(env, media) {
  const rows = await supabaseRequest(env, "/visit_media?select=*", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(mediaToSupabaseRow(media)),
  });
  const row = rows?.[0] || mediaToSupabaseRow(media);
  return rowToMedia(row, supabasePublicObjectUrl(env, row.storage_path));
}

async function getSupabaseMedia(env, id) {
  const rows = await supabaseRequest(
    env,
    `/visit_media?id=eq.${encodeURIComponent(id)}&select=*&limit=1`,
  );
  return rows?.[0] ? rowToMedia(rows[0]) : null;
}

function createId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function safeFileName(name) {
  return sanitizeText(name, "media")
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 90) || "media";
}

function getMediaType(mimeType) {
  if (String(mimeType || "").startsWith("image/")) return "photo";
  if (String(mimeType || "").startsWith("video/")) return "video";
  if (String(mimeType || "").startsWith("audio/")) return "audio";
  return "";
}

function validateMediaUpload(file) {
  const mimeType = sanitizeText(file?.type);
  const mediaType = getMediaType(mimeType);
  const size = Number(file?.size || 0);

  if (!mediaType) throw new Error("Only photo, video, and voice memo files are supported.");
  if (mediaType === "photo" && size > MAX_PHOTO_BYTES) {
    throw new Error("Photos must be 5 MB or smaller.");
  }
  if (mediaType === "video" && size > MAX_VIDEO_BYTES) {
    throw new Error("Videos must be 50 MB or smaller.");
  }
  if (mediaType === "audio" && size > MAX_AUDIO_BYTES) {
    throw new Error("Voice memos must be 25 MB or smaller.");
  }
  if (size <= 0) throw new Error("Uploaded file is empty.");

  return { mediaType, mimeType, size };
}

function isUploadedFile(value) {
  return value && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.name === "string";
}

async function uploadVisitMedia(env, visitId, files) {
  if (!supabaseConfigured(env) || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase Storage uploads require SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  const validFiles = files.filter(isUploadedFile).slice(0, MAX_MEDIA_FILES);
  if (!validFiles.length) throw new Error("Select at least one photo, video, or voice memo.");

  const savedMedia = [];
  for (const file of validFiles) {
    const { mediaType, mimeType, size } = validateMediaUpload(file);
    const mediaId = createId("MED");
    const fileName = safeFileName(file.name);
    const storagePath = `${safeFileName(visitId)}/${mediaId}-${fileName}`;

    await supabaseStorageRequest(
      env,
      `/object/${encodeURIComponent(mediaBucket(env))}/${encodePathSegments(storagePath)}`,
      {
        method: "POST",
        headers: {
          "content-type": mimeType,
          "x-upsert": "false",
        },
        body: file,
      },
    );

    const media = await saveSupabaseMedia(env, {
      id: mediaId,
      visitId,
      mediaType,
      fileName,
      storagePath,
      mimeType,
      fileSize: size,
      createdAt: new Date().toISOString(),
    });
    savedMedia.push(media);
  }

  return savedMedia;
}

async function serveMedia(env, mediaId, request) {
  if (!supabaseConfigured(env)) return error("Supabase Storage is not configured.", 501);
  const media = await getSupabaseMedia(env, mediaId);
  if (!media) return error("Media not found.", 404);

  const storageHeaders = {};
  const range = request.headers.get("range");
  if (range) storageHeaders.range = range;

  let response;
  try {
    response = await supabaseStorageRequest(
      env,
      `/object/authenticated/${encodeURIComponent(mediaBucket(env))}/${encodePathSegments(media.storagePath)}`,
      { method: "GET", headers: storageHeaders },
    );
  } catch {
    response = await supabaseStorageRequest(
      env,
      `/object/${encodeURIComponent(mediaBucket(env))}/${encodePathSegments(media.storagePath)}`,
      { method: "GET", headers: storageHeaders },
    );
  }

  const headers = new Headers();
  headers.set("content-type", media.mimeType || response.headers.get("content-type") || "application/octet-stream");
  headers.set("cache-control", "private, max-age=300");
  headers.set("content-disposition", `inline; filename="${safeFileName(media.fileName)}"`);
  ["accept-ranges", "content-range", "content-length"].forEach((header) => {
    const value = response.headers.get(header);
    if (value) headers.set(header, value);
  });

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}

function visitToParams(visit) {
  return [
    visit.id,
    visit.location,
    visit.date,
    visit.program,
    visit.stakeholders,
    visit.sentiment,
    visit.summary,
    visit.notes,
    JSON.stringify(visit.findings),
    JSON.stringify(visit.blockers),
    JSON.stringify(visit.followUps),
    JSON.stringify(visit.tags),
    visit.createdAt,
  ];
}

async function ensureSchema(env) {
  if (!env.DB) return false;

  await env.DB.prepare(
    "CREATE TABLE IF NOT EXISTS visits (id TEXT PRIMARY KEY, location TEXT NOT NULL, date TEXT NOT NULL, program TEXT NOT NULL, stakeholders TEXT NOT NULL, sentiment TEXT NOT NULL, summary TEXT NOT NULL, notes TEXT NOT NULL, findings TEXT NOT NULL, blockers TEXT NOT NULL, followUps TEXT NOT NULL, tags TEXT NOT NULL, createdAt TEXT NOT NULL)",
  ).run();

  const count = await env.DB.prepare("SELECT COUNT(*) AS count FROM visits").first();
  if (Number(count?.count || 0) === 0) {
    await env.DB.batch(
      DEFAULT_VISITS.map((visit) =>
        env.DB.prepare(
          "INSERT INTO visits (id, location, date, program, stakeholders, sentiment, summary, notes, findings, blockers, followUps, tags, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        ).bind(...visitToParams(createVisit({ ...visit, createdAt: "2026-06-18T00:00:00.000Z" }))),
      ),
    );
  }

  return true;
}

async function listVisits(env) {
  if (supabaseConfigured(env)) return listSupabaseVisits(env);
  if (!env.DB) return DEFAULT_VISITS.map((visit) => createVisit(visit));
  await ensureSchema(env);
  const result = await env.DB.prepare("SELECT * FROM visits ORDER BY createdAt DESC").all();
  return (result.results || []).map(rowToVisit);
}

async function getVisit(env, id) {
  if (supabaseConfigured(env)) return getSupabaseVisit(env, id);
  if (!env.DB) {
    return DEFAULT_VISITS.map((visit) => createVisit(visit)).find((visit) => visit.id === id) || null;
  }
  await ensureSchema(env);
  const row = await env.DB.prepare("SELECT * FROM visits WHERE id = ?").bind(id).first();
  return row ? rowToVisit(row) : null;
}

async function saveVisit(env, visit) {
  if (supabaseConfigured(env)) {
    const savedVisit = await saveSupabaseVisit(env, visit);
    await safeIndexVisit(env, savedVisit);
    return savedVisit;
  }
  if (!env.DB) return visit;
  await ensureSchema(env);
  await env.DB.prepare(
    "INSERT INTO visits (id, location, date, program, stakeholders, sentiment, summary, notes, findings, blockers, followUps, tags, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
  ).bind(...visitToParams(visit)).run();
  return visit;
}

async function updateVisit(env, id, input) {
  const existing = await getVisit(env, id);
  if (!existing) return null;

  const visit = createVisit({
    ...existing,
    ...input,
    id: existing.id,
    createdAt: existing.createdAt,
  });

  if (supabaseConfigured(env)) {
    const updatedVisit = await updateSupabaseVisit(env, visit);
    if (updatedVisit) await safeIndexVisit(env, updatedVisit);
    return updatedVisit;
  }
  if (!env.DB) return { ...visit, media: existing.media || [] };

  await ensureSchema(env);
  await env.DB.prepare(
    "UPDATE visits SET location = ?, date = ?, program = ?, stakeholders = ?, sentiment = ?, summary = ?, notes = ?, findings = ?, blockers = ?, followUps = ?, tags = ? WHERE id = ?",
  ).bind(
    visit.location,
    visit.date,
    visit.program,
    visit.stakeholders,
    visit.sentiment,
    visit.summary,
    visit.notes,
    JSON.stringify(visit.findings),
    JSON.stringify(visit.blockers),
    JSON.stringify(visit.followUps),
    JSON.stringify(visit.tags),
    visit.id,
  ).run();
  return { ...visit, media: existing.media || [] };
}

async function deleteVisit(env, id) {
  if (supabaseConfigured(env)) {
    await deleteSupabaseVisit(env, id);
    return true;
  }

  if (!env.DB) return true;
  await ensureSchema(env);
  await env.DB.prepare("DELETE FROM visits WHERE id = ?").bind(id).run();
  return true;
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function unique(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function fallbackDebrief(form) {
  const text = sanitizeText(form.notes).toLowerCase();
  const blockers = [];
  const findings = [];
  const followUps = [];
  const tags = [sanitizeText(form.program, "field-notes").toLowerCase().replaceAll(" ", "-")];

  if (includesAny(text, ["travel", "transport", "bus", "distance"])) {
    blockers.push("Travel or transport constraint");
    followUps.push("Clarify travel support or identify a closer session location.");
    tags.push("travel");
  }

  if (includesAny(text, ["wage", "work hours", "daily work", "timing", "after 4", "attendance"])) {
    blockers.push("Session timing conflict");
    findings.push("Attendance is sensitive to work schedules and session timing.");
    followUps.push("Test a timing slot that does not clash with wage-work hours.");
    tags.push("attendance");
  }

  if (includesAny(text, ["stipend", "payment", "delay", "delayed"])) {
    blockers.push("Payment or stipend concern");
    followUps.push("Share a clear stipend or payment timeline before the next mobilization.");
    tags.push("stipend");
  }

  if (includesAny(text, ["seed", "input", "fertilizer", "vendor"])) {
    blockers.push("Input availability");
    findings.push("Input access is affecting confidence in program adoption.");
    followUps.push("Map nearby input vendors and communicate availability to participants.");
    tags.push("inputs");
  }

  if (includesAny(text, ["market", "buyer", "sell", "price"])) {
    blockers.push("Market linkage uncertainty");
    findings.push("Participants need clearer market assurance before committing.");
    followUps.push("Share buyer linkage options and expected price range with the group.");
    tags.push("market-linkage");
  }

  if (includesAny(text, ["bookkeeping", "records", "profit", "upi", "digital"])) {
    blockers.push("Business tracking gap");
    findings.push("Participants are using digital tools but need simpler tracking support.");
    followUps.push("Run a simple bookkeeping and monthly profit calculation session.");
    tags.push("bookkeeping");
  }

  if (includesAny(text, ["interested", "improving", "confident", "positive", "strong interest"])) {
    findings.push("Participants showed interest and openness towards the program.");
  }

  if (includesAny(text, ["worried", "concern", "problem", "issue", "lower", "low", "delay", "unclear"])) {
    findings.push("The visit surfaced concerns that should be resolved before scale-up.");
  }

  const sentiment = includesAny(text, ["worried", "concern", "problem", "issue", "delay", "lower", "low", "unclear"])
    ? "Concerned"
    : includesAny(text, ["improving", "confident", "positive", "happy", "strong interest"])
      ? "Positive"
      : "Neutral";

  if (blockers.length === 0) blockers.push("No major blocker explicitly mentioned");
  if (findings.length === 0) {
    findings.push("The visit captured useful qualitative observations from the field.");
    findings.push("The notes can be converted into structured program intelligence for managers.");
  }
  if (followUps.length === 0) {
    followUps.push("Review the observations with the program lead.");
    followUps.push("Schedule a follow-up visit to validate the pattern.");
  }

  if (includesAny(text, ["women", "shg", "female"])) tags.push("women");
  if (includesAny(text, ["farmer", "farmers", "crop"])) tags.push("farmers");
  if (includesAny(text, ["training", "stitching", "tailoring", "skilling"])) tags.push("training");

  const firstSentence = sanitizeText(form.notes).split(/[.!?]/).filter(Boolean)[0] || "The field visit captured program observations";
  const summary =
    firstSentence.length > 150
      ? `${firstSentence.slice(0, 147)}...`
      : `${firstSentence}. The debrief highlights key findings, blockers, sentiment, and follow-up actions for the program team.`;

  return communitySentimentFromNotes(form, normalizeDebrief({
    summary,
    findings: unique(findings),
    blockers: unique(blockers),
    sentiment,
    followUps: unique(followUps),
    tags: unique(tags).slice(0, 6),
  }));
}

function extractResponseText(payload) {
  if (payload.output_text) return payload.output_text;
  const chunks = [];
  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function extractGeminiText(payload) {
  const chunks = [];
  for (const candidate of payload.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.text) chunks.push(part.text);
    }
  }
  return chunks.join("\n").trim();
}

function parseJsonObject(text) {
  const cleaned = sanitizeText(text)
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1));
  return JSON.parse(cleaned);
}

async function geminiGenerate(env, contents, options = {}) {
  const key = geminiApiKey(env);
  if (!key) return null;

  const models = unique([
    geminiModel(env),
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
  ]);
  let lastError = null;

  for (const model of models) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": key,
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: options.temperature ?? 0.2,
          responseMimeType: options.responseMimeType,
        },
      }),
    });

    if (response.ok) return extractGeminiText(await response.json());

    const details = await response.text();
    lastError = `Gemini model ${model} failed: ${details.slice(0, 220)}`;

    if (![429, 500, 502, 503, 504].includes(response.status)) break;
  }

  throw new Error(lastError || "Gemini request failed.");
}

async function geminiDebrief(env, form) {
  const text = await geminiGenerate(env, [
    {
      role: "user",
      parts: [
        {
          text: [
            "Convert these field visit notes into structured program intelligence.",
            "Return only valid JSON with keys summary, findings, blockers, sentiment, followUps, tags.",
            "Sentiment must be Positive, Neutral, or Concerned.",
            "Treat sentiment as community mood, not operational risk level.",
            JSON.stringify({
              location: sanitizeText(form.location),
              date: sanitizeText(form.date),
              program: sanitizeText(form.program),
              stakeholders: sanitizeText(form.stakeholders),
              notes: sanitizeText(form.notes),
            }),
          ].join("\n"),
        },
      ],
    },
  ], { responseMimeType: "application/json" });

  return text ? communitySentimentFromNotes(form, normalizeDebrief(parseJsonObject(text))) : null;
}

async function openAiDebrief(env, form) {
  if (!env.OPENAI_API_KEY) return null;

  const model = env.OPENAI_MODEL || "gpt-4.1-mini";
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You convert field visit notes into structured program intelligence. Return only valid JSON with keys summary, findings, blockers, sentiment, followUps, tags. Sentiment must be Positive, Neutral, or Concerned. Treat sentiment as the community mood, not the operational risk level. Use Positive when participants are interested, open, optimistic, improving, confident, or the notes say the group was positive. Put issues such as travel, payment, bookkeeping, input access, or market linkage under blockers without making sentiment Concerned unless the community mood is clearly negative, distrustful, resistant, unsafe, or dropping out.",
        },
        {
          role: "user",
          content: JSON.stringify({
            location: sanitizeText(form.location),
            date: sanitizeText(form.date),
            program: sanitizeText(form.program),
            stakeholders: sanitizeText(form.stakeholders),
            notes: sanitizeText(form.notes),
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`OpenAI request failed: ${details.slice(0, 240)}`);
  }

  const payload = await response.json();
  const text = extractResponseText(payload);
  return communitySentimentFromNotes(form, normalizeDebrief(JSON.parse(text)));
}

async function generateDebrief(env, form) {
  if (!sanitizeText(form.notes)) {
    throw new Error("Field notes are required.");
  }

  try {
    const debrief = await geminiDebrief(env, form);
    if (debrief) return { provider: "gemini", debrief };
  } catch (err) {
    console.warn(err);
  }

  try {
    const debrief = await openAiDebrief(env, form);
    if (debrief) return { provider: "openai", debrief };
  } catch (err) {
    console.warn(err);
  }

  return { provider: "fallback", debrief: fallbackDebrief(form) };
}

function ragFallbackAnswer(question, matches) {
  if (!matches.length) {
    return "I could not find matching indexed visits yet. Run /api/rag/reindex after applying the pgvector schema, then ask again.";
  }

  const top = matches.slice(0, 3);
  const lines = top.map((match) => {
    const blockers = (match.visit.blockers || []).slice(0, 2).join(", ") || "no major blocker";
    return `- ${match.visit.id} in ${match.visit.location}: ${match.visit.summary} Blockers: ${blockers}.`;
  });

  return [
    `Answer: Based on the indexed visits, the closest answer for "${sanitizeText(question)}" is:`,
    ...lines,
    "",
    `Sources: ${top.map((match) => `${match.visit.id} (${match.visit.location})`).join(", ")}`,
  ].join("\n");
}

function ragSources(matches) {
  return matches.map((match, index) => ({
    rank: index + 1,
    visitId: match.visit.id,
    location: match.visit.location,
    program: match.visit.program,
    similarity: Number(match.similarity || 0),
  }));
}

function buildRagContext(matches) {
  return matches.map((match, index) => ({
    rank: index + 1,
    similarity: match.similarity,
    id: match.visit.id,
    location: match.visit.location,
    date: match.visit.date,
    program: match.visit.program,
    sentiment: match.visit.sentiment,
    summary: match.visit.summary,
    blockers: match.visit.blockers,
    followUps: match.visit.followUps,
    tags: match.visit.tags,
  }));
}

function buildRagPrompt(question, context) {
  return [
    "You are FieldSense AI, a source-grounded assistant for field visit intelligence.",
    "Use only the provided retrieved visit context.",
    "If the context is not enough, say what is missing.",
    "Keep the answer concise and manager-ready.",
    "Always include a Sources line with visit IDs and locations.",
    "",
    `Question: ${sanitizeText(question)}`,
    "",
    `Retrieved visit context: ${JSON.stringify(context)}`,
    "",
    "Return this format:",
    "Answer: <short answer>",
    "Sources: <visit IDs with locations>",
    "Recommended next action: <one practical manager action>",
  ].join("\n");
}

async function retrieveVisitMatches(env, question, topK) {
  const embedding = await createEmbedding(env, question, "query");
  const rows = await supabaseRequest(env, "/rpc/match_visit_embeddings", {
    method: "POST",
    body: JSON.stringify({
      query_embedding: vectorLiteral(embedding.values),
      match_count: topK,
    }),
  });

  const matches = (rows || []).map((row) => ({
    similarity: Number(row.similarity || 0),
    provider: row.provider || embedding.provider,
    model: row.model || embedding.model,
    visit: rowToVisit(row),
  }));

  return { embedding, matches };
}

async function generateRagAnswer(env, question, matches) {
  const context = buildRagContext(matches);
  const text = await geminiGenerate(env, [
    {
      role: "user",
      parts: [
        {
          text: buildRagPrompt(question, context),
        },
      ],
    },
  ], { temperature: 0.1 });

  return text || null;
}

async function queryRag(env, body) {
  if (!supabaseConfigured(env) || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase service role configuration is required for RAG search.");
  }

  const question = sanitizeText(body.question || body.query);
  if (!question) throw new Error("Question is required.");

  const topK = Math.max(1, Math.min(Number(body.topK || body.limit || 5) || 5, 10));
  const { embedding, matches } = await retrieveVisitMatches(env, question, topK);

  let answer = null;
  let answerProvider = "fallback";
  try {
    answer = await generateRagAnswer(env, question, matches);
    if (answer) answerProvider = "gemini";
  } catch (err) {
    console.warn(err);
  }

  if (!answer) answer = ragFallbackAnswer(question, matches);

  return {
    question,
    answer,
    answerProvider,
    retrieval: {
      provider: embedding.provider,
      model: embedding.model,
      topK,
      count: matches.length,
    },
    sources: ragSources(matches),
    pipeline: [
      "question_normalization",
      "query_embedding",
      "pgvector_retrieval",
      "context_builder",
      "prompt_template",
      "answer_generation",
      "source_packaging",
    ],
    matches,
  };
}

async function reindexVisits(env) {
  if (!supabaseConfigured(env) || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase service role configuration is required for RAG indexing.");
  }

  const visits = await listVisits(env);
  const results = [];

  for (const visit of visits) {
    const result = await safeIndexVisit(env, visit);
    results.push({
      visitId: visit.id,
      indexed: Boolean(result.indexed),
      provider: result.provider || null,
      model: result.model || null,
      reason: result.reason || null,
    });
  }

  return {
    total: visits.length,
    indexed: results.filter((result) => result.indexed).length,
    failed: results.filter((result) => !result.indexed).length,
    provider: embeddingProvider(env),
    model: embeddingModel(env),
    results,
  };
}

async function handleApi(request, env, pathname) {
  if (pathname === "/api/health" && request.method === "GET") {
    return json({
      ok: true,
      service: "FieldSense API",
      storage: supabaseConfigured(env) ? "supabase-postgresql" : env.DB ? "d1" : "fallback",
      mediaStorage: supabaseConfigured(env) && env.SUPABASE_SERVICE_ROLE_KEY ? "supabase-storage" : "not-configured",
      auth: supabaseConfigured(env) && supabaseAuthKey(env) ? "supabase-auth" : "not-configured",
      ai: geminiApiKey(env) ? "gemini" : env.OPENAI_API_KEY ? "openai" : "fallback",
      model: geminiApiKey(env) ? geminiModel(env) : env.OPENAI_API_KEY ? env.OPENAI_MODEL || "gpt-4.1-mini" : null,
      embeddings: {
        provider: embeddingProvider(env),
        model: embeddingModel(env),
        dimensions: EMBEDDING_DIMENSIONS,
      },
    });
  }

  if (pathname === "/api/auth/login" && request.method === "POST") {
    const body = await readJson(request);
    const email = sanitizeText(body.email).toLowerCase();
    const password = String(body.password || "");
    if (!email || !password) return error("Email and password are required.", 422);

    const payload = await loginWithSupabase(env, email, password);
    const role = await getUserRole(env, payload.user?.email || email);
    const user = {
      id: payload.user?.id,
      email: sanitizeText(payload.user?.email || email).toLowerCase(),
      role,
      roleLabel: roleLabel(role),
    };

    return json({ user }, 200, {
      "set-cookie": sessionCookie(payload.access_token, request, payload.expires_in || 60 * 60 * 24 * 7),
    });
  }

  if (pathname === "/api/auth/logout" && request.method === "POST") {
    return json({ ok: true }, 200, {
      "set-cookie": sessionCookie("", request, 0),
    });
  }

  if (pathname === "/api/auth/me" && request.method === "GET") {
    const session = await getSession(request, env);
    return json({ user: session?.user || null });
  }

  if (pathname === "/api/rag/reindex" && request.method === "POST") {
    await requireSession(request, env, ["admin"]);
    return json(await reindexVisits(env));
  }

  if (pathname === "/api/rag/query" && request.method === "POST") {
    await requireSession(request, env, ["manager", "admin"]);
    return json(await queryRag(env, await readJson(request)));
  }

  if (pathname === "/api/visits" && request.method === "GET") {
    await requireSession(request, env);
    return json({ visits: await listVisits(env) });
  }

  if (pathname === "/api/visits" && request.method === "POST") {
    await requireSession(request, env, ["field_staff", "admin"]);
    const body = await readJson(request);
    if (!sanitizeText(body.notes)) return error("Field notes are required.", 422);
    const visit = createVisit(body);
    return json({ visit: await saveVisit(env, visit) }, 201);
  }

  const visitMatch = pathname.match(/^\/api\/visits\/([^/]+)$/);
  if (visitMatch && request.method === "GET") {
    await requireSession(request, env);
    const visit = await getVisit(env, decodeURIComponent(visitMatch[1]));
    return visit ? json({ visit }) : error("Visit not found.", 404);
  }

  if (visitMatch && request.method === "PUT") {
    await requireSession(request, env, ["field_staff", "admin"]);
    const body = await readJson(request);
    if (!sanitizeText(body.notes)) return error("Field notes are required.", 422);
    const hasDebrief = sanitizeText(body.summary) && Array.isArray(body.findings) && Array.isArray(body.blockers);
    const debrief = hasDebrief ? normalizeDebrief(body) : (await generateDebrief(env, body)).debrief;
    const visit = await updateVisit(env, decodeURIComponent(visitMatch[1]), { ...body, ...debrief });
    return visit ? json({ visit }) : error("Visit not found.", 404);
  }

  if (visitMatch && request.method === "DELETE") {
    await requireSession(request, env, ["admin"]);
    await deleteVisit(env, decodeURIComponent(visitMatch[1]));
    return json({ ok: true });
  }

  const mediaUploadMatch = pathname.match(/^\/api\/visits\/([^/]+)\/media$/);
  if (mediaUploadMatch && request.method === "POST") {
    await requireSession(request, env, ["field_staff", "admin"]);
    const visitId = decodeURIComponent(mediaUploadMatch[1]);
    const visit = await getVisit(env, visitId);
    if (!visit) return error("Visit not found.", 404);
    const form = await request.formData();
    const media = await uploadVisitMedia(env, visitId, form.getAll("files"));
    return json({ media }, 201);
  }

  const mediaMatch = pathname.match(/^\/api\/media\/([^/]+)$/);
  if (mediaMatch && request.method === "GET") {
    await requireSession(request, env);
    return serveMedia(env, decodeURIComponent(mediaMatch[1]), request);
  }

  if (pathname === "/api/debrief" && request.method === "POST") {
    await requireSession(request, env, ["field_staff", "admin"]);
    const body = await readJson(request);
    const result = await generateDebrief(env, body);
    return json(result);
  }

  return error("API route not found.", 404);
}

export default {
  async fetch(request, env, ctx) {
    void ctx;

    try {
      const url = new URL(request.url);
      const pathname = url.pathname.replace(/\/+$/, "") || "/";

      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204 });
      }

      if (pathname === "/openapi.json") {
        return json(openApiSpec);
      }

      if (pathname === "/api/docs") {
        return html(docsPage);
      }

      if (pathname.startsWith("/api/")) {
        return await handleApi(request, env, pathname);
      }

      if (pathname === "/") {
        return html(page);
      }

      return new Response("Not found", { status: 404 });
    } catch (err) {
      if ((err.status || 500) >= 500) console.error(err);
      else console.warn(err.message || err);
      return error(err.message || "Internal server error.", err.status || 500);
    }
  },
};