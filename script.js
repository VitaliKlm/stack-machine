// stackMachineAlgorithm 
// -> a method for parsing mathematical expressions
// specified in postfix notation (RPN) and
// calculate those mathematical expressions

/* DOCUMENTATION:

_ALGORITHM_:

1. The input POSTFIX_EXPRESSION is processed one ELEMENT at a time
2. ELEMENT is checked for CONDITIONS
3. CONDITIONS pushes Number ELEMENT on STACK or
uses Operator ELEMENT to operate with Numbers on STACK
4. STACK is reduced to one element
5. ALGORITHM returns RESULT of POSTFIX_EXPRESSION

_PARAMETRES_:

Operators {Array} - [i1 ... in] = ['+', '-', '*', '/', '^']
POSTFIX_EXPRESSION {Array} - contains Numbers and Operators ELEMENTS
STACK {Array} - accumulate Numbers or results of Operations with them

_RETURNS_:

RESULT of POSTFIX_EXPRESSION {Number} = STACK[0]

_CONDITIONS_:

If the ELEMENT is a Number {
  it pushed to the STACK }

If the ELEMENT == operator[i] {
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

// const postfixExpString = prompt('Please enter a math expression' +
// 'in Reversed Polish notation! Split the elements with spaces.')

// const postfixExpArray = postfixExpString.split(' ')


// const addition = (Num1, Num2) => Num2 + Num1
// const subtraction = (Num1, Num2) => Num2 - Num1
// const multiplication = (Num1, Num2) => Num2 * Num1
// const division = (Num1, Num2) => Num2 / Num1
// const exponentiation = (Num1, Num2) => Num2 ** Num1

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

// const calculationInStack = (stack, operationFunction) => {
//     let Num1 = stack.pop()
//     let Num2 = stack.pop()
//     let operationResult = operationFunction(Num1, Num2)
//     stack.push(operationResult)
// }

// /**
//  * Function use with Array.prototype.reduce()
//  * Recognize element in array -> add numbers in the stack ||
//  * replace 2 numbers on the stack with the result of the math operation
//  *
//  * @Calculate
//  * @param {array} stack - variable for accumulation
//  * @param {number|string} element - recognizable element in array
//  * @return {array} stack - result of the math operation.
//  */

// const stackMachine = (stack, element) => {

//     if ( (+element) || (element == 0) ) {     // if convertible to type Number || Exception for 0
//         stack.push(+element)                  // not ok!?
//     } else if (element == '+') {
//         calculationInStack(stack, addition)
//     } else if (element == '-') {
//         calculationInStack(stack, subtraction)
//     } else if (element == '*') {
//         calculationInStack(stack, multiplication)
//     } else if (element == '/') {
//         calculationInStack(stack, division)
//     } else if (element == '^') {
//         calculationInStack(stack, exponentiation)
//     } else {
//         console.log ('Math Expression Input Error!')
//     }
//
//     return stack
// }


// const postfixExpResult = postfixExpArray.reduce(stackMachine, [])

// const consoleOutput = postfixExpResult[0]
// console.log(consoleOutput)
// alert(consoleOutput)



// shuntingYardAlgorithm 
// -> a method for parsing mathematical expressions
// specified in infix notation and 
// converting them to postfix notation (RPN)

