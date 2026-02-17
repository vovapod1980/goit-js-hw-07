const body = document.body;
const colorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
