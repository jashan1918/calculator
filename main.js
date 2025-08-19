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

  if(num2 === 0) return alert("you can't divide by 0")

  return num1 / num2;
}



function operate(operator, a, b) {

  a = parseFloat(a);
  b = parseFloat(b);  

  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);

  else{
    return "Error"
  }
}


document.getElementById("clear").addEventListener("click", clearScreen);

function clearScreen() {
  screen.textContent = "";
}




const screen = document.getElementById("screen");
const buttonsDiv = document.getElementById("buttons")

buttonsDiv.addEventListener("click" , (e) => {

  //check if the button was clicked

  if(e.target.tagName === "BUTTON") {

    console.log("this is working")

    const value = e.target.textContent
    const current = screen.textContent

    console.log(value);
    if((value >= '0' && value <= '9')){
      screen.textContent += value;
    }if(value === '.') {
      const parts = screen.textContent.split(/[\+\-|*\/]/)
      const lastNumber = parts.pop();

      if(!lastNumber.includes(".")){
        screen.textContent += value
      }
    }


if(value ==="+" ||  value === "-" ||value  === "x" ||value  === "/"){

  handleOperators(value);
}
  }
})


function handleOperators(value) {

  //screen if empty
  console.log("this is the handleOpertars function and its working")
  if(screen.textContent.trim() === "") {
    if(value === "+" || value === "x" || value === "/"){
      return;
    }else {
     screen.textContent += value
     console.log("this is happening")
    }
    }

    //SCREEN HAS SOME CONTENT

    const lastChar = screen.textContent.slice(-1);
    const operators = ["+", "-", "x", "/"];

    if(operators.includes(lastChar)) {
      screen.textContent = screen.textContent.slice(0, -1) + value;
    }else{

      screen.textContent += value;
    }

}
