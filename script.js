function addToDisplay(value) {
  const display = document.getElementsByName('display')[0];
  const currentValue = display.value;

  // Check if the button clicked is an operator
  if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Do not add the operator if the display is empty or already ends with an operator
      if (currentValue !== '' && !isOperator(currentValue[currentValue.length - 1])) {
          display.value += value;
      }
  } else {
      display.value += value;
  }
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}
