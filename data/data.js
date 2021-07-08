const data = {
  header: {
    routes: [
      { name: { en: "Home", ru: "Главная", ua: "Головна" }, path: "/home" },
      { name: { en: "Courses", ru: "Курсы", ua: "Курси" }, path: "/courses" },
      { name: { en: "Groups", ru: "Группы", ua: "Групи" }, path: "/groups" },
      {
        name: { en: "Profile", ru: "Профиль", ua: "Профіль" },
        path: "/profile",
      },
      {
        name: { en: "Registration", ru: "Регистрация", ua: "Реєстрація" },
        path: "/register",
      },
      { name: { en: "Login", ru: "Вход", ua: "Вхід" }, path: "/login" },
    ],
  },
  courses: [],
  groups: [],
  profile: {},
};

export default data;
