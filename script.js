// Inventory Status Dashboard — Portfolio Demo
// All inventory records in this file are fictional demo data.
// No production endpoint is used and no operational data is transmitted.

const UPDATE_PAGE_SIZE = 5;
const EXPIRY_PAGE_SIZE = 3;

// Faster timings for portfolio viewing.
const MOCK_SYNC_EVERY_MS = 12000;
const UPDATE_PAGE_EVERY_MS = 8000;
const EXPIRY_PAGE_EVERY_MS = 10000;

const mockDataSets = [
  {
    updatesToday: [
      { itemAr: "باراسيتامول 500 مجم", itemEn: "Paracetamol 500 mg", status: "available", time: "08:35", date: "Demo" },
      { itemAr: "أملوديبين 5 مجم", itemEn: "Amlodipine 5 mg", status: "limited", time: "08:48", date: "Demo" },
      { itemAr: "ميتفورمين 500 مجم", itemEn: "Metformin 500 mg", status: "available", time: "09:02", date: "Demo" },
      { itemAr: "ليفوتيروكسين 50 مكجم", itemEn: "Levothyroxine 50 mcg", status: "expected", time: "09:15", date: "Demo" },
      { itemAr: "روسوفاستاتين 10 مجم", itemEn: "Rosuvastatin 10 mg", status: "unavailable", time: "09:28", date: "Demo" },
      { itemAr: "كلوبيدوجريل 75 مجم", itemEn: "Clopidogrel 75 mg", status: "available", time: "09:41", date: "Demo" },
      { itemAr: "تامسولوسين 0.4 مجم", itemEn: "Tamsulosin 0.4 mg", status: "limited", time: "09:53", date: "Demo" },
      { itemAr: "إيزوميبرازول 40 مجم", itemEn: "Esomeprazole 40 mg", status: "available", time: "10:07", date: "Demo" },
      { itemAr: "ليفِتيراسيتام 500 مجم", itemEn: "Levetiracetam 500 mg", status: "expected", time: "10:18", date: "Demo" },
      { itemAr: "فوروسيميد 40 مجم", itemEn: "Furosemide 40 mg", status: "unavailable", time: "10:31", date: "Demo" }
    ],
    expiry30: [
      { itemAr: "سيفوروكسيم معلق", itemEn: "Cefuroxime Suspension", date: "05/09/2026", days: 12 },
      { itemAr: "لاكتولوز شراب", itemEn: "Lactulose Syrup", date: "11/09/2026", days: 18 },
      { itemAr: "فينيـتوين 100 مجم", itemEn: "Phenytoin 100 mg", date: "18/09/2026", days: 25 },
      { itemAr: "ميترونيدازول معلق", itemEn: "Metronidazole Suspension", date: "20/09/2026", days: 27 },
      { itemAr: "بريدنيزولون 20 مجم", itemEn: "Prednisolone 20 mg", date: "21/09/2026", days: 28 },
      { itemAr: "فيتامين ب المركب", itemEn: "Vitamin B Complex", date: "22/09/2026", days: 29 }
    ],
    expiry60: [
      { itemAr: "كيبرا شراب", itemEn: "Keppra Syrup", date: "03/10/2026", days: 40 },
      { itemAr: "فيراباميل 40 مجم", itemEn: "Verapamil 40 mg", date: "13/10/2026", days: 50 },
      { itemAr: "باكلوفين 10 مجم", itemEn: "Baclofen 10 mg", date: "18/10/2026", days: 55 },
      { itemAr: "سيليكوكسيب 200 مجم", itemEn: "Celecoxib 200 mg", date: "19/10/2026", days: 56 },
      { itemAr: "تيلميسارتان 80 مجم", itemEn: "Telmisartan 80 mg", date: "21/10/2026", days: 58 },
      { itemAr: "فينوفيبرات 145 مجم", itemEn: "Fenofibrate 145 mg", date: "22/10/2026", days: 59 }
    ]
  },
  {
    updatesToday: [
      { itemAr: "باراسيتامول 500 مجم", itemEn: "Paracetamol 500 mg", status: "available", time: "08:35", date: "Demo" },
      { itemAr: "أملوديبين 5 مجم", itemEn: "Amlodipine 5 mg", status: "available", time: "10:42", date: "Demo" },
      { itemAr: "ميتفورمين 500 مجم", itemEn: "Metformin 500 mg", status: "limited", time: "10:44", date: "Demo" },
      { itemAr: "ليفوتيروكسين 50 مكجم", itemEn: "Levothyroxine 50 mcg", status: "available", time: "10:46", date: "Demo" },
      { itemAr: "روسوفاستاتين 10 مجم", itemEn: "Rosuvastatin 10 mg", status: "expected", time: "10:49", date: "Demo" },
      { itemAr: "كلوبيدوجريل 75 مجم", itemEn: "Clopidogrel 75 mg", status: "limited", time: "10:51", date: "Demo" },
      { itemAr: "تامسولوسين 0.4 مجم", itemEn: "Tamsulosin 0.4 mg", status: "available", time: "10:54", date: "Demo" },
      { itemAr: "إيزوميبرازول 40 مجم", itemEn: "Esomeprazole 40 mg", status: "unavailable", time: "10:57", date: "Demo" },
      { itemAr: "ليفِتيراسيتام 500 مجم", itemEn: "Levetiracetam 500 mg", status: "available", time: "11:00", date: "Demo" },
      { itemAr: "فوروسيميد 40 مجم", itemEn: "Furosemide 40 mg", status: "limited", time: "11:03", date: "Demo" }
    ],
    expiry30: [
      { itemAr: "سيفوروكسيم معلق", itemEn: "Cefuroxime Suspension", date: "05/09/2026", days: 12 },
      { itemAr: "لاكتولوز شراب", itemEn: "Lactulose Syrup", date: "11/09/2026", days: 18 },
      { itemAr: "فينيـتوين 100 مجم", itemEn: "Phenytoin 100 mg", date: "18/09/2026", days: 25 },
      { itemAr: "ميترونيدازول معلق", itemEn: "Metronidazole Suspension", date: "20/09/2026", days: 27 },
      { itemAr: "بريدنيزولون 20 مجم", itemEn: "Prednisolone 20 mg", date: "21/09/2026", days: 28 },
      { itemAr: "فيتامين ب المركب", itemEn: "Vitamin B Complex", date: "22/09/2026", days: 29 }
    ],
    expiry60: [
      { itemAr: "كيبرا شراب", itemEn: "Keppra Syrup", date: "03/10/2026", days: 40 },
      { itemAr: "فيراباميل 40 مجم", itemEn: "Verapamil 40 mg", date: "13/10/2026", days: 50 },
      { itemAr: "باكلوفين 10 مجم", itemEn: "Baclofen 10 mg", date: "18/10/2026", days: 55 },
      { itemAr: "سيليكوكسيب 200 مجم", itemEn: "Celecoxib 200 mg", date: "19/10/2026", days: 56 },
      { itemAr: "تيلميسارتان 80 مجم", itemEn: "Telmisartan 80 mg", date: "21/10/2026", days: 58 },
      { itemAr: "فينوفيبرات 145 مجم", itemEn: "Fenofibrate 145 mg", date: "22/10/2026", days: 59 }
    ]
  }
];

