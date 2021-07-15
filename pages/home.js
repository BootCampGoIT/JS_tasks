// функция отвечает за возврат разметки страницы, которая будет
// добавлена в main
const getRandomColor = () => {
  return Math.ceil(Math.random() * 255);
};
const boxGenerator = (num) => {
  let markup = "";
  let step = 30;
  for (let i = 1; i <= num; i += 1) {
    markup += `<div  style="border: 1px solid #ff3434;
    width:${step}px; height:${step}px; background-color: rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})"></div>`;
    step += 10;
  }
  return markup;
};

export const getHomeMarkup = () => {
  return ` 
  <input type="number" value="1" class="boxInput">
  <button class="createBtn">Create</button>
  <button class="clearBtn">Clear</button>
  <div class="result"></div>
  `;
};

const createMarkup = () => {
  document.querySelector(".result").innerHTML = boxGenerator(
    document.querySelector(".boxInput").value
  );
};

const clear = () => {
  document.querySelector(".result").innerHTML = "";
};

export const createListeners = () => {
  document.querySelector(".createBtn").addEventListener("click", createMarkup);
  document.querySelector(".clearBtn").addEventListener("click", clear);
};

