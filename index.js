import {
  createHeaderNavigationMarkup,
  setActiveLink,
} from "./navigation/navigation.js";
import { refs } from "./refs/refs.js";



// создаем разметку навигации в header
createHeaderNavigationMarkup();
// ----------------------------------


// добавляем слушателя события по событию click на элемент a в навигации
refs.navList.addEventListener("click", setActiveLink);
// -------------------------------
