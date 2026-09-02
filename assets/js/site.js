document.addEventListener("DOMContentLoaded", () => {

  // ── Dark mode toggle ───────────────────────────────────
  const toggleBtn = document.getElementById("theme-toggle");
  const applyTheme = (dark) => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(!isDark);
    });
  }

  // Sync when the OS preference changes (no stored override)
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) applyTheme(e.matches);
  });

  // ── Reading progress bar ──────────────────────────────
  const progressBar = document.querySelector(".read-progress");
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = pct + "%";
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  // ── Nav: active-section highlight ─────────────────────
  const header = document.querySelector(".site-header");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  if (sections.length > 0 && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveLink(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.15, 0.35, 0.55] }
    );
    sections.forEach((s) => sectionObserver.observe(s));
    setActiveLink(sections[0].id);
  }

  // ── Header: scrolled class ────────────────────────────
  const syncHeaderState = () => {
    if (!header) return;
    document.body.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });

  // ── Footer: current year ──────────────────────────────
  const yearNode = document.querySelector("[data-current-year]");
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  // ── Back to top ───────────────────────────────────────
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const syncBtt = () =>
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    syncBtt();
    window.addEventListener("scroll", syncBtt, { passive: true });
    backToTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  // ── Scroll reveal ─────────────────────────────────────
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length > 0 && "IntersectionObserver" in window) {
    const containers = new Map();
    revealEls.forEach((el) => {
      const parent = el.parentElement;
      if (!containers.has(parent)) containers.set(parent, []);
      containers.get(parent).push(el);
    });
    containers.forEach((children) => {
      children.forEach((el, i) => { el.style.transitionDelay = `${i * 65}ms`; });
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ── Venue badge color coding ──────────────────────────
  document.querySelectorAll(".publication-item__meta").forEach((el) => {
    const text = el.textContent.toLowerCase();
    if (/cvpr|iccv|eccv/.test(text))       el.dataset.venueType = "cv";
    else if (/neurips|icml|iclr/.test(text)) el.dataset.venueType = "ml";
    else if (/aaai/.test(text))              el.dataset.venueType = "aaai";
    else if (/icra|iros/.test(text))         el.dataset.venueType = "robotics";
    else if (/arxiv/.test(text))             el.dataset.venueType = "preprint";
  });

  // ── Copy email to clipboard ───────────────────────────
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  let toastTimer = null;
  const showToast = (msg) => {
    let toast = document.querySelector(".copy-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  };

  emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const addr = link.getAttribute("href").replace("mailto:", "");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(addr).then(() => showToast("Copied!")).catch(() => {});
      }
    });
  });

  // ── Publication filtering ─────────────────────────────
  const filterBtns = document.querySelectorAll(".filter-btn");
  const publications = document.querySelectorAll(".publication-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // Update active state
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter publications
      publications.forEach((pub) => {
        const area = pub.dataset.area;
        if (filter === "all" || area === filter) {
          pub.style.display = "";
          // Re-trigger reveal animation
          setTimeout(() => pub.classList.add("is-visible"), 10);
        } else {
          pub.style.display = "none";
          pub.classList.remove("is-visible");
        }
      });
    });
  });

  // ── Bio expand/collapse ───────────────────────────────
  const expandBioBtn = document.querySelector(".expand-bio-btn");
  const bioExpanded = document.querySelector(".bio-expanded");

  if (expandBioBtn && bioExpanded) {
    expandBioBtn.addEventListener("click", () => {
      const isExpanded = bioExpanded.dataset.expanded === "true";
      bioExpanded.dataset.expanded = isExpanded ? "false" : "true";

      const expandText = expandBioBtn.querySelector(".expand-text");
      if (expandText) {
        expandText.textContent = isExpanded ? "Learn more about my background" : "Show less";
      }
    });
  }

  // ── BibTeX copy functionality ─────────────────────────
  const addBibTexCopy = () => {
    document.querySelectorAll(".publication-item").forEach((item) => {
      const title = item.querySelector("h3")?.textContent;
      if (!title) return;

      const links = item.querySelector(".inline-links");
      if (links) {
        const bibBtn = document.createElement("button");
        bibBtn.className = "bibtex-btn";
        bibBtn.textContent = "BibTeX";
        bibBtn.setAttribute("aria-label", `Copy BibTeX for ${title}`);

        bibBtn.addEventListener("click", (e) => {
          e.preventDefault();

          const authorsRaw = item.querySelector(".publication-item__authors")?.textContent || "";
          const venue = item.querySelector(".publication-item__venue")?.textContent || "";
          const badge = item.querySelector(".publication-item__meta")?.textContent || "";

          // Clean authors (remove *, bold markers)
          const authors = authorsRaw.replace(/\*/g, "").replace(/\s+/g, " ").trim();

          // Extract year from venue
          const yearMatch = venue.match(/\d{4}/);
          const year = yearMatch ? yearMatch[0] : "2024";

          // Extract conference/journal abbreviation from badge
          const badgeParts = badge.split("·")[0].trim();
          const isArxiv = badgeParts.toLowerCase().includes("arxiv");

          // Generate citation key
          const firstAuthor = authors.split(",")[0].split(" ").pop().toLowerCase();
          const firstWord = title.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
          const citeKey = `${firstAuthor}${year}${firstWord}`;

          let bibtex;
          if (isArxiv) {
            bibtex = `@article{${citeKey},
  title={${title}},
  author={${authors}},
  journal={arXiv preprint},
  year={${year}}
}`;
          } else {
            const confMatch = badgeParts.match(/^([A-Z]+)/);
            const confName = confMatch ? confMatch[1] : "Conference";
            bibtex = `@inproceedings{${citeKey},
  title={${title}},
  author={${authors}},
  booktitle={${venue}},
  year={${year}}
}`;
          }

          if (navigator.clipboard) {
            navigator.clipboard.writeText(bibtex)
              .then(() => showToast("BibTeX copied!"))
              .catch(() => showToast("Copy failed"));
          }
        });

        links.appendChild(bibBtn);
      }
    });
  };
  addBibTexCopy();

  // ── Smooth scroll for anchor links ────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });

        // Update URL without jumping
        history.pushState(null, "", href);
      }
    });
  });

});
