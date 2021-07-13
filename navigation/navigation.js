import data from "../data/data.js";
import { getAuthMarkup } from "../pages/auth.js";
import { getCoursesMarkup } from "../pages/courses.js";
import { getGroupsMarkup } from "../pages/groups.js";
import { getHomeMarkup } from "../pages/home.js";
import { getProfileMarkup } from "../pages/profile.js";
import { refs } from "../refs/refs.js";

export const createNavigationMarkup = (array, language) => {
  return array.reduce((acc, { name, path }) => {
    acc += `<li class="navListItem" data-path=${path}>
        <a href="#" class="navListItemLink">${name[language]}</a>
    </li>`;
    return acc;
  }, "");
};

const setFirstActiveLink = () => {
  const firstLink = document.querySelector(".navListItemLink");
  firstLink.classList.add("navListItemLinkActive");
  refs.main.innerHTML = getHomeMarkup();
};

export const setActiveLink = (e) => {
  if (e.target.classList.contains("navListItemLinkActive")) return;
  const currentActiveLink = document.querySelector(".navListItemLinkActive");
  currentActiveLink.classList.remove("navListItemLinkActive");
  e.target.classList.add("navListItemLinkActive");
  const path = e.target.closest("[data-path]").dataset.path;
  switch (path) {
    case "/home":
      refs.main.innerHTML = getHomeMarkup();
      break;
    case "/courses":
      refs.main.innerHTML = getCoursesMarkup();
      break;
    case "/profile":
      refs.main.innerHTML = getProfileMarkup();
      break;
    case "/groups":
      refs.main.innerHTML = getGroupsMarkup();
      break;
    case "/register":
      refs.main.innerHTML = getAuthMarkup();
      break;
    case "/login":
      refs.main.innerHTML = getAuthMarkup();
      break;

    default:
      refs.main.innerHTML = getHomeMarkup();
      break;
  }
};

export const createHeaderNavigationMarkup = () => {
  const markup = createNavigationMarkup(data.header.routes, "en");
  refs.navList.innerHTML = markup;
  setFirstActiveLink();
};
