let num = document.querySelectorAll('.numBtn');
let calculatorScreen = document.getElementById('calculator-screen');
let operationBtn = document.querySelectorAll('.operationBtn');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.querySelector('.equalBtn');
const clear = document.getElementById('clear');
const toggleSign = document.getElementById('toggleSign');
const negativeButton = document.querySelector('.negativeButton');
const negativeHTML = document.createElement('p');
negativeHTML.textContent = "-";
negativeHTML.classList.add("negativeButton");
negativeHTML.style.display = 'none';
calculatorScreen.appendChild(negativeHTML);
let firstValue = 0;
let secondValue = 0;
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;
let sign = false;
let equalBtnClicked = false;
let tempValue = 0;



function addNum(firstValue, secondValue) {
  let sum = 0;
  sum = firstValue + secondValue;
  return sum;
}

function subtractNum(firstValue, secondValue) {
  let difference = 0;
  difference = firstValue - secondValue;
  return difference;
}

function multiplyNum(firstValue, secondValue) {
  let product = 0;
  product = firstValue * secondValue;
  return product;
}

function divideNum(firstValue, secondValue) {
  let quotient = 0;
  quotient = firstValue / secondValue;
  return quotient;
}


function numInput() {
  let firstNumber = '';
  let secondNumber = '';
  let operationBtnClicked = false;
  let firstNumberText;
  let negativeSign = document.createElement('p');
  clear.addEventListener('click', function(){
    calculatorScreen.innerHTML = "";
    negativeHTML.style.display = "none";
    calculatorScreen.appendChild(negativeHTML);
    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
    operationBtnClicked = false;
    sign = false;
    firstNumber = '';
    secondNumber = '';
    equalBtnClicked = false;
    });
  toggleSign.addEventListener('click', function(){
    if(negativeHTML.style.display === "none"){
      negativeHTML.style.display = "block";
      if(negativeHTML.style.display === "block") {
        sign = true;
      }
        if(sign === true && operationBtnClicked === false) {
          firstValue = -1 * parseFloat(firstNumber);
          console.log('negative');
          console.log('firstValue: ' + firstValue);
        } else if(sign === true && operationBtnClicked === true) {
          secondValue = -1 * parseFloat(secondNumber);
        }
      }
    });
    operationBtn.forEach(operationBtn => operationBtn.addEventListener('click', function(){
      operationBtnClicked = true;
      if(operationBtnClicked === true){
        calculatorScreen.innerHTML = "";
        negativeHTML.style.display = "none";
        calculatorScreen.appendChild(negativeHTML);
        console.log(operationBtnClicked);
        sign = false;
        }
      }));
  num.forEach(num => num.addEventListener('click', function(){
    //back end functioning to calculate
    if(operationBtnClicked === false && equalBtnClicked === false){
    firstNumber += num.textContent;
    if(sign === true) {
      firstValue = -1 * parseFloat(firstNumber);
    } else {
      firstValue = parseFloat(firstNumber);
    }
    //what appears on calculator screen
    firstNumberText = document.createElement('p');
    firstNumberText.textContent = num.textContent;
    calculatorScreen.appendChild(firstNumberText);
  } else if(operationBtnClicked === true) {
    //back end to calculate
    if(equalBtnClicked === false){
    secondNumber += num.textContent;
    if(sign === true) {
    secondValue = -1 * parseFloat(secondNumber);
    console.log('yes');
  } else {
    secondValue = parseFloat(secondNumber);
  }
  } else {
    secondNumber += num.textContent;
    secondValue = parseFloat(secondNumber);
    }
    //clear the screen and display secondValue;
    let secondNumText = document.createElement('p');
    secondNumText.textContent = num.textContent;
    calculatorScreen.appendChild(secondNumText);
  }
}));
  function operate () {
  add.addEventListener('click', function(){
    addition = true;
    subtraction = false;
    multiplication = false;
    division = false;
  });
  subtract.addEventListener('click', function(){
    subtraction = true;
    addition = false;
    division = false;
    multiplication = false;
  });
  multiply.addEventListener('click', function(){
    multiplication = true;
    subtraction = false;
    addition = false;
    division = false;

  });
  divide.addEventListener('click', function(){
    division = true;
    subtraction = false;
    addition = false;
    multiplication = false;
  });
  equals.addEventListener('click', function(operator){
    equalBtnClicked = true;
    calculatorScreen.innerHTML = "";
    if(addition === true) {
      addition = false;
      let addText = document.createElement('p');
      tempValue = addNum(firstValue, secondValue);
      addText.textContent = tempValue;
      calculatorScreen.appendChild(addText);
    } else if(subtraction === true){
      let subText = document.createElement('p');
      tempValue = subtractNum(firstValue, secondValue);
      subText.textContent = tempValue;
      calculatorScreen.appendChild(subText);
    } else if(multiplication === true){
      let multiText = document.createElement('p');
      tempValue = multiplyNum(firstValue, secondValue);
      multiText.textContent = tempValue;
      calculatorScreen.appendChild(multiText);
    } else if(division === true){
      let dividText = document.createElement('p');
      tempValue = divideNum(firstValue, secondValue);
      dividText.textContent = tempValue;
      calculatorScreen.appendChild(dividText);
    }
    if(equalBtnClicked === true) {
      secondNumber = '';
      secondValue = 0;
      firstValue = tempValue;
      console.log(firstValue);
    }
  });
  }

  operate();
}

numInput();
