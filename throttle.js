// const input = document.querySelector(".inputElement");
// console.log("input :>> ", input);
// input.addEventListener(
//   "input",
//   _.throttle((e) => {
//     console.log("Hello");
//   }, 5000)
// );
// input.addEventListener(
//   "input",
//   _.debounce((e) => {
//     console.log("Hello");
//   }, 1000)
// );

// ---------------------------------------------

const todo = [];

console.dir(document);

const refs = {
  formTodo: document.forms.formTodo,
  filterForm: document.forms.filterForm,
  list: document.querySelector(".list"),
};

const createMarkup = (object) => {
  return `<li>
    <span>${object.task}</span>
    <button data-id=${object.id}>Delete</button>
    </li>`;
};

const createListItem = (object) => {
  refs.list.insertAdjacentHTML("beforeend", createMarkup(object));
};

const addTask = (e) => {
  e.preventDefault();
  const task = refs.formTodo.elements.task.value;
  const newTask = { id: `${Date.now()}`, task };
  refs.formTodo.reset();
  todo.push(newTask);
  createListItem(newTask);
  console.log("todo :>> ", todo);
};

const deleteTask = (e) => {
  if (e.target.nodeName === "BUTTON") {
    const result = todo.find((todoItem) => todoItem.id === e.target.dataset.id);
    const index = todo.indexOf(result);
    todo.splice(index, 1);

    // const result = todo.filter((item) => item.id !== e.target.dataset.id);
    // todo = [...result];

    const markup = todo.reduce((acc, task) => {
      return (acc += createMarkup(task));
    }, "");
    refs.list.innerHTML = markup;
  }
};

const filterElements = (e) => {
  const value = refs.filterForm.elements.filter.value;
  const result = todo.filter((item) =>
    item.task.toLowerCase().includes(value.toLowerCase())
  );

  const markup = result.reduce((acc, task) => {
    return (acc += createMarkup(task));
  }, "");
  refs.list.innerHTML = markup;
};

// refs.filterForm.addEventListener(
//   "input",
//   _.debounce((e) => filterElements(e), 2000)
// );

refs.filterForm.addEventListener(
  "input",
  _.throttle((e) => filterElements(e), 2000)
);
refs.list.addEventListener("click", deleteTask);

refs.formTodo.addEventListener("submit", addTask);
