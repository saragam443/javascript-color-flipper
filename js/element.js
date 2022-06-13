const colors = ["Maroon", "Olive", "Indigo", "Orange", "Blue", "Brown", "Red", "Purple", "Yellow", "Blue", "Green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const element = document.getElementsByClassName("element-class");

function elementColorFlipper(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    element[0].style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

btn.addEventListener('click', elementColorFlipper);