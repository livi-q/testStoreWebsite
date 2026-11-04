const box = document.querySelector(".box")
const header = document.getElementById("header")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
    header.textContent = "HI HI HI HI CHANGED HI HI ";
    box.style.backgroundColor = `rgb(${r},${b},${g},1)`
    randoumcolor();
});

let r 
let g
let b
function randoumcolor() {
    r = Math.round(Math.random()*256)
    g= Math.round(Math.random()*256)
    b = Math.round(Math.random()*256)

    console.log(r, g ,b)
}