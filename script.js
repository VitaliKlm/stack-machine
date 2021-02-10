// stackMachineAlgorithm 
// -> a method for parsing mathematical expressions
// specified in postfix notation (RPN) and
// calculate those mathematical expressions

/* DOCUMENTATION:
_ALGORITHM_:

1. The input POSTFIX_EXPRESSION is processed one SYMBOL at a time
2. SYMBOL is checked for CONDITIONS
3. CONDITIONS pushes Number SYMBOL on STACK or
uses Operator SYMBOL to operate with Numbers on STACK
4. STACK is reduced to one element
5. ALGORITHM returns RESULT of POSTFIX_EXPRESSION

_PARAMETRES_:

Operators {Array} - [i1 ... in] = ['+', '-', '*', '/', '^']
POSTFIX_EXPRESSION {Array} - contains Numbers and Operators SYMBOLS
STACK {Array} - accumulate Numbers or results of Operations with them

_RETURNS_:

RESULT of POSTFIX_EXPRESSION {Number} - STACK[0]

_CONDITIONS_:

If the SYMBOL is a Number {
  it pushed to the STACK }

If the SYMBOL == operator[i] {
  function_0 }

At the end of reading {
  Return RESULT of the EXPRESSION = STACK[0] }

_FUNCTIONS_:

function_0 ( function_[i] ) {
  Replace 2 numbers (num1, num2) on the STACK 
  with function_[i] }

function_[i] (num1, num2) {
  return result of the math operation[i] with 2 nums }
 */


// // Working Code

// const mathExpStringPostfix = prompt('Please enter a math expression' +
// 'in Reversed Polish notation! Use " " to split the Symbols.')

// const mathExpArray = mathExpStringPostfix.split(' ')
// const mathExpResult = mathExpArray.reduce(stackMachine, [])

// const consoleOutput = mathExpResult[0]
// console.log(consoleOutput)
// alert(consoleOutput)



// /**
//  * Function use with Array.prototype.reduce()
//  * Recognize element in array -> add numbers in the stack ||
//  * replace 2 numbers on the stack with the result of the math operation
//  *
//  * @Calculate
//  * @param {array} stack - variable for accumulation
//  * @param {number|string} recognizableElement - element of the math expression in array
//  * @return {array} stack - result of the math operation.
//  */

// function stackMachine (stack,recognizableElement) {

//     if ( (+recognizableElement) || (recognizableElement == 0) ) {  // if convertible to type Number || Exception for 0
//         stack.push(+recognizableElement)                           // it is converted to type Number and pushed to stack
//     } else if (recognizableElement == '+') {
//         calculationInStack(stack, addition)
//     } else if (recognizableElement == '-') {
//         calculationInStack(stack, subtraction)
//     } else if (recognizableElement == '*') {
//         calculationInStack(stack, multiplication)
//     } else if (recognizableElement == '/') {
//         calculationInStack(stack, division)
//     } else if (recognizableElement == '^') {
//         calculationInStack(stack, exponentiation)
//     } else {
//         console.log ('Math Expression Input Error')  //Break statement
//         stack = []
//         return stack
//     }

//     return stack
// }

// /**
//  * Remove and return numbers from stack && 
//  * make math operation with numbers && 
//  * add result of calculations in stack
//  *
//  * @Calculate
//  * @param {array} stack - variable for accumulation
//  * @param {function} operationFunction - the math operation function
//  * @return {number} operationResult - result of the math operation.
//  */

// function calculationInStack (stack, operationFunction) {
//     let firstNum = stack.pop()
//     let secondNum = stack.pop()
//     let operationResult = operationFunction(firstNum, secondNum)
//     stack.push(operationResult)
// }

// function addition (secondAddendNum, firstAddendNum) {
//     return firstAddendNum + secondAddendNum
// }

// function subtraction (subtrahendNum, minuendNum) {
//     return minuendNum - subtrahendNum
// }

// function multiplication (multiplierNum, multiplicandNum) {
//     return multiplicandNum * multiplierNum
// }

// function division (dividerNum, dividendNum) {
//     return dividendNum / dividerNum
// }

// function exponentiation (exponentNum, raisedNum) {
//     return raisedNum ** exponentNum
// }




// shuntingYardAlgorithm 
// -> a method for parsing mathematical expressions
// specified in infix notation and 
// converting them to postfix notation (RPN)

/* DOCUMENTATION:

_ALGORITHM_:

1. The input INFIX_EXPRESSION is processed one SYMBOL at a time
2. SYMBOL is checked for CONDITIONS
3. CONDITIONS pushes Number SYMBOL on OUTPUT or
pushes Operator SYMBOL on OPERATOR_STACK and/or
remove Operator(s) from OPERATOR_STACK to OUTPUT
4. INFIX_EXPRESSION is mapped(transformed) to OUTPUT array
5. At the end of processing INFIX_EXPRESSION ALGORITHM 
pop all Operators off the OPERATOR_STACK and onto the OUTPUT
and returns the result as POSTFIX_EXPRESSION array

_PARAMETRES_:
Operators {Array} - [i1 ... in] =
[{name: '+', priority: '2'},
 {name: '-', priority: '2'}, 
 {name: '*', priority: '3'}, 
 {name: '/', priority: '3'}, 
 {name: '^', priority: '4'}, 
 {name: '(', priority: '1'}, 
 {name: ')', priority: '1'}]
INFIX_EXPRESSION {Array} - contains Numbers and Operators SYMBOLS
OPERATOR_STACK {Array} - accumulate operators with lower PRIORITY
OUTPUT {Array} - accumulate SYMBOLS in order of POSTFIX_EXPRESSION

_RETURNS_:

POSTFIX_EXPRESSION {Array}

_CONDITIONS_:

If the SYMBOL is a Number {  // !write a filter function isNumber(SYMBOL)
  it pushed to the OUTPUT }

If the SYMBOL == Operator[i].name {
  let END_Cicle_1 = true
  Circle_1(REPEAT_Cicle_1) 
    {function_checkPriority}
  SYMBOL push to OPERATOR_STACK }

At the end of reading INFIX_EXPRESSION {
  pop all Operators off the OPERATOR_STACK and onto the OUTPUT
  return OUTPUT }

_FUNCTIONS_:

function_checkPriority (  ) {
  if SYMBOL_PRIORITY <= LAST_IN_OPERATOR_STACK_PRIORITY {
    LAST_IN_OPERATOR_STACK is removed from OPERATOR_STACK to the OUTPUT } 
} else REPEAT_Circle_1 = false
*/


