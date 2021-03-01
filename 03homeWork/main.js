function getMaxDigit(number) {
    let stringNumber = number.toString()
    let numbers = stringNumber.split('')
    return Math.max(...numbers)
}

function numberToPower(number, power) {
    let poweredNumber = 1
    for (let i = 0; i < power; i++) {
        poweredNumber *= number
    }
    return poweredNumber
}

function nameFormat(name) {
    let firstLetter = name[0]
    let formatedName = firstLetter.toUpperCase() + name.slice(1)
    return formatedName
}

console.log(getMaxDigit(1234567890))
console.log(numberToPower(2, 10))
console.log(nameFormat('oleg'))