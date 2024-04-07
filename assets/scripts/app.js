//to covert string to number we used the parseInt or ParseFloat function in javascript
// to covert number to string we used the toString() function in javascript

// let errorMessage = "An Error" + "occur";
// to add line break in javascript used \n (white-space: pre;)
// to add a back slace we use \' to output to you add \\ to out simple back slace

const defaultResult = 0;
let currentResult = defaultResult;
let longEntries = [];

// currentResult = currentResult + (10 * 2) / 2 - 1;
// calculationDescription = "(" + currentResult + " + 10) * 5";
// to read a single element in array we use the [](curly bruce) in from the name of the array

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
     const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
     outputResult(currentResult, calDescription); // from vendor js file
}

function getUserNumberInput() {
     return parseInt(userInput.value);
}

function usingObjectToGetUserInput(operator, prevResuit, number, result) {
     const longEntry = {
          operator: operator,
          prevResuit: prevResuit,
          Number: number,
          result: result,
     };
     longEntries.push(longEntry);
     console.log(longEntries);
}

function calculateResult(calculatorTypes) {
     const enterNumber = getUserNumberInput();
     const initialResult = currentResult;
     let mathOperator;

     if (calculatorTypes === "ADD") {
          currentResult = currentResult + enterNumber;
          mathOperator = "+";
     } else if (calculatorTypes === "SUBTRACT") {
          currentResult -= enterNumber;``
          mathOperator = "-";
     } else if (calculatorTypes === "MULTIPLY") {
          currentResult *= enterNumber;
          mathOperator = "*";
     } else {
          currentResult /= enterNumber;
          mathOperator = "/";
     }

     if (
          calculatorTypes !== "ADD" &&
          calculatorTypes !== "SUBTRACT" &&
          calculatorTypes !== "MULTIPLY" &&
          calculatorTypes !== "DIVIDE"
     ) {
          return;
     }
     createAndWriteOutput(mathOperator, initialResult, enterNumber);
     usingObjectToGetUserInput(
          calculatorTypes,
          currentResult,
          initialResult,
          enterNumber
     );
}

function add() {
     calculateResult("ADD");
}

function subtract() {
     calculateResult("SUBTRACT");
}
function multiply() {
     calculateResult("MULTIPLY");
}
function divide() {
     calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
