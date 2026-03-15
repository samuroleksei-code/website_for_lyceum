const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
const revealItems = document.querySelectorAll("[data-reveal]");
const yearSlot = document.getElementById("year");

if (navToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (revealItems.length > 0) {
  revealItems.forEach((item, index) => {
    if (!item.style.getPropertyValue("--delay")) {
      item.style.setProperty("--delay", `${(index % 6) * 0.05}s`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}

const scheduleData = {
  "5-A": {
    "monday": ["матем. 5", "зар.літ. 5", "укр. 5", "муз.мист 5", "фіз-ра", "", ""],
    "tuesday": ["обр.м. 5", "ЗБД 5", "матем. 5", "природа 5", "укр./інф 5/2а", "укр./інф 5/2а", ""],
    "wednesday": ["фіз-ра", "історія", "матем. 5", "етика 5", "англ. 29/5", "англ. 29/5", ""],
    "thursday": ["матем. 5", "зар.літ. 5", "укр. 5", "укр. 5", "технол. 26", "технол. 26", ""],
    "friday": ["англ. 29/5", "англ. 29/5", "укр. 5", "фіз-ра", "природа 5", "матем. 5", ""],
    "saturday": ["укр. 5", "матем. 5", "", "", "", "", ""]
  },
  "6-A": {
    "monday": ["укр. 28", "укр. 28", "матем. 28", "географія 28", "муз.мист 28", "зар.літ. 28", ""],
    "tuesday": ["укр. 28", "матем. 28", "ЗБД 28", "фіз-ра", "природа 28", "обр.м. 28", ""],
    "wednesday": ["етика 28", "укр. 28", "історія 28", "матем. 28", "англ. 27/27", "англ. 27/27", ""],
    "thursday": ["укр./інф 28/2а", "укр./інф 28/2а", "фіз-ра", "географія 28", "матем. 28", "зар.літ. 28", ""],
    "friday": ["англ. 27/27", "англ. 27/27", "природа 28", "матем. 28", "технол. 26", "технол. 26", ""],
    "saturday": ["історія 28", "укр. 28", "фіз-ра", "матем. 28", "", "", ""]
  },
  "6-B": {
    "monday": ["укр. 22", "укр. 22", "географія 22", "матем. 22", "зар.літ. 22", "фіз-ра", ""],
    "tuesday": ["матем. 22", "природа 22", "обр.м. 22", "укр. 22", "укр. 22", "ЗБД 22", ""],
    "wednesday": ["історія 22", "фіз-ра", "англ. 27/27", "англ. 27/27", "матем. 22", "етика 22", ""],
    "thursday": ["зар.літ. 22", "матем. 22", "укр./інф 22/2а", "укр./інф 22/2а", "географія 22", "укр. 22", ""],
    "friday": ["технол. 26", "біологія 4", "англ. 27/27", "англ. 27/27", "матем. 22", "природа 22", ""],
    "saturday": ["матем. 22", "історія 22", "фіз-ра", "муз.мист 22", "", "", ""]
  },
  "7-A": {
    "monday": ["фіз-ра", "матем. 14", "укр. 14", "зар.літ. 4", "географія 18", "фізика 23", ""],
    "tuesday": ["укр. 14", "укр. 14", "матем. 30", "обр.м. 26", "ЗБД 26", "біологія 30", "технології 2а"],
    "wednesday": ["муз.мист. 5", "матем. 30", "англ. 14", "англ. 14", "історія 14", "хімія 25", "інф. 11/2а"],
    "thursday": ["матем. 4", "фізика 24", "укр. 18", "укр. 18", "зар.літ. 6", "географія 18", "історія 7"],
    "friday": ["фіз-ра", "біологія 4", "хімія 25", "англ. 14", "англ. 14", "матем. 14", ""],
    "saturday": ["фіз-ра", "інф. 11/2а", "матем. 14", "", "", "", ""]
  },
  "7-B": {
    "monday": ["зар.літ. 14", "фіз-ра", "матем. 2", "укр. 26", "фізика 23", "географія 18", ""],
    "tuesday": ["ЗБД 26", "обр.м. 26", "укр. 25", "укр. 25", "матем. 2", "матем. 2", "біологія 3"],
    "wednesday": ["англ. 7", "англ. 7", "матем. 2", "хімія 25", "інф. 11/2а", "історія 7", "муз.мист 4"],
    "thursday": ["фізика 18", "географія 18", "історія 7", "зар.літ. 2", "укр. 2", "укр. 2", "технології 2а"],
    "friday": ["біологія 4", "фіз-ра", "матем. 2", "хімія 25", "англ. 24", "англ. 24", "фізика 23"],
    "saturday": ["інф. 11/2а", "фіз-ра", "матем. 2", "", "", "", ""]
  },
  "8-A": {
    "monday": ["інф. 11/13", "матем. 6", "біологія 4", "історія 7", "зар.літ. 26", "технології 2а", ""],
    "tuesday": ["фіз-ра", "фізика 23", "матем. 6", "матем. 6", "англ. 29/6", "англ. 29/6", "географія 18"],
    "wednesday": ["укр. 2а", "матем. 6", "хімія 25", "креслення 26", "укр. 6", "укр. 6", ""],
    "thursday": ["англ. 29/6", "англ. 29/6", "хімія 25", "історія 7", "фіз-ра", "інф. 11/13", "фізика 23"],
    "friday": ["матем. 6", "матем. 6", "зар.літ. 4", "укр. 4", "укр. 4", "ЗБД 6", "фізика 23"],
    "saturday": ["мистецтво 4", "географія 18", "біологія 3", "фіз-ра", "", "", ""]
  },
  "8-B": {
    "monday": ["матем. 30", "історія 7", "інф. 11/13", "біологія 3", "біологія 3", "зар.літ. 6", "технології 2а"],
    "tuesday": ["матем. 7", "фіз-ра", "англ. 29/14", "англ. 29/14", "географія 18", "фізика 23", "укр. 4"],
    "wednesday": ["хімія 25", "хімія 25", "укр. 7", "укр. 7", "матем. 7", "креслення 26", ""],
    "thursday": ["історія 7", "фіз-ра", "матем. 4", "фізика 23", "англ. 29/5", "англ. 29/5", "інф. 11/13"],
    "friday": ["укр. 7", "укр. 7", "матем. 7", "зар.літ. 5", "хімія 25", "хімія 25", "ЗБД 6"],
    "saturday": ["укр. 7", "мистецтво 4", "географія 18", "біологія 3", "біологія 3", "фіз-ра", ""]
  },
  "8-V": {
    "monday": ["історія 7", "інф. 11/13", "матем. 6", "зар.літ. 6", "технології 2а", "біологія 3", ""],
    "tuesday": ["англ. 29/3", "англ. 29/3", "фіз-ра", "матем. 30", "фізика 23", "географія 18", "укр. 4"],
    "wednesday": ["матем. 3", "креслення 26", "укр. 2а", "укр. 2а", "хімія 25", "матем. 4", "фізика 23"],
    "thursday": ["фіз-ра", "матем. 4", "англ. 29/6", "англ. 29/6", "історія 7", "біологія 3", ""],
    "friday": ["зар.літ. 28", "матем. 28", "інф. 11/13", "фізика 23", "ЗБД 6", "укр. 18", "укр. 18"],
    "saturday": ["географія 18", "біологія 3", "зар.літ. 26", "хімія 25", "фіз-ра", "", ""]
  },
  "9-A": {
    "monday": ["географія 18", "матем. 18", "хімія 25", "фіз-ра", "історія 7", "інф. 11/13", "географія 18"],
    "tuesday": ["матем. 2", "матем. 2", "англ. 18", "англ. 18", "право 7", "біологія 3", "зар.літ. 2"],
    "wednesday": ["укр. 23", "укр. 23", "креслення 26", "фіз-ра", "матем. 2", "матем. 2", "фізика 23"],
    "thursday": ["англ. 24", "інф. 11/13", "фізика 23", "матем. 4", "історія 7", "хімія 25", ""],
    "friday": ["укр. 22", "укр. 22", "фіз-ра", "укр. 22", "матем. 2", "осн. здор. 2", "мистецтво 26"],
    "saturday": ["фізика 23", "матем. 6", "труд. 2а", "зар.літ. 4", "географія 18", "історія 7", ""]
  },
  "9-B": {
    "monday": ["хімія 25", "хімія 25", "фіз-ра", "інф. 11/13", "матем. 6", "історія 7", "географія 18"],
    "tuesday": ["англ. 18", "англ. 18", "фізика 23", "біологія 3", "зар.літ. 3", "право 7", "мистецтво 26"],
    "wednesday": ["креслення 26", "біологія 3", "фіз-ра", "матем. 6", "укр. 28", "укр. 28", ""],
    "thursday": ["фізика 23", "англ. 7", "інф. 11/13", "хімія 25", "біологія 3", "хімія 25", ""],
    "friday": ["біологія 2а", "біологія 3", "фізика 23", "укр. 2а", "матем. 28", "фіз-ра", "осн. здор. 2"],
    "saturday": ["матем. 30", "фізика 23", "історія 7", "біологія 2", "географія 18", "", ""]
  },
  "10-A": {
    "monday": ["гром.ос. 2а", "гром.ос. 2а", "хімія 3", "матем. 2", "матем. 2", "укр. 22", "укр. 22"],
    "tuesday": ["фізика 23", "історія 7", "матем. 2", "матем. 2", "інф. 11/13", "англ. 26", "фіз-ра"],
    "wednesday": ["матем. 2", "зар.літ. 2а", "біологія 3", "географія 18", "фізика 23", "фізика 23", "технології 26"],
    "thursday": ["хімія 3", "фізика 23", "англ. 27/27", "англ. 27/27", "фіз-ра", "", "біологія 3"],
    "friday": ["матем. 2", "матем. 2", "фізика 23", "укр. 2а", "укр. 2а", "інф. 11/13", "історія 4"],
    "saturday": ["матем. 6", "зар.літ. 2", "історія 7", "біологія 2", "", "", ""]
  },
  "10-B": {
    "monday": ["хім/матем 3/6", "хімія 3", "гром.ос. 2а", "гром.ос. 2а", "укр. 5", "укр. 5", "інф. 11/13"],
    "tuesday": ["матем. 6", "матем. 6", "біол/інф 3/11/13", "історія 7", "англ. 30", "фіз-ра", "фізика 23"],
    "wednesday": ["матем. 6", "зар.л. 2а", "біологія 3", "біологія 3", "географія 18", "", ""],
    "thursday": ["інф/тех. 11/13/26", "хімія/техн 3/26", "хімія 3", "фіз-ра", "англ. 27/27", "англ. 27/27", "біологія 3"],
    "friday": ["хім/інф. 3/11/13", "фізика 23", "матем. 6", "матем. 6", "історія 7", "укр. 7", "укр. 7"],
    "saturday": ["зар.літ. 2", "фіз-ра (дівч.)", "інф. 11/13", "історія 7", "фізика 23", "фіз-ра (хл.)", ""]
  },
  "11-A": {
    "monday": ["зар.л. 4", "фізика 23", "фізика 23", "хімія 25", "матем. 14", "матем. 14", "фіз-ра"],
    "tuesday": ["укр. 30", "укр. 30", "історія 2а", "історія 2а", "матем. 14", "матем. 14", "інф. 11/13"],
    "wednesday": ["матем. 14", "матем. 14", "англ. 29", "англ. 29", "фіз-ра", "біологія 3", "географія 18"],
    "thursday": ["укр. 2", "укр. 2", "матем. 14", "технології 26", "інф. 11/13", "фізика 24", "фізика 24"],
    "friday": ["зар.літ. 14", "фізика 23", "матем. 14", "англ. 24", "інф. 11/13", "", ""],
    "saturday": ["фізика 24", "укр. 7", "біологія 5", "фіз-ра", "хімія 25", "", ""]
  },
  "11-B": {
    "monday": ["біол/матем 2/2", "біологія 2", "зар.л. 7", "фізика 23", "інф/хім 11/25", "хімія 25", "фізика 23"],
    "tuesday": ["історія 2а", "історія 2а", "укр. 4", "укр. 4", "хімія 25", "хім/інф 25/11", ""],
    "wednesday": ["англ. 29", "англ. 29", "матем. 23", "матем. 23", "крес/біол 3/26", "географія 18", "фіз-ра"],
    "thursday": ["укр. 14", "укр. 14", "матем. 24", "матем. 24", "фізика 24", "зар.л. 24", "технології 26"],
    "friday": ["хімія 25", "хімія/інф 25/11", "англ. 29", "крес/біол 3/26", "інф. 11/13", "укр. 2а", "фіз-ра"],
    "saturday": ["фіз-ра", "фізика 24", "матем. 24", "інф. 11/13", "", "", ""]
  }
};

const classButtons = document.querySelectorAll(".class-btn");
const classSelectMobile = document.getElementById("class-select-mobile");
const lessonTable = document.getElementById("lesson-table");

if (classButtons.length > 0 && lessonTable) {
  const tbodyLinks = lessonTable.querySelectorAll("tbody tr");

  const updateScheduleTable = (selectedClass) => {
    const data = scheduleData[selectedClass];
    if (data) {
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      tbodyLinks.forEach((tr, periodIndex) => {
        const cells = tr.querySelectorAll("td");
        days.forEach((day, dayIndex) => {
          const lessonName = data[day][periodIndex] || "";
          cells[dayIndex + 1].textContent = lessonName;
        });
      });
    }
  };

  const syncControls = (selectedClass) => {
    classButtons.forEach((b) => {
      if (b.getAttribute("data-class") === selectedClass) {
        b.classList.remove("button-secondary");
        b.classList.add("is-active", "button-primary");
      } else {
        b.classList.remove("is-active", "button-primary");
        b.classList.add("button-secondary");
      }
    });

    if (classSelectMobile) {
      classSelectMobile.value = selectedClass;
    }
  };

  classButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedClass = btn.getAttribute("data-class");
      syncControls(selectedClass);
      updateScheduleTable(selectedClass);
    });
  });

  if (classSelectMobile) {
    classSelectMobile.addEventListener("change", (e) => {
      const selectedClass = e.target.value;
      syncControls(selectedClass);
      updateScheduleTable(selectedClass);
    });
  }
}

const newsSlidesWrapper = document.getElementById("news-slides-wrapper");
const newsSlides = document.querySelectorAll(".news-slide");
const btnPrev = document.querySelector(".news-btn-prev");
const btnNext = document.querySelector(".news-btn-next");
const dotsContainer = document.getElementById("news-dots");

if (newsSlidesWrapper && newsSlides.length > 0) {
  let currentSlide = 0;
  const slideCount = newsSlides.length;
  let autoPlayInterval;
  const AUTO_PLAY_DELAY = 10000;

  newsSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("news-dot");
    dot.setAttribute("aria-label", `Перейти до новини ${index + 1}`);
    if (index === 0) dot.classList.add("is-active");

    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoPlay();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".news-dot");

  const updateDots = () => {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("is-active");
      } else {
        dot.classList.remove("is-active");
      }
    });
  };

  const goToSlide = (index) => {
    if (index < 0) {
      currentSlide = slideCount - 1;
    } else if (index >= slideCount) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    newsSlidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  };

  newsSlidesWrapper.parentElement.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
  newsSlidesWrapper.parentElement.addEventListener("mouseleave", startAutoPlay);

  startAutoPlay();
}
