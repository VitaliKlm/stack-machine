let mathExpression = prompt('please enter a math expression in Polish Reversed notation! (Use "," to split the Operands and Operators')

function stackMachine(mathExpString = mathExpression){
    const stack = []
    const mathExpArray = mathExpString.split(",")
    for (let i = 0; i < mathExpArray.length; i++){
        let recognizableElement = mathExpArray[i]
        if (recognizableElement == "+"){
            let firstNum = stack.pop() // remember syntax array.pop(), don't forget brackets
            let secondNum = stack.pop()
            let operationResult = firstNum + secondNum // how to add numbers in stack in this position? stack.push stack.unshift
            stack.push(operationResult)
        } else if (recognizableElement == "-"){ // Have to add condition for 1 number in stack -> -Num!
            let firstNum = stack.pop()
            let secondNum = stack.pop()
            let operationResult =  -firstNum + secondNum // Operation = last element in array ?Operator? penultimate element in array
            stack.push(operationResult)
        } else if (recognizableElement == "*"){
            let firstNum = stack.pop()
            let secondNum = stack.pop()
            let operationResult = firstNum * secondNum
            stack.push(operationResult)
        } else if (recognizableElement == "/"){
            let firstNum = stack.pop()
            let secondNum = stack.pop()
            let operationResult = 1 / firstNum * secondNum
            stack.push(operationResult)
        } else {
            stack.push(Number(recognizableElement)) // string -> number
        }
    }
    return stack[0] //last element in stack -> result
}
const consoleOutput = stackMachine()
console.log(consoleOutput)
alert(consoleOutput)

