import data from "./data/data.js";
// ======= lesson 1 =======
// console.log("data :>> ", data.header.routes);
const refs = {
  nav: document.querySelector(".mainRoutes"),
};
// ============= ul ===================
const navList = document.createElement("ul");
navList.classList.add("navList");
refs.nav.append(navList);

// ========== li generator nodes =========================
// const fragment = document.createDocumentFragment();

// data.header.routes.forEach((route) => {
//   const li = document.createElement("li");
//   li.classList.add("navListItem");

//   const a = document.createElement("a");
//   a.classList.add("navListItemLink");
//   a.textContent = route.name.en;
//   a.setAttribute("href", route.path);

//   li.append(a);
//   fragment.append(li);
// });

// ================== nav append =====================
// navList.append(fragment);

// ================ remove element =======================
// const li = navList.lastChild;

// navList.removeChild(li);

// ============= function ==================
const createNavigationMarkup = (array, language) => {
  return array.reduce((acc, { path, name }) => {
    acc += `<li class="navListItem"><a href="#" class="navListItemLink">${name[language]}</a></li>`;
    return acc;
  }, "");
};
const markup = createNavigationMarkup(data.header.routes, "en");
navList.innerHTML = markup;

const select = document.querySelector(".languageSelector");

select.addEventListener("input", (e) => {
  console.log(e.target);
  const markup = createNavigationMarkup(data.header.routes, e.target.value);
  navList.innerHTML = markup;
});

const div = document.querySelector(".options");
div.addEventListener("click", (e) => {
  console.log("e.target :>> ", e.target);
  console.log("e.currentTarget :>> ", e.currentTarget);
});
