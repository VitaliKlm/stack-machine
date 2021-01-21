// code simplification

const mathExpString = prompt('Please enter a math expression in Reversed Polish notation! ' +
                                    '(Use " " to split the Operands and Operators. ')

const mathExpArray = mathExpString.split(" ")
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

function addition (firstAddendNum, secondAddendNum) {
    return firstAddendNum + secondAddendNum
}

function subtraction (subtrahendNum, minuendNum) {
    return minuendNum - subtrahendNum
}

function multiplication (multiplicandNum, multiplierNum) {
    return multiplicandNum * multiplierNum
}

function division (dividerNum, dividendNum) {
    return dividendNum / dividerNum
}

function exponentiation (exponentNum, raisedNum) {
    return raisedNum ** exponentNum
}

/*//  shuntingYardAlgorithm () -> a method for parsing mathematical expressions specified in infix notation and converting them to postfix notation
/!**
 * Parsing and mathematical expressions specified in infix notation -> produce a postfix notation string Math expression in Reverse Polish notation
 *
 * @Convert
 * @param {string} mathExpInfixString - Math expression in infix notation
 * @return {string} mathExpPostfixString - Math expression in Postfix notation.                     ???{String} or {array}
 *!/

function shuntingYardAlgorithm (mathExpInfixString = mathExpression){
    const operatorsStack = []
    let outputString = [] // add symbols to the string (outputString = {string} + {string})
                          // or add symbols in array and at the end convert it to string (outputString = {array}.push({string}))
                          // for why? i can use array to calculate the result
    const mathExpArray = mathExpString.split("")
    for (let i = 0; i < mathExpArray.length; i++){
        let recognizableElement = mathExpArray[i]
        if (recognizableElement === "+"){
            operatorsStack.push(recognizableElement)
        } else if (recognizableElement === "-"){ // Have to add condition for 1 number in stack -> -Num!
            operatorsStack.push(recognizableElement)
        } else if (recognizableElement === "*"){
            operatorsStack.push(recognizableElement)
        } else if (recognizableElement === "/"){
            operatorsStack.push(recognizableElement)
        } else if (recognizableElement === "^"){
            operatorsStack.push(recognizableElement)
        } else {
            outputString.push(Number(recognizableElement)) // string -> number
        }

}*/


