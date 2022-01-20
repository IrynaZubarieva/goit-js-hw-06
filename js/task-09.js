function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const descrRef = document.querySelector(".color");

buttonRef.addEventListener("click", setRandomHexColor);

function setRandomHexColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  descrRef.textContent = `${bodyRef.style.backgroundColor}`;
}