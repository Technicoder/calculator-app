// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumAnswer = document.getElementById('sum-answer');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');
// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click', () => {
    // Get values of 2 inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    //Add together the value of the 2 inputs
    const sum = value1 + value2;

    // inject the sum into the sum 'span' created in html
    sumAnswer.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    // Get values of 2 inputs
    const value1 = subtractInput1.valueAsNumber;
    const value2 = subtractInput2.valueAsNumber;

    //Add together the value of the 2 inputs
    const subtract = value1 - value2;

    // inject the sum into the sum 'span' created in html
    subtractAnswer.textContent = subtract;
});

multiplyButton.addEventListener('click', () => {
    // Get values of 2 inputs
    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;

    //Add together the value of the 2 inputs
    const multiply = value1 * value2;

    // inject the sum into the sum 'span' created in html
    multiplyAnswer.textContent = multiply;
});

divideButton.addEventListener('click', () => {
    // Get values of 2 inputs
    const value1 = divideInput1.valueAsNumber;
    const value2 = divideInput2.valueAsNumber;

    //Add together the value of the 2 inputs
    const divide = value1 / value2;

    // inject the sum into the sum 'span' created in html
    divideAnswer.textContent = divide;
});


function clearInputs()
{

    document.getElementById('sum-input-1').value = ''; 
    document.getElementById('sum-input-2').value = '';
    document.getElementById('sum-answer').value = '';

    document.getElementById('subtract-input-1').value = ''; 
    document.getElementById('subtract-input-2').value = '';
    document.getElementById('subtract-answer').value = '';

    document.getElementById('divide-input-1').value = ''; 
    document.getElementById('divide-input-2').value = '';
    document.getElementById('divide-answer').value = '';

    document.getElementById('multiply-input-1').value = ''; 
    document.getElementById('multiply-input-2').value = '';
    document.getElementById('multiply-answer').value = '';
}

let clearAll = document.getElementById('clear');
clearAll.addEventListener('click', clearInputs);

