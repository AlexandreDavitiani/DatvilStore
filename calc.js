let a = ""; // First number
let b = ""; // Second number
let sign = ""; // Operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// Display
const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = '';
  b = '';
  sign = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  // Check if the clicked element is a button
  if (!event.target.classList.contains('btn')) return;

  // Check if the button clicked is 'AC'
  if (event.target.classList.contains('ac')) return;

  // Clear the display for new input if calculation is finished
  if (finish) {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = "";
  }

  // Get the pressed button
  const key = event.target.textContent;

  // If a digit or a dot is pressed
  if (digit.includes(key)) {
    if (key === '.' && ((b === "" && a.includes('.')) || (b !== "" && b.includes('.')))) {
      return;
    }
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  // If an operator is pressed
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  // If the equal sign is pressed
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        if (b === '0') {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }

    if (a === 10) {
      out.textContent = "МИШИК ПИШИК";
    } else {
      out.textContent = a;
    }

    finish = true;
    console.log(a, b, sign);
  }

  // If +/- is pressed
  if (key === "+/-") {
    if (b === "") {
      a = (-a).toString();
      out.textContent = a;
    } else {
      b = (-b).toString();
      out.textContent = b;
    }
    console.log(a, b, sign);
  }

  // If % is pressed
  if (key === "%") {
    if (b === "") {
      a = (a / 100).toString();
      out.textContent = a;
    } else {
      b = (b / 100).toString();
      out.textContent = b;
    }
    console.log(a, b, sign);
  }
}
