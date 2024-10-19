const buttonsEl = document.querySelectorAll('button');

const inputFieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener('click', function () {
    const buttonValue = buttonsEl[i].innerHTML;
    if (buttonValue === 'C') {
      clearResult();
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = '';
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
