/** stackMachineAlgorithm 
 * a method for parsing mathematical expressions
 * specified in postfix notation (RPN) and
 * calculate those mathematical expressions
*/

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
  it pushed to the STACK 
}
If the ELEMENT == operator[i] {
  function_0 
}
At the end of reading {
  Return RESULT of the EXPRESSION = STACK[0] 
}

_FUNCTIONS_:

function_0 ( function_[i] ) {
  Replace 2 numbers (num1, num2) on the STACK 
  with function_[i] 
}
function_[i] (num1, num2) {
  return result of the math operation[i] with 2 nums 
}
*/


// Working Code:

// const postfixExpString = prompt('Please enter a math expression' +
// 'in Reversed Polish (postfix) notation! Split the elements with spaces.')
// const postfixExpArray = postfixExpString.split(' ')


// functions make math operation with numbers
const addition = (Num1, Num2) => Num2 + Num1
const division = (Num1, Num2) => Num2 / Num1
const subtraction = (Num1, Num2) => Num2 - Num1
const multiplication = (Num1, Num2) => Num2 * Num1
const exponentiation = (Num1, Num2) => Num2 ** Num1

/**
 * Remove and return numbers from stack and 
 * make math operation with numbers and 
 * add result of calculations in stack
 *
 * @Calculate
 * @param {array} stack - array for accumulating numbers
 * @param {function} operationFunction - the math operation function
 * @return {number} operationResult - result of the math operation.
*/
const calculationInStack = (stack, operationFunction) => {
  let Num1 = stack.pop()
  let Num2 = stack.pop()
  let operationResult = operationFunction(Num1, Num2)
  stack.push(operationResult)
}

/**
 * Function use with Array.prototype.reduce()
 * Recognize element in array -> add numbers in stack or
 * replace 2 numbers on stack with the result of the math operation
 *
 * @Calculate
 * @param {array} stack - array for accumulating numbers
 * @param {number||string} element - recognizable element in array
 * @return {array} stack - result of the math operation.
*/
const stackMachine = (stack, element) => {

// TODO FIXME: if convertible to type Number || Exception for 0 -> rewrite!?
  if ( (+element) || (element == 0) ) {
    stack.push(+element)
  } else if (element == '+') {
    calculationInStack(stack, addition)
  } else if (element == '-') {
    calculationInStack(stack, subtraction)
  } else if (element == '*') {
    calculationInStack(stack, multiplication)
  } else if (element == '/') {
    calculationInStack(stack, division)
  } else if (element == '^') {
    calculationInStack(stack, exponentiation)
  } else {
    console.log ('Math Expression Input Error!')
  }
  return stack
}


/** postfixExpArray.reduce -> reduce postfixExpArray to one element
 * using stackMachine algorithm function
 * [] - stack start value
*/
// const postfixExpResult = postfixExpArray.reduce(stackMachine, [])
// const consoleOutput = postfixExpResult[0]
// console.log(consoleOutput)
// alert(consoleOutput)



/** shuntingYardAlgorithm 
 * a method for parsing mathematical expressions
 * specified in infix notation and 
 * converting them to postfix notation (RPN)
 */

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
 {name: '(', priority: '1'},
 {name: ')', priority: '1'}]
INFIX_EXPRESSION {Array} - contains Numbers and Operators ELEMENTS
OPERATOR_STACK {Array} - accumulate operators with lower PRIORITY
OUTPUT {Array} - accumulate ELEMENTS in order of POSTFIX_EXPRESSION

_RETURNS_:

POSTFIX_EXPRESSION {Array}

_CONDITIONS_:

If the ELEMENT is a Number {
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
  let REPEAT_Cicle_1 = true
  Circle_1(REPEAT_Cicle_1) 
    {function_checkPriority}
  ELEMENT push to OPERATOR_STACK }

At the end of reading INFIX_EXPRESSION {
  pop all Operators off the OPERATOR_STACK and onto the OUTPUT
  return OUTPUT 
}

_FUNCTIONS_:

function_checkPriority (  ) {
  function_getElementPriority
  function_getLastInStackPriority
  if ELEMENT_PRIORITY <= LAST_IN_OPERATOR_STACK_PRIORITY {
    LAST_IN_OPERATOR_STACK is removed from OPERATOR_STACK to the OUTPUT
  } else REPEAT_Circle_1 = false 
}
*/


// Working Code:

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

const infixExpString = prompt('Please enter a math expression' +
'in Infix notation! Split the elements with spaces.')
const infixExpArray = infixExpString.split(' ')

console.log(infixExpArray)


/**
 * Function use with Array.prototype.map()
 * Recognize element in array -> push number to output or
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
  if (+element || element == 0) {
    output = +element
    return output
  } 

  // prevent request of lastInStackPriority when operatorStack is empty!
  if (operatorStack.length == 0) {
    operatorStack.push(element)
    return undefined
  }
 
  // TODO: why Operator? strange param naming, Array is better
  const getItemPriority = (Operator, item) => {
    const search = Operator => Operator.name == item
    return Operator.find(search).priority
  }

  const getLastInStack = stack => stack[stack.length - 1]
  let lastInStack = getLastInStack(operatorStack)

  const lastInStackPriority = getItemPriority(Operators, lastInStack)
  const elementPriority = getItemPriority(Operators, element)
  
  // TODO FIXME: unused function!
  // const arrayExpansion = (arrayToExpand, arrayToCut) => {
  //   arrayToExpand = arrayToExpand.concat(arrayToCut.pop())
  // }

  if (element == '(') {
    operatorStack.push(element)
    return undefined
  }

  if (element == ')') {
    let operatorsInBrackets = []
    while (lastInStack != '(') {

      // TODO FIXME: not DRY!
      operatorsInBrackets = operatorsInBrackets.concat(operatorStack.pop())
      lastInStack = getLastInStack(operatorStack)
    }

    // delete '(' from stack
    operatorStack.pop() 
    output = operatorsInBrackets
    return output
  }

  if (elementPriority <= lastInStackPriority) {
    let ArrayInsteadElement = []

    while ( elementPriority <= getItemPriority(Operators, lastInStack) ) {

      // TODO FIXME: not DRY!
      ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
      
      if (operatorStack.length == 0) {
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
const removeUndefined = element => element != undefined


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