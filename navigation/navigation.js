import data from "../data/data.js";
import { getAuthMarkup } from "../pages/auth.js";
import { getCoursesMarkup } from "../pages/courses.js";
import { getGroupsMarkup } from "../pages/groups.js";
import { createListeners, getHomeMarkup } from "../pages/home.js";
import { getProfileMarkup } from "../pages/profile.js";
import { refs } from "../refs/refs.js";

//функция отвечает за создание разметки элементов навигации
export const createNavigationMarkup = (array, language) => {
  return array.reduce((acc, { name, path }) => {
    acc += `<li class="navListItem" data-path=${path}>
        <a href="#" class="navListItemLink">${name[language]}</a>
    </li>`;
    return acc;
  }, "");
};

// функция отвечает за поиск первого элемента навигации и
// добавляет активный класс первому элементу.
// Вставляет в main разметку содержимого страницы Home
const setFirstActiveLink = () => {
  const firstLink = document.querySelector(".navListItemLink");
  firstLink.classList.add("navListItemLinkActive");
  refs.main.innerHTML = getHomeMarkup();
};

// функция отвечает за действия по клику на элемент навигации.
// Снимает активный класс у текущего элемента и добавляет
// активный класс на элемент по которому произведен клик
// В main заменяет разметку в соответствии с тем, какой
// выбран текущий элемент
export const setActiveLink = (e) => {
  if (e.target.classList.contains("navListItemLinkActive")) return;
  const currentActiveLink = document.querySelector(".navListItemLinkActive");
  currentActiveLink.classList.remove("navListItemLinkActive");
  e.target.classList.add("navListItemLinkActive");
  const path = e.target.closest("[data-path]").dataset.path;
  switch (path) {
    case "/home":
      refs.main.innerHTML = getHomeMarkup();
      createListeners();

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
// запускается при загрузке приложения
// реализует вставку разметки навигации
// запускает функцию добавления активного класса первому элементу навигации
export const createHeaderNavigationMarkup = () => {
  const markup = createNavigationMarkup(data.header.routes, "en");
  refs.navList.innerHTML = markup;
  setFirstActiveLink();
  createListeners();
};