// Working Prototype!
// Problem is different code style!!!
// should make refactoring && make code DRYer!!!

const Operators =
[{name: '+', priority: 2},
 {name: '-', priority: 2}, 
 {name: '*', priority: 3}, 
 {name: '/', priority: 3}, 
 {name: '^', priority: 4}, 
 {name: '(', priority: 1},  // is it an Operator???
 {name: ')', priority: 1}]  // is it an Operator???

let operatorStack = []
let i = 0  ///////////// count of iterations
let InfixArray = [1, '-', 2, '*', '(', 3, '-', 4, ')', '+', 10, '/', 5]  //Test 0
// let InfixArray = [1, '-', 2, '*', 3, '/', 4]  //Test 1
// let InfixArray = [1, '^', 2, '-', 3, '^', 4, '*', 5, '+', 6] //Test 2
// let InfixArray = [1, '+', 2, '/', 3, '/', 4, '^', 5, '*', 6] //Test 3
// let InfixArray = [1, '^', 2, '-', 3, '*', 4, '+', 5, '+', 6] //Test 4
console.log(InfixArray) //////////////

let PostfixArray = InfixArray.map(Sorting).filter(removeUndefined).flat().concat(operatorStack.reverse())

// InfixArray.map(Sorting) -> create output array same size as input array
// instead of the  elements in the stack array, 'undefined' elements are placed
// .filter(removeUndefined) -> remove all 'undefined' elements from the output array
// .flat() -> use to extract subarrays -> (subarrays were used instead of single element to save array size while return several elements) 
// .concat(stack) -> add stack array to output array
// use array.reverse instead of arrayStart.push(arrayEnd.pop())

console.log(PostfixArray)

// function for .map
//if the function used with .map doesn't return an element during iteration-> the function return undefined
function Sorting(item) {
  console.log('') //////////
  console.log( 'Iteration №' + ++i ) //////////
  console.log('item = ' + item) //////////
  
  if (+item || item == 0) {
    output = item
    console.log('output = ' + output) /////////
    return output
  } 
  if (operatorStack.length == 0) {  // for not to break code! prevents request let lastInStackPriority = ... when operatorStack is empty!
    operatorStack.push(item)
    console.log('stack was empty!')  //////////
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }
 
  const isItem = Operator => Operator.name == item
  const getItemPriority = (Operator, searchCondition) => Operator.find(searchCondition).priority
  const itemPriority = getItemPriority(Operators, isItem)
  console.log('itemPriority = ' + itemPriority) /////////

  const getLastInStack = stack => stack[stack.length - 1]
  let lastInStack = getLastInStack(operatorStack)
  console.log('lastInStack = ' + lastInStack) /////////

  const isLastInStack = Operator => Operator.name == lastInStack
  const getLastInStackPriority = (Operator, searchCondition) => Operator.find(searchCondition).priority
  const lastInStackPriority = getLastInStackPriority(Operators, isLastInStack)   
  console.log('lastInStackPriority = ' + lastInStackPriority) /////////
  console.log('') /////
  console.log('Loop') /////
  console.log('') /////

  if (item == '(') {
    operatorStack.push(item)
    console.log('output = ' + output) /////////
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }

  if (item == ')') {
    let operatorsArrayInBrackets = []
    while (lastInStack != '(') {
      operatorsArrayInBrackets = operatorsArrayInBrackets.concat(operatorStack.pop())
      lastInStack = getLastInStack(operatorStack)
    }
    operatorStack.pop() // delete '(' from stack
    output = operatorsArrayInBrackets
    return output
  }

  if (itemPriority <= lastInStackPriority) {
    let ArrayInsteadElement = []
    console.log('ArrayInsteadElement = ' + ArrayInsteadElement) /////////
    
    while ( itemPriority <= getLastInStackPriority(Operators, isLastInStack) ) {  //why i can't use lastInStackPriority here? may be because of isLastInStack use a variable

      console.log('itemPriority ' + itemPriority) /////
      console.log('operatorStack = ' + operatorStack) //////////
      console.log('lastInStack = ' + lastInStack) /////
      ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
      console.log('ArrayInsteadElement = ' + ArrayInsteadElement) /////////
      console.log('operatorStack = ' + operatorStack) /////

      if (operatorStack.length == 0) {
        break
      }
      else lastInStack = getLastInStack(operatorStack)
    }

    console.log('') /////
    console.log('End Loop') /////
    console.log('') /////
    output = ArrayInsteadElement
    operatorStack.push(item)
    console.log('output = ' + output) /////////
    console.log('operatorStack = ' + operatorStack) //////////
    return output
  }
  
  else {
    operatorStack.push(item)
    console.log('itemPriority > lastInStackPriority')  //////////
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }
}

// function for .filter    
function removeUndefined(item) {
  return (item != undefined)
}
