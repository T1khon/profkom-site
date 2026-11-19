/* =========================================================
   Общие элементы: шапка, подвал, 3D-объекты, лента новостей
   ========================================================= */
(function () {
  const S = window.SITE || {};
  document.documentElement.classList.add("js");

  /* ---------- Появление при прокрутке ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.08 })
    : null;
  function observe(nodes) { nodes.forEach((n) => (io ? io.observe(n) : n.classList.add("in"))); }

  /* ---------- Логотип из макета ---------- */
  const LOGO_PATHS = `<path d="M242.98 291.751H241.333V283.297H237.25V291.751H235.603V281.721H242.98V291.751Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M256.942 285.016C256.942 286.865 255.509 288.312 253.617 288.312H251.569V291.751H249.922V281.721H253.617C255.509 281.721 256.942 283.155 256.942 285.017V285.016ZM255.295 285.016C255.295 283.999 254.593 283.269 253.618 283.269H251.57V286.764H253.618C254.594 286.764 255.295 286.02 255.295 285.016Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M262.519 286.736C262.519 283.827 264.825 281.535 267.718 281.535C270.611 281.535 272.921 283.827 272.921 286.736C272.921 289.645 270.628 291.938 267.718 291.938C264.809 291.938 262.519 289.645 262.519 286.736ZM271.272 286.736C271.272 284.673 269.724 283.14 267.718 283.14C265.712 283.14 264.166 284.673 264.166 286.736C264.166 288.799 265.714 290.332 267.718 290.332C269.723 290.332 271.272 288.799 271.272 286.736Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M284.71 290.748V291.894H283.092V290.748C280.312 290.518 278.421 289.1 278.421 286.736C278.421 284.373 280.311 282.953 283.092 282.724V281.579H284.71V282.724C287.475 282.954 289.367 284.387 289.367 286.736C289.367 289.086 287.475 290.518 284.71 290.748ZM283.092 289.244V284.229C281.186 284.401 280.069 285.203 280.069 286.736C280.069 288.27 281.186 289.072 283.092 289.244V289.244ZM287.72 286.735C287.72 285.202 286.601 284.4 284.711 284.228V289.243C286.601 289.055 287.72 288.254 287.72 286.735V286.735Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M333.864 291.78H332.216V284.63L329.165 289.673H328.964L325.912 284.615V291.78H324.265V281.751H326.041L329.065 286.765L332.101 281.751H333.864V291.78Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M300.805 291.752L296.851 286.981V291.752H295.204V281.723H296.851V286.222L300.662 281.723H302.625L298.57 286.609L302.768 291.752H300.805Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M307.852 286.736C307.852 283.827 310.157 281.535 313.051 281.535C315.945 281.535 318.253 283.827 318.253 286.736C318.253 289.645 315.961 291.938 313.051 291.938C310.142 291.938 307.852 289.645 307.852 286.736ZM316.605 286.736C316.605 284.673 315.057 283.14 313.051 283.14C311.045 283.14 309.499 284.673 309.499 286.736C309.499 288.799 311.046 290.332 313.051 290.332C315.056 290.332 316.605 288.799 316.605 286.736Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M235.246 314.561H233.628V306.256H229.615V314.561H227.996V304.708H235.246V314.561Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M241.343 309.969C241.157 306.835 243.69 304.336 246.812 304.549C249.327 304.72 251.418 306.85 251.546 309.367C251.704 312.459 249.231 314.922 246.134 314.748C243.61 314.606 241.491 312.491 241.343 309.969ZM249.934 309.647C249.934 307.619 248.414 306.114 246.443 306.114C244.473 306.114 242.953 307.62 242.953 309.647C242.953 311.673 244.474 313.181 246.443 313.181C248.413 313.181 249.934 311.674 249.934 309.647Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M256.802 313.077C257.956 313.232 258.646 312.696 258.646 310.417V304.715H265.248V314.568H263.63V306.262H260.264V310.387C260.264 313.978 258.632 314.752 256.802 314.568V313.077Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M278.476 307.903L273.83 314.59H272.563V304.736H274.182V311.422L278.828 304.736H280.095V314.59H278.476V307.903Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M293.321 306.266H290.548V314.571H288.931V306.266H286.143V304.718H293.321V306.266Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M305.604 313.033V314.582H299.62V304.729H305.533V306.277H301.239V308.838H305.18V310.373H301.239V313.033H305.604Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M317.924 314.571L315.756 311.01L313.588 314.571H311.744L314.84 309.504L311.927 304.718H313.756L315.756 307.997L317.754 304.718H319.599L316.684 309.504L319.768 314.571H317.924Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M331.418 312.605H327.224L326.534 314.591H324.774L328.35 304.736H330.292L333.854 314.591H332.107L331.417 312.605H331.418ZM330.884 311.084L329.321 306.636L327.758 311.084H330.884Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M194.901 270.72H219.875L194.874 325.577H169.901L194.901 270.72Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M171.826 260H196.8L171.8 314.857H146.826L171.826 260Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M134.074 281.437H159.047L134.047 336.293H109.074L134.074 281.437Z" fill-rule="evenodd" clip-rule="evenodd" /><path d="M111 270.72H135.973L110.973 325.577H86L111 270.72Z" fill-rule="evenodd" clip-rule="evenodd" />`;
  const LOGO = () => `<svg viewBox="84 258 252 80" fill="currentColor" role="img" aria-label="Профком Политеха">${LOGO_PATHS}</svg>`;
  const MARK = () => `<svg viewBox="84 258 138 80" fill="currentColor" aria-hidden="true">${LOGO_PATHS}</svg>`;
  window.LOGO = LOGO;

  /* ---------- 3D-объекты из макета ---------- */
  const OBJ = { wave: "heart", heart: "heart", wow: "star", star: "star", ok: "wallet", wallet: "wallet", star2: "star2" };
  const obj = (name) => `<img class="obj" src="img/3d/${OBJ[name] || "heart"}.png" alt="" loading="lazy">`;
  window.obj = obj;

  /* ---------- Иконки ---------- */
  const ICON = {
    vk: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.8 17.5c-5.5 0-8.6-3.8-8.8-10h2.8c.1 4.6 2.1 6.5 3.7 6.9V7.5h2.6v4c1.6-.2 3.3-2 3.8-4h2.6c-.4 2.4-2.2 4.2-3.5 5 1.3.6 3.3 2.2 4.1 5h-2.9c-.6-1.9-2.1-3.4-4.1-3.6v3.6h-.3Z"/></svg>`,
    tg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.7 4.3 2.9 11.2c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 1.7 5.4c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8l3-14.1c.3-1.2-.5-1.8-1.5-1.3ZM9.5 14.6l8.1-5.1c.4-.2.7-.1.4.2l-6.9 6.2-.3 3.1-1.3-4.4Z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>`
  };

  /* ---------- Навигация ---------- */
  const NAV = [
    ["index.html", "Главная"], ["about.html", "О нас"], ["benefits.html", "Льготы и помощь"],
    ["join.html", "Как вступить"], ["news.html", "Новости"], ["documents.html", "Документы"],
    ["team.html", "Команда"], ["faq.html", "FAQ"], ["contacts.html", "Контакты"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html");

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="logo" aria-label="Профком Политеха — на главную">${LOGO()}</a>
        <nav class="nav" id="nav" aria-label="Основное меню">
          ${NAV.map(([href, label]) => `<a href="${href}"${href === here ? ' class="active" aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <a href="join.html" class="btn header-cta">Вступить</a>
        <button class="burger" id="burger" aria-label="Открыть меню" aria-expanded="false" aria-controls="nav"><span></span></button>
      </div>`;
    const burger = document.getElementById("burger");
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
    });
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    const tel = (S.phone || "").replace(/[^\d+]/g, "");
    footer.innerHTML = `
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="logo">${LOGO()}</a>
            <p>${S.name}. Твой проф — всегда на твоей стороне.</p>
            <div class="socials">
              <a href="${S.vk}" target="_blank" rel="noopener" aria-label="ВКонтакте">${ICON.vk}</a>
              <a href="${S.tg}" target="_blank" rel="noopener" aria-label="Telegram">${ICON.tg}</a>
              <a href="mailto:${S.email}" aria-label="Почта">${ICON.mail}</a>
            </div>
          </div>
          <div>
            <h4>Разделы</h4>
            <ul>${NAV.slice(1).map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Приходи</h4>
            <ul>
              <li>${S.address}</li>
              <li>${S.room}</li>
              <li class="mt-8"><span class="hours"><span>${S.hours.days}</span><span>${S.hours.time}</span></span></li>
              <li class="mt-8"><a href="tel:${tel}">${S.phone || ""}</a></li>
              <li><a href="mailto:${S.email}">${S.email}</a></li>
              <li><a href="${S.bot}" target="_blank" rel="noopener">Чат-бот «Твой проф»</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Профком Политеха</span>
          <span>Московский политехнический университет</span>
        </div>
      </div>`;
  }

  /* ---------- Подстановка контактов ---------- */
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (key === "email") { el.href = "mailto:" + S.email; if (!el.textContent.trim()) el.textContent = S.email; }
    else if (key === "phone" || key === "phone2") { el.href = "tel:" + S[key].replace(/доб.*$/, "").replace(/[^\d+]/g, ""); if (!el.textContent.trim()) el.textContent = S[key]; }
    else if (S[key]) el.href = S[key];
  });
  document.querySelectorAll("[data-doc]").forEach((el) => {
    const url = (window.DOCS || {})[el.dataset.doc];
    if (url) el.href = url;
  });

  /* ---------- 3D-объекты и логотипы в разметке ---------- */
  document.querySelectorAll("[data-mascot], [data-obj]").forEach((el) => {
    if (el.classList.contains("avatar")) { el.innerHTML = MARK(); return; }
    el.innerHTML = obj(el.dataset.obj || el.dataset.mascot);
  });
  document.querySelectorAll("[data-logo]").forEach((el) => { el.innerHTML = MARK(); });

  /* ---------- Лента новостей ---------- */
  const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  function newsCard(n) {
    const c = n.cover || {};
    const style = c.style || "light";
    const cover = c.image
      ? `<img class="cover-img" src="${c.image}" alt="" loading="lazy">`
      : `<div class="cover-art ${style}">
           <span class="cover-logo" style="color:${style === "light" ? "#272727" : "#fff"}">${LOGO()}</span>
           ${c.mascot ? `<span class="cover-obj">${obj(c.mascot)}</span>` : ""}
           <div class="cover-title">${c.title || n.title}</div>
         </div>`;
    const tag = n.link ? "a" : "article";
    const attrs = n.link ? ` href="${n.link}" target="_blank" rel="noopener"` : "";
    return `
      <${tag} class="news-card reveal"${attrs}>
        <div class="news-cover">${cover}</div>
        <div class="news-body">
          <div class="news-meta"><span class="pill">${n.category}</span><span class="date">${fmt(n.date)}</span></div>
          <h3>${n.title}</h3>
          <p>${n.text}</p>
        </div>
      </${tag}>`;
  }

  document.querySelectorAll("[data-news]").forEach((box) => {
    const limit = parseInt(box.dataset.news, 10) || Infinity;
    const all = (window.NEWS || []).slice().sort((a, b) => b.date.localeCompare(a.date));
    const render = (cat) => {
      const list = all.filter((n) => !cat || n.category === cat).slice(0, limit);
      box.innerHTML = list.length ? list.map(newsCard).join("") : `<p class="lead">Пока новостей нет.</p>`;
      observe(box.querySelectorAll(".reveal"));
    };
    const filters = document.querySelector(`[data-news-filters="${box.id}"]`);
    if (filters) {
      const cats = ["", ...new Set(all.map((n) => n.category))];
      filters.innerHTML = cats.map((c) => `<button data-cat="${c}" class="${c ? "" : "active"}">${c || "Все"}</button>`).join("");
      filters.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        filters.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
        render(b.dataset.cat);
      });
    }
    render("");
  });

  observe(document.querySelectorAll(".reveal"));

  /* ---------- Счётчики ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const fmtNum = (v, dec) => v.toLocaleString("ru-RU", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const co = "IntersectionObserver" in window ? new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split(".")[1] || "").length;
    const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1200;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = pre + fmtNum(p < 1 ? (dec ? v : Math.round(v)) : end, dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    co.unobserve(el);
  }), { threshold: 0.5 }) : null;
  counters.forEach((c) => {
    const dec = (c.dataset.count.split(".")[1] || "").length;
    const final = (c.dataset.prefix || "") + fmtNum(parseFloat(c.dataset.count), dec) + (c.dataset.suffix || "");
    if (!co) c.textContent = final; else { c.textContent = final; co.observe(c); }
  });
})();
