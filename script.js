/** shuntingYardAlgorithm 
 * a method for parsing mathematical expressions
 * specified in infix notation and 
 * converting them to postfix notation ->
 * reverse polish notation (RPN)
*/

const infixExpString = prompt('Please enter a math expression' +
'in Infix notation! Split the elements with spaces.')
const infixExpArray = infixExpString.split(' ')
const Operators =
[{name: '+', priority: 2},
 {name: '-', priority: 2}, 
 {name: '*', priority: 3}, 
 {name: '/', priority: 3}, 
 {name: '^', priority: 4}, 
 {name: '(', priority: 1},
 {name: ')', priority: 1}
]
let operatorStack = [] 

console.log(infixExpArray)

/**
 * Function use with Array.prototype.map()
 * Recognize element in array then push number to output or
 * push out-of-order operator in operatorStack and return undefined element or
 * push operator that goes in order to output
 *
 * @Transform
 * @param {array} operatorStack - for accumulating operators with less priority
 * @param {number||string} element - elements of infixExpArray to transform
 * @return {array} output - elements of transformed array in order
*/
const Sorting = element => {

  // TODO FIXME: if convertible to type Number || Exception for 0 -> rewrite!?
  if (+element || element === '0') {
    output = element
    return output
  } 

  // prevent request of lastInStackPriority when operatorStack is empty!
  if (operatorStack.length === 0) {
    operatorStack.push(element)
    return undefined
  }
 
  // TODO: why Operator? strange param naming, Array is better
  const getItemPriority = (Operator, item) => {
    const search = Operator => Operator.name === item
    return Operator.find(search).priority
  }

  const getLastInStack = stack => stack[stack.length - 1] /////
  let lastInStack = getLastInStack(operatorStack)

  const lastInStackPriority = getItemPriority(Operators, lastInStack)
  const elementPriority = getItemPriority(Operators, element)
  
  // TODO FIXME: unused function!
  // const arrayExpansion = (arrayToExpand, arrayToCut) => {
  //   arrayToExpand = arrayToExpand.concat(arrayToCut.pop())
  // }

  if (element === '(') {
    operatorStack.push(element)
    return undefined
  }

  if (element === ')') {
    let operatorsInBrackets = []
    while (lastInStack !== '(') {

      // TODO FIXME: not DRY!
      operatorsInBrackets = operatorsInBrackets.concat(operatorStack.pop())
      lastInStack = getLastInStack(operatorStack)
    }

    // delete '(' from operatorStack
    operatorStack.pop() 
    output = operatorsInBrackets
    return output
  }

  if (elementPriority <= lastInStackPriority) {
    let ArrayInsteadElement = []

    while ( elementPriority <= getItemPriority(Operators, lastInStack) ) {

      // TODO FIXME: not DRY!
      ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
      
      if (operatorStack.length === 0) {
        break
      }
      else lastInStack = getLastInStack(operatorStack)
    }

    output = ArrayInsteadElement
    operatorStack.push(element) 
    return output
  }
  
  else {
    operatorStack.push(element)
    return undefined
  }
}

// function for Array.prototype.filter
const removeUndefined = element => element !== undefined


/** infixExpArray.map(Sorting) -> create output array same size as input array
 * with 'undefined' elements instead of the elements in the operatorStack array
 * .filter(removeUndefined) -> remove all 'undefined' from the output array
 * .flat() -> use to extract subarrays were used in output array instead of
 * single element to save input array size while return several elements 
 * .concat(operatorStack.reverse) -> add operatorStack array to output array
 * use operatorStack.reverse instead of .push(operatorStack.pop()) repetition
*/
let postfixExpArray = infixExpArray.map(Sorting)
.filter(removeUndefined)
.flat()
.concat(operatorStack.reverse())

console.log(postfixExpArray)



/** stackMachineAlgorithm 
 * a method for parsing mathematical expressions
 * specified in postfix notation (RPN) and
 * calculate those mathematical expressions
*/

// functions make math operation with numbers
const addition = (num1, num2) => num2 + num1
const division = (num1, num2) => num2 / num1
const subtraction = (num1, num2) => num2 - num1
const multiplication = (num1, num2) => num2 * num1
const exponentiation = (num1, num2) => num2 ** num1

/**
 * Remove and return numbers from numStack and 
 * make math operation with numbers and 
 * add result of calculations in numStack
 *
 * @Calculate
 * @param {array} numStack - array for accumulating numbers
 * @param {function} operationFunction - the math operation function
 * @return {number} operationResult - result of the math operation.
*/
const calculationInStack = (numStack, operationFunction) => {
  let num1 = numStack.pop()
  let num2 = numStack.pop()
  let operationResult = operationFunction(num1, num2)
  numStack.push(operationResult)
}

/**
 * Function use with Array.prototype.reduce()
 * Recognize element in array -> add numbers in numStack or
 * replace 2 numbers on numStack with the result of the math operation
 *
 * @Calculate
 * @param {array} numStack - array for accumulating numbers
 * @param {number||string} element - recognizable element in array
 * @return {array} numStack - result of the math operation.
*/
const stackMachine = (numStack, element) => {

// TODO FIXME: if convertible to type Number || Exception for 0 -> rewrite!?
  if ( (+element) || (element === '0') ) {
    numStack.push(+element)
  } else if (element === '+') {
    calculationInStack(numStack, addition)
  } else if (element === '-') {
    calculationInStack(numStack, subtraction)
  } else if (element === '*') {
    calculationInStack(numStack, multiplication)
  } else if (element === '/') {
    calculationInStack(numStack, division)
  } else if (element === '^') {
    calculationInStack(numStack, exponentiation)
  } else {
    console.log ('Math Expression Input Error!')
  }
  return numStack
}


/** postfixExpArray.reduce -> reduce postfixExpArray to one element
 * using stackMachine algorithm function
 * [] - numStack start value
*/
const postfixExpResult = postfixExpArray.reduce(stackMachine, [])
const consoleOutput = postfixExpResult[0]
console.log(consoleOutput)
alert(consoleOutput)