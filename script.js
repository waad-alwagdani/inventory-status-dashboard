// Inventory Status Dashboard — Showcase Simulation
// Fictional display content only. This file does not represent production architecture,
// data sources, integrations, business rules, or synchronization logic.

const FRAME_MS = 8000;

const showcaseFrames = [
  {
    main: [
      ["صنف A-101", "Item A-101", "available", "08:35"],
      ["صنف B-204", "Item B-204", "limited", "08:48"],
      ["صنف C-318", "Item C-318", "available", "09:02"],
      ["صنف D-427", "Item D-427", "expected", "09:15"],
      ["صنف E-533", "Item E-533", "unavailable", "09:28"]
    ],
    top: [
      ["صنف F-112", "Item F-112", "05/09/2026", "12 days"],
      ["صنف G-226", "Item G-226", "11/09/2026", "18 days"],
      ["صنف H-341", "Item H-341", "18/09/2026", "25 days"]
    ],
    bottom: [
      ["صنف J-455", "Item J-455", "03/10/2026", "40 days"],
      ["صنف K-568", "Item K-568", "13/10/2026", "50 days"],
      ["صنف L-672", "Item L-672", "18/10/2026", "55 days"]
    ]
  },
  {
    main: [
      ["صنف M-705", "Item M-705", "available", "09:41"],
      ["صنف N-819", "Item N-819", "limited", "09:53"],
      ["صنف P-924", "Item P-924", "unavailable", "10:07"],
      ["صنف Q-038", "Item Q-038", "expected", "10:18"],
      ["صنف R-146", "Item R-146", "available", "10:31"]
    ],
    top: [
      ["صنف S-259", "Item S-259", "20/09/2026", "27 days"],
      ["صنف T-363", "Item T-363", "21/09/2026", "28 days"],
      ["صنف U-477", "Item U-477", "22/09/2026", "29 days"]
    ],
    bottom: [
      ["صنف V-581", "Item V-581", "19/10/2026", "56 days"],
      ["صنف W-694", "Item W-694", "21/10/2026", "58 days"],
      ["صنف X-808", "Item X-808", "22/10/2026", "59 days"]
    ]
  }
];

const iconFor = (status) => ({
  available: "✓",
  limited: "!",
  unavailable: "×",
  expected: "⏱"
}[status] || "•");

function safe(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function statusCard([ar, en, status, time]) {
  return `
    <article class="card" data-status="${safe(status)}">
      <div class="icon">${iconFor(status)}</div>
      <div class="info">
        <h3 class="title">${safe(ar)}</h3>
        <p class="sub en">${safe(en)}</p>
      </div>
      <div class="meta">
        <strong>${safe(time)}</strong>
        <span>Demo</span>
      </div>
    </article>`;
}

function expiryCard([ar, en, date, days], status) {
  return `
    <article class="card expiry-card" data-status="${status}">
      <div class="icon">${status === "unavailable" ? "×" : "!"}</div>
      <div class="info">
        <h3 class="title">${safe(ar)}</h3>
        <p class="sub en">${safe(en)}</p>
      </div>
      <div class="meta">
        <strong>${safe(date)}</strong>
        <span>${safe(days)}</span>
      </div>
    </article>`;
}

function fadeAndReplace(elements, draw) {
  elements.forEach((element) => element.classList.add("page-changing"));

  setTimeout(() => {
    draw();

    requestAnimationFrame(() => {
      elements.forEach((element) => {
        element.classList.remove("page-changing");
      });
    });
  }, 620);
}

let frameIndex = 0;

function showFrame(animate = false) {
  const frame = showcaseFrames[frameIndex];

  const updates = document.getElementById("updatesList");
  const soon = document.getElementById("expiry30");
  const later = document.getElementById("expiry60");

  const draw = () => {
    updates.innerHTML = frame.main.map(statusCard).join("");
    soon.innerHTML = frame.top
      .map((item) => expiryCard(item, "unavailable"))
      .join("");

    later.innerHTML = frame.bottom
      .map((item) => expiryCard(item, "limited"))
      .join("");

    const page = `${frameIndex + 1} / ${showcaseFrames.length}`;

    document.getElementById("updatePagePill").textContent = page;
    document.getElementById("expiry30PagePill").textContent = `30D ${page}`;
    document.getElementById("expiry60PagePill").textContent = `60D ${page}`;
  };

  if (animate) {
    fadeAndReplace([updates, soon, later], draw);
  } else {
    draw();
  }
}

function updateClock() {
  const now = new Date();

  document.getElementById("timePill").textContent =
    now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });

  document.getElementById("datePill").textContent =
    now.toLocaleDateString("en-GB");
}

updateClock();
showFrame();

setInterval(updateClock, 60000);

setInterval(() => {
  frameIndex = (frameIndex + 1) % showcaseFrames.length;
  showFrame(true);
}, FRAME_MS);
