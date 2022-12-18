const up = document.querySelector(".increase");
const down = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const counter = document.querySelector(".counter");

let value = 0;
up.addEventListener("click", function () {
  value += 1;
  counter.textContent = value;
  setColor(value);
});

down.addEventListener("click", function () {
  value -= 1;
  counter.textContent = value;
  setColor(value);
});

reset.addEventListener("click", function () {
  value = 0;
  counter.textContent = value;
  setColor(value);
});

function setColor(value) {
  if (value == 0) counter.style.color = "#161c2d";
  else if (value > 0) counter.style.color = "#42ba96";
  else counter.style.color = "#df4759";
}
