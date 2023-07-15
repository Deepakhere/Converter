const celsiusElement = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const temperType = document.querySelector("#temper-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElement.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (temperType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElement.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
  } else if (temperType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElement.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
  }
}
