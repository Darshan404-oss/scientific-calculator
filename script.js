let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  let current = display.innerText;
  display.innerText = current.length > 1 ? current.slice(0, -1) : '0';
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