let mockDataIndex = 0;
let inventoryData = structuredClone(mockDataSets[mockDataIndex]);
let updatePageIndex = 0;
let expiry30PageIndex = 0;
let expiry60PageIndex = 0;
let updateTimer = null;
let expiryTimer = null;

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function chunk(items, size) {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages.length ? pages : [[]];
}

function iconForStatus(status) {
  if (status === "available") return "✓";
  if (status === "limited") return "!";
  if (status === "unavailable") return "×";
  return "⏱";
}

function setSyncStatus(text) {
  document.getElementById("syncStatus").textContent = text;
}

function simulateSync() {
  mockDataIndex = (mockDataIndex + 1) % mockDataSets.length;
  inventoryData = structuredClone(mockDataSets[mockDataIndex]);

  updatePageIndex = 0;
  expiry30PageIndex = 0;
  expiry60PageIndex = 0;

  renderAll(true);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Riyadh"
  }).format(new Date());

  setSyncStatus(`Demo sync ${time}`);
}

function renderUpdateCard(item) {
  const status = item.status || "expected";

  return `
    <article class="card" data-status="${escapeHtml(status)}">
      <div class="icon">${iconForStatus(status)}</div>
      <div class="info">
        <h3 class="title">${escapeHtml(item.itemAr || item.itemEn || "غير محدد")}</h3>
        <p class="sub en">${escapeHtml(item.itemEn || item.itemAr || "")}</p>
      </div>
      <div class="meta">
        <strong>${escapeHtml(item.time || "--:--")}</strong>
        <span>${escapeHtml(item.date || "")}</span>
      </div>
    </article>
  `;
}

function renderExpiryCard(item, status) {
  return `
    <article class="card expiry-card" data-status="${status}">
      <div class="icon">${status === "unavailable" ? "×" : "!"}</div>
      <div class="info">
        <h3 class="title">${escapeHtml(item.itemAr || item.itemEn || "غير محدد")}</h3>
        <p class="sub en">${escapeHtml(item.itemEn || item.itemAr || "")}</p>
      </div>
      <div class="meta">
        <strong>${escapeHtml(item.date || "")}</strong>
        <span>${escapeHtml(item.days !== undefined ? `${item.days} days` : "Expiry")}</span>
      </div>
    </article>
  `;
}

function fillSlots(html, count, size) {
  const missing = Math.max(0, size - count);
  return html + Array.from({ length: missing }, () => `<div class="empty-slot"></div>`).join("");
}

