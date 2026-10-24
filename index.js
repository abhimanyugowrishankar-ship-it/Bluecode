const studentName = "Abhimanyu TG";
const greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

function sayHello() {
  greeting.textContent = "Hello! I am " + studentName;
  greetButton.addEventListener("click", sayHello);
}
const a=document.querySelector("#buton");
let b=document.querySelector("#name")
function welcome(a){
    b+",I deeply appreciate your visit"
}
a.addEventListener("click",welcome)
console.log(a,b)

