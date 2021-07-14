// функция отвечает за возврат разметки страницы, которая будет
// добавлена в main
export const getAuthMarkup = () => {
  return `
  <form class="authForm">
    <label class="authLabel">
      Email
      <input type="email" autocomplete placeholder="Enter email"/>
    </label>
    <label class="authLabel">
      Password
      <input type="password" autocomplete placeholder="Enter password"/>
    </label>
    <button>Auth</button>
  </form>
  `;
};
