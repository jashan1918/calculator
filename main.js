function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {

  if(b === 0) return alert("you can't divide by 0")

  return num1 / num2;
}

function operate(operator, a, b) {

  const a = parsefloat(a);
  const b = parsefloat(b);  

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);

  else{
    return "Error"
  }
}

const result = operate('+' , 5, 10);
console.log(result);

const screen = document.getElementById("screen");
const buttonsDiv = document.getElementById("buttons")

buttonsDiv.addEventListener("click" , (e) => {
  //check if the button was clicked
  
})