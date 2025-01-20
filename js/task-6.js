function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const inputValue = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes"); 

createBtn.addEventListener("click", () => {
  const value = Number(inputValue.value);
  if (value >= 1 && value <= 100) {
    const fragment = document.createDocumentFragment();
    
    boxesContainer.innerHTML = ""; 

    for (let i = 0; i < value; i++) {
      const newElem = document.createElement("div");
      newElem.classList.add("newElem");

      newElem.style.backgroundColor = getRandomHexColor();
      newElem.style.width = `${30 + i * 10}px`;
      newElem.style.height = `${30 + i * 10}px`;

      fragment.appendChild(newElem);
    }

    boxesContainer.appendChild(fragment);
  } else {
    alert("Please enter a value between 1 and 100.");
  }

  inputValue.value = "";
});

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}
const removeElem = document.querySelector("[data-destroy]");
removeElem.addEventListener("click", destroyBoxes);

//з дуже великою допомогою gpt😒




