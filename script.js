let mathExpression = prompt('please enter a math expression in Reversed Polish notation! (Use "," to split the Operands and Operators. Don`t separate unary minus from the number)')

/**
 * Calculate Math expression in Reverse Polish notation
 *
 * @Calculate
 * @param {string} mathExpString - Math expression in Reverse Polish notation (numbers and operators separated by commas)
 * @return {number} MathExpResult - result of the Math operation.
 */

function stackMachine(mathExpString = mathExpression){
    const stack = []
    const mathExpArray = mathExpString.split(",")
    for (let i = 0; i < mathExpArray.length; i++){
        let recognizableElement = mathExpArray[i]
        if (recognizableElement === "+"){
            let firstNum = stack.pop() // remember syntax array.pop(), don't forget brackets
            let secondNum = stack.pop()
            let additionResult = firstNum + secondNum
            stack.push(additionResult)
        } else if (recognizableElement === "-"){ // for unary minus use a negative number without separator between operator and operand
            let SubtrahendNum = stack.pop()
            let MinuendNum = stack.pop()
            let subtractionResult = MinuendNum - SubtrahendNum
            stack.push(subtractionResult)
        } else if (recognizableElement === "*"){
            let firstNum = stack.pop()
            let secondNum = stack.pop()
            let multiplicationResult = firstNum * secondNum
            stack.push(multiplicationResult)
        } else if (recognizableElement === "/"){
            let dividerNum = stack.pop()
            let dividendNum = stack.pop()
            let divisionResult = dividendNum / dividerNum
            stack.push(divisionResult)
        } else if (recognizableElement === "^"){
            let exponentNum = stack.pop()
            let raisedNum = stack.pop()
            let exponentiationResult = raisedNum ** exponentNum
            stack.push(exponentiationResult)
        } else {
            stack.push(Number(recognizableElement)) // string -> number
        }
    }
    const MathExpResult = stack[0] //last element in stack -> result
    return MathExpResult
}
const consoleOutput = stackMachine()
console.log(consoleOutput)
alert(consoleOutput)



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