function animatePageChange(elements, draw) {
  const targets = Array.isArray(elements) ? elements : [elements];
  targets.forEach((element) => {
    if (element) element.classList.add("page-changing");
  });

  setTimeout(() => {
    draw();
    requestAnimationFrame(() => {
      targets.forEach((element) => {
        if (element) element.classList.remove("page-changing");
      });
    });
  }, 620);
}

function renderUpdates(animate = false) {
  const root = document.getElementById("updatesList");
  const pill = document.getElementById("updatePagePill");

  const draw = () => {
    const updates = inventoryData.updatesToday || [];
    const pages = chunk(updates, UPDATE_PAGE_SIZE);
    if (updatePageIndex >= pages.length) updatePageIndex = 0;

    const current = pages[updatePageIndex];

    if (!current.length) {
      root.innerHTML = `
        <div class="empty-message">
          <div>
            <strong>لا توجد تحديثات لهذا اليوم</strong>
            <span class="en">No updates for today</span>
          </div>
        </div>
      `;
      pill.textContent = "0 / 0";
      return;
    }

    const html = current.map(renderUpdateCard).join("");
    root.innerHTML = fillSlots(html, current.length, UPDATE_PAGE_SIZE);
    pill.textContent = `${updatePageIndex + 1} / ${pages.length}`;
  };

  if (animate) animatePageChange(root, draw);
  else draw();
}

function renderExpiryList(id, items, status, pageIndex, pillId, label) {
  const root = document.getElementById(id);
  const pill = document.getElementById(pillId);
  const list = items || [];
  const pages = chunk(list, EXPIRY_PAGE_SIZE);

  if (pageIndex >= pages.length) pageIndex = 0;
  const current = pages[pageIndex];

  if (!current.length) {
    root.innerHTML = `
      <div class="empty-message">
        <div>
          <strong>لا توجد أصناف</strong>
          <span class="en">No items</span>
        </div>
      </div>
    `;
    if (pill) pill.textContent = `${label} 0/0`;
    return;
  }

  const html = current.map((item) => renderExpiryCard(item, status)).join("");
  root.innerHTML = fillSlots(html, current.length, EXPIRY_PAGE_SIZE);

  if (pill) pill.textContent = `${label} ${pageIndex + 1}/${pages.length}`;
}

function renderExpiry(animate = false) {
  const root30 = document.getElementById("expiry30");
  const root60 = document.getElementById("expiry60");

  const draw = () => {
    const pages30 = chunk(inventoryData.expiry30 || [], EXPIRY_PAGE_SIZE);
    const pages60 = chunk(inventoryData.expiry60 || [], EXPIRY_PAGE_SIZE);

    if (expiry30PageIndex >= pages30.length) expiry30PageIndex = 0;
    if (expiry60PageIndex >= pages60.length) expiry60PageIndex = 0;

    renderExpiryList("expiry30", inventoryData.expiry30, "unavailable", expiry30PageIndex, "expiry30PagePill", "30D");
    renderExpiryList("expiry60", inventoryData.expiry60, "limited", expiry60PageIndex, "expiry60PagePill", "60D");
  };

  if (animate) animatePageChange([root30, root60], draw);
  else draw();
}

function renderAll(animate = false) {
  renderUpdates(animate);
  renderExpiry(animate);
}

function startUpdateRotation() {
  if (updateTimer) clearInterval(updateTimer);

  updateTimer = setInterval(() => {
    const pages = chunk(inventoryData.updatesToday || [], UPDATE_PAGE_SIZE);
    if (pages.length <= 1) return;

    updatePageIndex = (updatePageIndex + 1) % pages.length;
    renderUpdates(true);
  }, UPDATE_PAGE_EVERY_MS);
}

function startExpiryRotation() {
  if (expiryTimer) clearInterval(expiryTimer);

  expiryTimer = setInterval(() => {
    const pages30 = chunk(inventoryData.expiry30 || [], EXPIRY_PAGE_SIZE);
    const pages60 = chunk(inventoryData.expiry60 || [], EXPIRY_PAGE_SIZE);

    if (pages30.length > 1) expiry30PageIndex = (expiry30PageIndex + 1) % pages30.length;
    if (pages60.length > 1) expiry60PageIndex = (expiry60PageIndex + 1) % pages60.length;

    renderExpiry(true);
  }, EXPIRY_PAGE_EVERY_MS);
}

function updateClock() {
  const now = new Date();

  document.getElementById("timePill").textContent =
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Riyadh"
    }).format(now);

  document.getElementById("datePill").textContent =
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Asia/Riyadh"
    }).format(now);
}

function init() {
  updateClock();
  setInterval(updateClock, 60000);

  renderAll();
  setSyncStatus("Demo data • simulated");

  setInterval(simulateSync, MOCK_SYNC_EVERY_MS);
  startUpdateRotation();
  startExpiryRotation();
}

init();
