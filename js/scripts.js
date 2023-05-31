function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function lightMode(){
  let lightB = document.body;
  lightB.classList.toggle("light-mode")
}

window.onload = function (){
  let button = document.querySelector(".darkButton");
  button.onclick = darkMode;
  let light = document.querySelector(".lightButton");
  light.onclick = lightMode;}