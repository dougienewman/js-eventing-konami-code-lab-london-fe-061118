const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

console.log(code)

function init() {
  // Write your JavaScript code inside the init() function

const body = document.querySelector("body")

body.addEventListener("keydown",function(event) {
alert("I was keydowned!");

}
)
console.log(body)
}

init()



let index = 0;
  const key = parseInt(event.detail || event.which);
 
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
}
      
      