const inputName = document.querySelector("#name-input");
const messageName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue.length !== 0) {
    messageName.textContent = inputValue;
  } else {
    messageName.textContent = "Anonymous";
  }
});