/* DOCUMENTATION:

_ALGORITHM_:

1. The input INFIX_EXPRESSION is processed one ELEMENT at a time
2. ELEMENT is checked for CONDITIONS
3. CONDITIONS pushes Number ELEMENT on OUTPUT or
pushes Operator ELEMENT on OPERATOR_STACK and/or
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
 {name: '(', priority: '1'},   //is it an Operator !?
 {name: ')', priority: '1'}]   //is it an Operator !?
INFIX_EXPRESSION {Array} - contains Numbers and Operators ELEMENTS
OPERATOR_STACK {Array} - accumulate operators with lower PRIORITY
OUTPUT {Array} - accumulate ELEMENTS in order of POSTFIX_EXPRESSION

_RETURNS_:

POSTFIX_EXPRESSION {Array}

_CONDITIONS_:

If the ELEMENT is a Number {  // write a filter function isNumber(ELEMENT) !?
  it pushed to the OUTPUT 
}
If the ELEMENT is '(' {
  ELEMENT push to OPERATOR_STACK
  return no output
}
If the ELEMENT is ')' {
  pop all Operators off the OPERATOR_STACK and onto the OUTPUT until '('
  delete '(' from OPERATOR_STACK
  return OUTPUT
}
If the ELEMENT == Operator[i].name {
  let END_Cicle_1 = true
  Circle_1(REPEAT_Cicle_1) 
    {function_checkPriority}
  ELEMENT push to OPERATOR_STACK }

At the end of reading INFIX_EXPRESSION {
  pop all Operators off the OPERATOR_STACK and onto the OUTPUT
  return OUTPUT 
}

_FUNCTIONS_:

getelement

function_checkPriority (  ) {
  if ELEMENT_PRIORITY <= LAST_IN_OPERATOR_STACK_PRIORITY {
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

// let infixExpArray = [1, '-', 2, '*', '(', 3, '-', 4, ')', '+', 10, '/', 5]  //Test 0
// let infixExpArray = [1, '-', 2, '*', 3, '/', 4]  //Test 1
// let infixExpArray = [1, '^', 2, '-', 3, '^', 4, '*', 5, '+', 6] //Test 2
// let infixExpArray = [1, '+', 2, '/', 3, '/', 4, '^', 5, '*', 6] //Test 3
// let infixExpArray = [1, '^', 2, '-', 3, '*', 4, '+', 5, '+', 6] //Test 4
let infixExpArray = ['(', '(', '(', 2, '-', 3, ')', '*', '(', 3, '+', 2, '*', 4, ')', ')', '-', '(', 6, '-', 1, '*', 2, '^', 3, '/', 4, ')', ')'] //Test 5
console.log(infixExpArray) //////////////

// function for .map
//if the function used with .map doesn't return an element during iteration-> the function return undefined
const Sorting = (element) => {
  console.log('') //////////
  console.log( 'Iteration №' + ++i ) //////////
  console.log('element = ' + element) //////////
  
  if (+element || element == 0) {
    output = element
    console.log('output = ' + output) /////////
    return output
  } 
  if (operatorStack.length == 0) {  // for not to break code! prevents request let lastInStackPriority = ... when operatorStack is empty!
    operatorStack.push(element)
    console.log('stack was empty!')  //////////
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }
 
  const iselement = Operator => Operator.name == element
  const getelementPriority = (Operator, searchCondition) => Operator.find(searchCondition).priority
  const elementPriority = getelementPriority(Operators, iselement)
  console.log('elementPriority = ' + elementPriority) /////////

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

  if (element == '(') {
    operatorStack.push(element)
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }

  if (element == ')') {
    let operatorsArrayInBrackets = []
    while (lastInStack != '(') {
      operatorsArrayInBrackets = operatorsArrayInBrackets.concat(operatorStack.pop())
      lastInStack = getLastInStack(operatorStack)
    }
    operatorStack.pop() // delete '(' from stack
    output = operatorsArrayInBrackets
    return output
  }

  if (elementPriority <= lastInStackPriority) {
    let ArrayInsteadElement = []
    console.log('ArrayInsteadElement = ' + ArrayInsteadElement) /////////
    
    while ( elementPriority <= getLastInStackPriority(Operators, isLastInStack) ) {  //why i can't use lastInStackPriority here? may be because of isLastInStack use a variable

      console.log('elementPriority ' + elementPriority) /////
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
    operatorStack.push(element)
    console.log('output = ' + output) /////////
    console.log('operatorStack = ' + operatorStack) //////////
    return output
  }
  
  else {
    operatorStack.push(element)
    console.log('elementPriority > lastInStackPriority')  //////////
    console.log('operatorStack = ' + operatorStack) //////////
    return undefined
  }
}

// function for .filter    
const removeUndefined = element => element != undefined


let postfixExpArray = infixExpArray.map(Sorting).filter(removeUndefined).flat().concat(operatorStack.reverse())

// infixExpArray.map(Sorting) -> create output array same size as input array
// instead of the  elements in the stack array, 'undefined' elements are placed
// .filter(removeUndefined) -> remove all 'undefined' elements from the output array
// .flat() -> use to extract subarrays -> (subarrays were used instead of single element to save array size while return several elements) 
// .concat(stack) -> add stack array to output array
// use array.reverse instead of arrayStart.push(arrayEnd.pop())

console.log(postfixExpArray)

