const body = document.body;
const calculation = 0;
var currentCalculation = null;

const calculator = document.createElement('div');

// calculator display
const calculatorDisplay = document.createElement('div');
calculatorDisplay.innerHTML = calculation;

calculator.appendChild(calculatorDisplay);

// buttons container
const inputs = document.createElement('div');

// creates number buttons
const createNumberButton = digit => {
  const button = document.createElement('button');
  button.innerHTML = digit;
  button.onclick = () => {
    console.log(button.innerHTML);
    console.log(typeof button.innerHTML)
    console.log(calculatorDisplay.innerHTML);
    console.log(typeof calculatorDisplay.innerHTML);
  }
  return button;
}

for (var i = 0; i < 10; i++) {
  inputs.appendChild(createNumberButton(i));
}

// plus button
const plusButton = document.createElement('button');
plusButton.innerHTML = '+';
plusButton.onclick = () => {
  currentCalculation = plusButton.innerHTML;
};

inputs.appendChild(plusButton);


calculator.appendChild(inputs);

body.appendChild(calculator);
