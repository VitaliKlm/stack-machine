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
 * Recognize element in array -> convert element to number && add element in stack ||
 * remove and return numbers from stack && make math operation with numbers && add result of calculations in stack
 *
 * @Calculate
 * @param {array} stack - variable for accumulation
 * @param {number|string} recognizableElement - element of the math expression in array
 * @return {array} stack - result of the math operation.
 */

function stackMachine (stack,recognizableElement) {
    if (+recognizableElement || recognizableElement == 0) {     // if recognizableElement convertible to type Number, it is pushed to stack || Exception for 0
        stack.push(+recognizableElement)                        // (convert to type Number)
    } else if (recognizableElement == "+") {
        let firstNum = stack.pop()
        let secondNum = stack.pop()
        let additionResult = firstNum + secondNum
        stack.push(additionResult)
    } else if (recognizableElement == "-") {
        let SubtrahendNum = stack.pop()
        let MinuendNum = stack.pop()
        let subtractionResult = MinuendNum - SubtrahendNum
        stack.push(subtractionResult)
    } else if (recognizableElement == "*") {
        let firstNum = stack.pop()
        let secondNum = stack.pop()
        let multiplicationResult = firstNum * secondNum
        stack.push(multiplicationResult)
    } else if (recognizableElement == "/") {
        let dividerNum = stack.pop()
        let dividendNum = stack.pop()
        let divisionResult = dividendNum / dividerNum
        stack.push(divisionResult)
    } else if (recognizableElement == "^") {
        let exponentNum = stack.pop()
        let raisedNum = stack.pop()
        let exponentiationResult = raisedNum ** exponentNum
        stack.push(exponentiationResult)
    } else {                                                //Break statement
        console.log ("Math Expression Input Error")
        stack = []
        return stack
    }

    return stack
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


