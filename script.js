// Working Code

const mathExpStringPostfix = prompt('Please enter a math expression in Reversed Polish notation! ' +
                                    '(Use " " to split the Operands and Operators. ')

const mathExpArray = mathExpStringPostfix.split(" ")
const mathExpResult = mathExpArray.reduce(stackMachine, [])       // stack reduce to one element

const consoleOutput = mathExpResult[0]
console.log(consoleOutput)
alert(consoleOutput)


/**
 * Function use with Array.prototype.reduce()
 * Recognize element in array -> convert element to type 'number' && add number in the stack ||
 * replace 2 numbers on the stack with the result of the math operation
 *
 * @Calculate
 * @param {array} stack - variable for accumulation
 * @param {number|string} recognizableElement - element of the math expression in array
 * @return {array} stack - result of the math operation.
 */

function stackMachine (stack,recognizableElement) {

    if (+recognizableElement || recognizableElement == 0) {     // if recognizableElement convertible to type 'number', it is pushed to stack || Exception for 0
        stack.push(+recognizableElement)                        // (convert to type Number)
    } else if (recognizableElement == "+") {
        calculationInStack(stack, addition)
    } else if (recognizableElement == "-") {
        calculationInStack(stack, subtraction)
    } else if (recognizableElement == "*") {
        calculationInStack(stack, multiplication)
    } else if (recognizableElement == "/") {
        calculationInStack(stack, division)
    } else if (recognizableElement == "^") {
        calculationInStack(stack, exponentiation)
    } else {                                                //Break statement
        console.log ("Math Expression Input Error")
        stack = []
        return stack
    }

    return stack
}

/**
 * Remove and return numbers from stack && make math operation with numbers && add result of calculations in stack
 *
 * @Calculate
 * @param {array} stack - variable for accumulation
 * @param {function} operationFunction - the math operation function
 * @return {number} operationResult - result of the math operation.
 */

function calculationInStack (stack, operationFunction) {
    let firstNum = stack.pop()
    let secondNum = stack.pop()
    let operationResult = operationFunction(firstNum, secondNum)
    stack.push(operationResult)
}

function addition (secondAddendNum, firstAddendNum) {
    return firstAddendNum + secondAddendNum
}

function subtraction (subtrahendNum, minuendNum) {
    return minuendNum - subtrahendNum
}

function multiplication (multiplierNum, multiplicandNum) {
    return multiplicandNum * multiplierNum
}

function division (dividerNum, dividendNum) {
    return dividendNum / dividerNum
}

function exponentiation (exponentNum, raisedNum) {
    return raisedNum ** exponentNum
}



/* // shuntingYardAlgorithm () -> a method for parsing mathematical expressions specified in infix notation
// and converting them to postfix notation
// Working Prototype!


// Problem is different code style!!!
// should make refactoring && make code DRYer!!!
let operatorStack = []
let InfixArray = [1, '+', 2, '*', 3, "^", 4, '/', 5, '-', 6] 
let PostfixArray = InfixArray.map(Sorting).filter(removeUndefined).flat().concat(operatorStack.reverse())  //what method first? -> not matter

// InfixArray.map(Sorting) -> create output array same size as input array
// instead of the elements in the stack array, "undefined" elements are placed
// .filter(removeUndefined) -> remove all "undefined" elements from the output array
// .flat() -> use to extract subarrays -> (subarrays were used instead of single element to save array size while return several elements) 
// .concat(stack) -> add stack array to output array
// use array.reverse instead of arrayStart.push(arrayEnd.pop())

console.log(PostfixArray)


// function for .map
//if the function used with .map doesn't return an element during iteration-> the function return undefined

function Sorting (item) { 

    let output = []

    if (+item || item == 0) {
        
        output = item

        if (operatorStack[operatorStack.length - 1] == "^") { //Ugly exponentation realization)
            let ArrayInsteadElement = []
            ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
            output = ArrayInsteadElement.concat(output).reverse()
        }
        return output
    } 
    
    if (operatorStack.length > 0) {
       
        if ((item == "+") || (item == "-")) {  // fix the bug -> incorrect syntax of the conditions! 
            output = allStackToOutputSum(output)
            operatorStack.push(item)
            return output

        } else if (((item == "*") || (item == "/")) ) {
            output = allStackToOutputMulti(output)  
            operatorStack.push(item)
            return output

        } else {operatorStack.push(item)}

    } else {operatorStack.push(item)}
}

// function for .filter          
// may be senseless -> to delete undefined use .filter without func, but it may delete '0' number?
function removeUndefined(item) {
    return (item != undefined)
}



function allStackToOutputSum(output) {        
    let ArrayInsteadElement = [] //create array because it may be several elements push in one .map iteration

    for (; operatorStack.length > 0 ;) {
        ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
        output = ArrayInsteadElement       //!?try to write a recursive expression!?
    }
    return output
}

// if the last element in operator stack is not a "/" || "*" 
// -> function returns empty array -> []
// it will be deletted with .flat() in the .map row
function allStackToOutputMulti(output) {        
    let ArrayInsteadElement = []

    for (; ((operatorStack[operatorStack.length - 1] == "*") || (operatorStack[operatorStack.length - 1] == "/")) ;) {
        ArrayInsteadElement = ArrayInsteadElement.concat(operatorStack.pop())
        output = ArrayInsteadElement
    }
    return output
} */ 