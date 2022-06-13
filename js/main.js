const colors = ["green", "yellow", "blue", "orange", "orangered", "red", "rgba(133,122,200)", "#f15025", "#fff"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

function flipperFunction(){
    // get random number between 0-3
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}


btn.addEventListener('click', flipperFunction);

