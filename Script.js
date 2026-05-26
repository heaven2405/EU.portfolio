/* =========================
   BACKGROUND P5 — VAGUES
========================= */

let molds = [];
let num = 3000;
let t = 0;

function setup() {
  let c = createCanvas(window.innerWidth, window.innerHeight);
  c.parent("bg-canvas");
  background(0);

  for (let i = 0; i < num; i++) {
    molds.push(new Mold());
  }
}

function draw() {
  background(0, 15);

  stroke(255, 40);
  noFill();

  for (let y = 0; y < height; y += 20) {
    beginShape();

    for (let x = 0; x < width; x += 20) {
      let w = sin(x * 0.01 + t * 2 + y * 0.02) * 10;
      vertex(x, y + w);
    }

    endShape();
  }

  for (let m of molds) {
    m.update();
    m.show();
  }

  t += 0.02;
}

class Mold {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.a = random(360);
  }

  update() {
    this.x += cos(this.a);
    this.y += sin(this.a);
    this.a += random(-15, 15);

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  show() {
    stroke(255, 30);
    point(this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}


/* =========================
   ELEMENTS HTML
========================= */

const portfolioPage = document.getElementById("portfolioPage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");

const openPortfolio = document.getElementById("openPortfolio");
const navPortfolio = document.getElementById("navPortfolio");
const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navContact = document.getElementById("navContact");

const closePortfolio = document.getElementById("closePortfolio");
const closeAbout = document.getElementById("closeAbout");
const closeContact = document.getElementById("closeContact");

const projectSubtitles = document.getElementById("projectSubtitles");
const portfolioImage = document.getElementById("portfolioImage");
const portfolioTitle = document.getElementById("portfolioTitle");

const prevPortfolioSection = document.getElementById("prevPortfolioSection");
const nextPortfolioSection = document.getElementById("nextPortfolioSection");
const portfolioSectionName = document.getElementById("portfolioSectionName");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeImageModal = document.getElementById("closeImageModal");


/* =========================
   DONNÉES PORTFOLIO
========================= */

const portfolioSections = [
  {
    key: "projets",
    fr: "PROJETS",
    en: "PROJECTS",
    type: "projects",

    projects: [
      {
        name: "Projet 01",
        title: "Centre Culturel Mihrablı",
        cover: "images/mihrabli-vue-ext(1).jpg",

        items: [
          {
            name: "Carte",
            images: [
              {
                title: "Carte",
                img: "images/mihrabli-carte.jpg"
              },
              {
                title: "Cartes d'analyse",
                img: "images/Mise en page tout blanc.png"
              }
            ]
          },

          {
            name: "Axono",
            img: "images/mihrabli-axono.jpg"
          },

          {
            name: "Plan",
            images: [
              {
                title: "Plan RDC",
                img: "images/plan-RDC-mihrabli.png"
              },
              {
                title: "Plan étage",
                img: "images/mihrabli-etages.jpg"
              },
              {
                title: "Plan toiture",
                img: "images/toiture-mihrabli.png"
              }
            ]
          },

          {
            name: "Coupe",
            images: [
              {
                title: "Coupes",
                img: "images/mihrabli-coupes.jpg"
              }
            ]
          },

          {
            name: "Élévation",
            images: [
              {
                title: "Élévation 01",
                img: "images/elevation1-mihrabli.png"
              },
              {
                title: "Élévation 02",
                img: "images/elevation2-mihrabli.png"
              }
            ]
          },

          {
            name: "Détail",
            images: [
              {
                title: "Détail 01",
                img: "images/mihrabli-vue-ext.jpg"
              },
              {
                title: "Détail 02",
                img: "images/details2-mihrabli.png"
              },
              {
                title: "Détail 03",
                img: "images/details-mihrabli.jpg"
              }
            ]
          }
        ]
      },

      {
        name: "Projet 02",
        title: "Trames Fertiles en Transition",
        cover: "images/axono-fertile.png",

        items: [
          {
            name: "Carte",
            img: "images/projet2-carte.png"
          },

          {
            name: "Axono",
            img: "images/axono-fertile.png"
          },

          {
            name: "Plan",
            images: [
              {
                title: "Plan RDC",
                img: "images/PLAN RDC 200.pdf.png"
              },
              {
                title: "Plan R+1",
                img: "images/PLAN R+1 200.pdf.png"
              }
            ]
          },

          {
            name: "Coupe",
            images: [
              {
                title: "Coupes générales",
                img: "images/projet2-coupes.jpg"
              },
              {
                title: "Coupe 01",
                img: "images/15.png"
              },
              {
                title: "Coupe 02",
                img: "images/16.png"
              },
              {
                title: "Coupe 03",
                img: "images/17.png"
              }
            ]
          },

          {
            name: "Élévation",
            images: [
              {
                title: "Élévation / Coupe DD",
                img: "images/15.png"
              },
              {
                title: "Élévation / Coupe BB",
                img: "images/16.png"
              },
              {
                title: "Élévation / Coupe AA",
                img: "images/17.png"
              }
            ]
          },

          {
            name: "Schéma",
            images: [
              {
                title: "Schéma",
                img: "images/projet2-schema.jpg"
              },
              {
                title: "Organisation",
                img: "images/Perspectives A1.pdf.png"
              }
            ]
          },

          {
            name: "Photos",
            img: "images/projet2-photos.jpg"
          }
        ]
      },

      {
        name: "Projet 03",
        title: "Vercors",
        cover: "images/axono-vercors.png",

        items: [
          {
            name: "Carte",
            img: "images/carte-vercors.png"
          },

          {
            name: "Axono",
            img: "images/axono-vercors.png"
          },

          {
            name: "Plan",
            images: [
              {
                title: "Plan RDC",
                img: "images/projet3-plan-rdc.png"
              },
              {
                title: "Plan toiture",
                img: "images/projet3-plan-toiture.png"
              }
            ]
          },

          {
            name: "Coupe",
            images: [
              {
                title: "Coupe 01",
                img: "images/coupe-vercors-1.png"
              },
              {
                title: "Coupe 02",
                img: "images/coupe-vercors-2.png"
              }
            ]
          },

          {
            name: "Élévation",
            images: [
              {
                title: "Élévation 01",
                img: "images/elevatiob-vercors-1.png"
              },
              {
                title: "Élévation 02",
                img: "images/elevation-vercors-2.png"
              },
              {
                title: "Élévation 03",
                img: "images/elevation-vercors-3.png"
              }
            ]
          },

          {
            name: "Schéma",
            images: [
              {
                title: "Schéma 01",
                img: "images/schema-vercors.png"
              }
            ]
          }
        ]
      }
    ]
  },

  {
    key: "galerie",
    fr: "GALERIE",
    en: "GALLERY",
    type: "gallery",

    items: Array.from({ length: 64 }, (_, i) => {
      const num = String(i + 1).padStart(3, "0");

      return {
        name: `IMG ${num}`,
        img: `images/img-${num}.jpeg`
      };
    })
  },

  {
    key: "maquettes",
    fr: "MAQUETTES",
    en: "MODELS",

    items: [
      {
        name: "Maquette 01",
        images: [
          {
            title: "",
            img: "images/maquette-01.png"
          }
        ]
      },
      {
        name: "Maquette 02",
        images: [
          {
            title: "",
            img: "images/maquette-02.png"
          }
        ]
      },
      {
        name: "Maquette 03",
        images: [
          {
            title: "",
            img: "images/maquette-03.png"
          }
        ]
      }
    ]
  },

  {
    key: "dessins",
    fr: "DESSINS",
    en: "DRAWINGS",

    items: [
      {
        name: "Dessin 01",
        slider: true,

        images: [
          {
            title: "1",
            img: "images/1.png"
          },
          {
            title: "2",
            img: "images/2.png"
          },
          {
            title: "3",
            img: "images/3.png"
          },
          {
            title: "4",
            img: "images/4.png"
          },
          {
            title: "5",
            img: "images/5.png"
          },
          {
            title: "6",
            img: "images/6.png"
          },
          {
            title: "7",
            img: "images/7.png"
          },
          {
            title: "8",
            img: "images/8.png"
          },
          {
            title: "9",
            img: "images/9.png"
          },
          {
            title: "10",
            img: "images/10.png"
          }
        ]
      },

      {
        name: "Dessin 02",
        slider: true,

        images: [
          {
            title: "Dessin 02 - 01",
            img: "images/dessin1.jpeg"
          },
          {
            title: "Dessin 02 - 02",
            img: "images/dessin2.jpeg"
          },
          {
            title: "Dessin 02 - 03",
            img: "images/dessin3.png"
          }
        ]
      }
    ]
  },

  {
    key: "art",
    fr: "ART",
    en: "ART",
    type: "art-scroll",

    items: [
      {
        name: "ART 01",
        img: "images/art-01.png"
      },
      {
        name: "ART 02",
        img: "images/art-02.png"
      },
      {
        name: "ART 03",
        img: "images/art-03.png"
      },
      {
        name: "ART 04",
        img: "images/art-04.png"
      },
      {
        name: "ART 05",
        img: "images/art-05.png"
      }
    ]
  }
];

let currentSectionIndex = 0;


/* =========================
   OUVERTURE / FERMETURE
========================= */

function closeAllSpaces() {
  if (portfolioPage) portfolioPage.classList.remove("active");
  if (aboutPage) aboutPage.classList.remove("active");
  if (contactPage) contactPage.classList.remove("active");

  document.body.classList.remove("space-open");
  document.body.classList.remove("project-selected");
  document.body.classList.remove("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.remove("art-open");

  removeGalleryGrid();
  removePortfolioHomeMenu();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();
}

function openSpace(space) {
  closeAllSpaces();

  if (!space) return;

  space.classList.add("active");
  document.body.classList.add("space-open");

  if (space === portfolioPage) {
    showPortfolioHome();
  }
}

if (openPortfolio) {
  openPortfolio.addEventListener("click", () => {
    openSpace(portfolioPage);
  });
}

if (navPortfolio) {
  navPortfolio.addEventListener("click", () => {
    openSpace(portfolioPage);
  });
}

if (navAbout) {
  navAbout.addEventListener("click", () => {
    openSpace(aboutPage);
  });
}

if (navContact) {
  navContact.addEventListener("click", () => {
    openSpace(contactPage);
  });
}

if (navHome) {
  navHome.addEventListener("click", () => {
    closeAllSpaces();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

if (closePortfolio) {
  closePortfolio.addEventListener("click", closeAllSpaces);
}

if (closeAbout) {
  closeAbout.addEventListener("click", closeAllSpaces);
}

if (closeContact) {
  closeContact.addEventListener("click", closeAllSpaces);
}


/* =========================
   PAGE D’ACCUEIL PORTFOLIO
========================= */

function showPortfolioHome() {
  document.body.classList.remove("project-selected");
  document.body.classList.remove("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.remove("art-open");

  removeGalleryGrid();
  removePortfolioHomeMenu();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  if (portfolioSectionName) {
    portfolioSectionName.innerHTML = "PORTFOLIO";
  }

  if (projectSubtitles) {
    projectSubtitles.classList.remove("projects-horizontal");
    projectSubtitles.innerHTML = "";
    projectSubtitles.style.display = "";
  }

  if (portfolioImage) {
    portfolioImage.style.display = "none";
    portfolioImage.removeAttribute("src");
  }

  if (portfolioTitle) {
    portfolioTitle.textContent = "";
  }

  const center = document.querySelector(".portfolio-center-image");
  if (!center) return;

  const menu = document.createElement("div");
  menu.className = "portfolio-home-menu";
  menu.id = "portfolioHomeMenu";

  const cards = [
    {
      fr: "Projets",
      en: "Projects",
      key: "projets",
      logo: "images/logo-projet.png"
    },
    {
      fr: "Galerie",
      en: "Gallery",
      key: "galerie",
      logo: "images/logo-galerie.png"
    },
    {
      fr: "Maquettes",
      en: "Models",
      key: "maquettes",
      logo: "images/logo-maquette.png"
    },
    {
      fr: "Dessins",
      en: "Drawings",
      key: "dessins",
      logo: "images/logo-dessins.png"
    },
    {
      fr: "Art",
      en: "Art",
      key: "art",
      logo: "images/logo-art.png"
    }
  ];

  cards.forEach((cardData) => {
    const card = document.createElement("button");
    card.className = "portfolio-home-card";
    card.type = "button";

    card.innerHTML = `
      <img src="${cardData.logo}" class="portfolio-logo" alt="${cardData.fr}">
      <div class="portfolio-hover">
        <strong>${cardData.fr}</strong>
        <span>${cardData.en}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      const index = portfolioSections.findIndex(
        (section) => section.key === cardData.key
      );

      if (index !== -1) {
        currentSectionIndex = index;
        showPortfolioSection(currentSectionIndex);
      }
    });

    menu.appendChild(card);
  });

  center.appendChild(menu);
}

function removePortfolioHomeMenu() {
  const oldMenu = document.getElementById("portfolioHomeMenu");

  if (oldMenu) {
    oldMenu.remove();
  }

  if (portfolioImage) {
    portfolioImage.style.display = "block";
  }
}

function addBackToPortfolioButton() {
  if (!projectSubtitles) return;

  const oldBack = projectSubtitles.querySelector(".back-portfolio-home");

  if (oldBack) {
    oldBack.remove();
  }

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.textContent = "Retour";
  backButton.className = "back-portfolio-home";

  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    showPortfolioHome();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  projectSubtitles.appendChild(backButton);
}


/* =========================
   NAVIGATION PORTFOLIO
========================= */

function showPortfolioSection(index) {
  removePortfolioHomeMenu();
  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  const section = portfolioSections[index];

  if (!section || !projectSubtitles) return;

  document.body.classList.remove("project-selected");
  document.body.classList.remove("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.remove("art-open");

  if (section.key === "maquettes") {
    document.body.classList.add("maquettes-open");
  }

  projectSubtitles.style.display = "";

  if (portfolioSectionName) {
    portfolioSectionName.innerHTML = `${section.fr} <span>/ ${section.en}</span>`;
  }

  projectSubtitles.classList.remove("projects-horizontal");
  projectSubtitles.innerHTML = "";

  if (section.type === "projects") {
    addBackToPortfolioButton();
    showProjectCards(section, true);
    return;
  }

  if (section.type === "gallery") {
    showGalleryGrid(section.items);
    return;
  }

  if (section.type === "art-scroll") {
    showArtScroll(section.items);
    return;
  }

  addBackToPortfolioButton();
  showItems(section.items, true);
}

function showProjectCards(section, keepBackButton = false) {
  if (!projectSubtitles) return;

  if (!keepBackButton) {
    projectSubtitles.innerHTML = "";
  }

  projectSubtitles.classList.add("projects-horizontal");

  if (portfolioImage) {
    portfolioImage.style.display = "block";
    portfolioImage.style.opacity = "0";
    portfolioImage.removeAttribute("src");
  }

  if (portfolioTitle) {
    portfolioTitle.textContent = "";
  }

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  section.projects.forEach((project) => {
    const card = document.createElement("button");
    card.className = "project-card";
    card.textContent = project.name;

    card.addEventListener("click", () => {
      showProjectDetails(project);
    });

    projectSubtitles.appendChild(card);
  });
}

function showProjectDetails(project) {
  document.body.classList.add("project-selected");
  document.body.classList.remove("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.remove("art-open");

  projectSubtitles.classList.remove("projects-horizontal");
  projectSubtitles.innerHTML = "";

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  addBackToPortfolioButton();

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.textContent = "← Retour aux projets";
  backButton.className = "back-projects";

  backButton.addEventListener("click", () => {
    document.body.classList.remove("project-selected");

    projectSubtitles.innerHTML = "";
    addBackToPortfolioButton();
    showProjectCards(portfolioSections[currentSectionIndex], true);
  });

  projectSubtitles.appendChild(backButton);

  project.items.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.name;

    btn.addEventListener("click", () => {
      setActiveSubtitle(btn);

      if (item.images) {
        showImageGroup(item, project.title);
      } else {
        showImage(item, project.title);
      }
    });

    projectSubtitles.appendChild(btn);

    if (index === 0) {
      btn.click();
    }
  });
}

function showItems(items, keepBackButton = false) {
  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  if (!projectSubtitles) return;

  projectSubtitles.classList.remove("projects-horizontal");

  if (!keepBackButton) {
    projectSubtitles.innerHTML = "";
  }

  items.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.name;

    btn.addEventListener("click", () => {
      setActiveSubtitle(btn);

      if (item.slider) {
        showDrawingSlider(item);
      } else if (item.images) {
        showImageGroup(item);
      } else {
        showImage(item);
      }
    });

    projectSubtitles.appendChild(btn);

    if (index === 0) {
      btn.click();
    }
  });
}

function setActiveSubtitle(activeButton) {
  if (!projectSubtitles) return;

  projectSubtitles.querySelectorAll("button").forEach((button) => {
    button.classList.remove("active-subtitle");
    button.classList.remove("active-title");
  });

  activeButton.classList.add("active-subtitle");
}


/* =========================
   AFFICHAGE IMAGE SIMPLE
========================= */

function showImage(item, projectTitle = "") {
  if (!portfolioImage || !portfolioTitle) return;

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  portfolioImage.style.display = "block";
  portfolioImage.style.opacity = "0";

  setTimeout(() => {
    portfolioImage.src = item.img;

    if (projectTitle) {
      portfolioTitle.textContent = `${projectTitle} — ${item.name}`;
    } else {
      portfolioTitle.textContent = item.name;
    }

    portfolioImage.style.opacity = "1";
    portfolioImage.classList.add("visible");
  }, 200);
}


/* =========================
   AFFICHAGE GROUPE D’IMAGES
========================= */

function showImageGroup(item, projectTitle = "") {
  if (!portfolioTitle) return;

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  if (portfolioImage) {
    portfolioImage.style.display = "none";
    portfolioImage.removeAttribute("src");
  }

  if (document.body.classList.contains("maquettes-open")) {
    portfolioTitle.textContent = "";
  } else if (projectTitle) {
    portfolioTitle.textContent = `${projectTitle} — ${item.name}`;
  } else {
    portfolioTitle.textContent = item.name;
  }

  const center = document.querySelector(".portfolio-center-image");
  if (!center) return;

  const group = document.createElement("div");
  group.className = "project-image-group";
  group.id = "projectImageGroup";

  if (document.body.classList.contains("maquettes-open")) {
    if (item.name === "Maquette 01") {
      group.classList.add("maquette-01");
    }

    if (item.name === "Maquette 02") {
      group.classList.add("maquette-02");
    }

    if (item.name === "Maquette 03") {
      group.classList.add("maquette-03");
    }
  }

  item.images.forEach((imageItem) => {
    const block = document.createElement("div");
    block.className = "project-image-block";

    const img = document.createElement("img");
    img.src = imageItem.img;
    img.alt = imageItem.title || item.name;

    img.addEventListener("click", () => {
      if (imageModal && modalImage) {
        modalImage.src = imageItem.img;
        imageModal.classList.add("active");
      }
    });

    const title = document.createElement("h3");
    title.textContent = imageItem.title || "";

    block.appendChild(img);

    if (imageItem.title) {
      block.appendChild(title);
    }

    group.appendChild(block);
  });

  center.appendChild(group);
}

function removeProjectImageGroup() {
  const oldGroup = document.getElementById("projectImageGroup");

  if (oldGroup) {
    oldGroup.remove();
  }
}


/* =========================
   SLIDER DESSINS
========================= */

function showDrawingSlider(item) {
  if (!portfolioTitle) return;

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  if (portfolioImage) {
    portfolioImage.style.display = "none";
    portfolioImage.removeAttribute("src");
  }

  const center = document.querySelector(".portfolio-center-image");

  if (!center) return;

  const slider = document.createElement("div");
  slider.className = "drawing-slider";
  slider.id = "drawingSlider";

  const track = document.createElement("div");
  track.className = "drawing-slider-track";

  const allImages = [...item.images, ...item.images];

  allImages.forEach((imageItem) => {
    const img = document.createElement("img");
    img.src = imageItem.img;
    img.alt = imageItem.title;

    img.addEventListener("click", () => {
      if (imageModal && modalImage) {
        modalImage.src = imageItem.img;
        imageModal.classList.add("active");
      }
    });

    track.appendChild(img);
  });

  slider.appendChild(track);
  center.appendChild(slider);

  portfolioTitle.textContent = item.name;
  portfolioTitle.style.display = "block";

  center.appendChild(portfolioTitle);
}

function removeDrawingSlider() {
  const oldSlider = document.getElementById("drawingSlider");

  if (oldSlider) {
    oldSlider.remove();
  }
}


/* =========================
   GALERIE
========================= */

function showGalleryGrid(items) {
  if (!projectSubtitles) return;

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  document.body.classList.add("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.remove("art-open");

  projectSubtitles.innerHTML = "";
  addBackToPortfolioButton();

  if (portfolioImage) {
    portfolioImage.style.display = "none";
    portfolioImage.removeAttribute("src");
  }

  if (portfolioTitle) {
    portfolioTitle.textContent = "";
  }

  const center = document.querySelector(".portfolio-center-image");
  if (!center) return;

  const galleryGrid = document.createElement("div");
  galleryGrid.className = "gallery-grid";
  galleryGrid.id = "galleryGrid";

  items.forEach((item, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    card.style.animationDelay = `${index * 0.12}s`;

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;

    const label = document.createElement("span");
    label.textContent = item.name;

    card.appendChild(img);
    card.appendChild(label);

    card.addEventListener("click", () => {
      if (imageModal && modalImage) {
        modalImage.src = item.img;
        imageModal.classList.add("active");
      }
    });

    galleryGrid.appendChild(card);
  });

  center.appendChild(galleryGrid);
}

function removeGalleryGrid() {
  const oldGalleryGrid = document.getElementById("galleryGrid");

  if (oldGalleryGrid) {
    oldGalleryGrid.remove();
  }

  if (portfolioImage) {
    portfolioImage.style.display = "block";
  }
}


/* =========================
   ART — LIGNE VERTICALE QUI GLISSE
========================= */

function showArtScroll(items) {
  if (!projectSubtitles) return;

  removeGalleryGrid();
  removeProjectImageGroup();
  removeDrawingSlider();
  removeArtScroll();

  document.body.classList.remove("gallery-open");
  document.body.classList.remove("maquettes-open");
  document.body.classList.add("art-open");

  projectSubtitles.innerHTML = "";
  addBackToPortfolioButton();

  if (portfolioImage) {
    portfolioImage.style.display = "none";
    portfolioImage.removeAttribute("src");
  }

  if (portfolioTitle) {
    portfolioTitle.textContent = "";
  }

  const center = document.querySelector(".portfolio-center-image");
  if (!center) return;

  const wrapper = document.createElement("div");
  wrapper.className = "art-scroll";
  wrapper.id = "artScroll";

  const track = document.createElement("div");
  track.className = "art-scroll-track";

  const allItems = [...items, ...items];

  allItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "art-scroll-card";

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;

    const label = document.createElement("span");
    label.textContent = item.name;

    card.appendChild(img);
    card.appendChild(label);

    card.addEventListener("click", () => {
      if (imageModal && modalImage) {
        modalImage.src = item.img;
        imageModal.classList.add("active");
      }
    });

    track.appendChild(card);
  });

  wrapper.appendChild(track);
  center.appendChild(wrapper);
}

function removeArtScroll() {
  const oldArtScroll = document.getElementById("artScroll");

  if (oldArtScroll) {
    oldArtScroll.remove();
  }

  document.body.classList.remove("art-open");
}


/* =========================
   FLÈCHES
========================= */

if (nextPortfolioSection) {
  nextPortfolioSection.addEventListener("click", () => {
    if (document.getElementById("portfolioHomeMenu")) {
      currentSectionIndex = 0;
      showPortfolioSection(currentSectionIndex);
      return;
    }

    currentSectionIndex++;

    if (currentSectionIndex >= portfolioSections.length) {
      currentSectionIndex = 0;
    }

    showPortfolioSection(currentSectionIndex);
  });
}

if (prevPortfolioSection) {
  prevPortfolioSection.addEventListener("click", () => {
    if (document.getElementById("portfolioHomeMenu")) {
      currentSectionIndex = portfolioSections.length - 1;
      showPortfolioSection(currentSectionIndex);
      return;
    }

    currentSectionIndex--;

    if (currentSectionIndex < 0) {
      currentSectionIndex = portfolioSections.length - 1;
    }

    showPortfolioSection(currentSectionIndex);
  });
}


/* =========================
   IMAGE GRAND ÉCRAN
========================= */

if (portfolioImage && imageModal && modalImage) {
  portfolioImage.addEventListener("click", () => {
    if (!portfolioImage.src) return;

    modalImage.src = portfolioImage.src;
    imageModal.classList.add("active");
  });
}

if (closeImageModal && imageModal) {
  closeImageModal.addEventListener("click", () => {
    imageModal.classList.remove("active");
  });
}

if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove("active");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && imageModal) {
    imageModal.classList.remove("active");
  }
});


/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 800);
});

document.addEventListener("mouseover", (e) => {
  if (!cursor) return;

  if (e.target.closest("a, button, img")) {
    cursor.classList.add("hover");
  }
});

document.addEventListener("mouseout", (e) => {
  if (!cursor) return;

  if (e.target.closest("a, button, img")) {
    cursor.classList.remove("hover");
  }
});

document.querySelectorAll(".portfolio-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    if (category === "projets") {
      showProjects();
    }

    if (category === "galerie") {
      showGallery();
    }

    if (category === "maquettes") {
      showMaquettes();
    }

    if (category === "dessins") {
      showDessins();
    }

    if (category === "art") {
      showArt();
    }
  });
});