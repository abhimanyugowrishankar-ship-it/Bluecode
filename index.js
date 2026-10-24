
const greetBtn = document.getElementById("greetBtn");
const greetMessage = document.getElementById("greetMessage");

greetBtn.addEventListener("click", function() {
    greetMessage.textContent = "Abhimanyu says Hola!";
});


const submitNameBtn = document.getElementById("submitNameBtn");
const userNameInput = document.getElementById("userNameInput");
const displayName = document.getElementById("displayName");

submitNameBtn.addEventListener("click", function() {
    const enteredName = userNameInput.value.trim();
    
    if (enteredName !== "") {
        displayName.textContent = `I deeply appreciate your presense mortal, ${enteredName}!`;
    } else {
        displayName.textContent = "Please enter a valid name first!";
    }
});

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

