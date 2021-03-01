function getMaxDigit(number) {
    let stringNumber = number.toString()
    let numbers = stringNumber.split('')
    return Math.max(...numbers)
}

function powerNumber(number, power) {
    let poweredNumber = 1
    for (let i = 0; i < power; i++) {
        poweredNumber *= number
    }
    return poweredNumber
}

function formatName(name) {
    let firstLetter = name[0]
    let formatedName = firstLetter.toUpperCase() + name.slice(1)
    return formatedName
}

function calcTaxDeduction(number) {
    let tax = 19.5 //%
    let numberMinusTax = number * ((100 - tax) / 100)
    return numberMinusTax
}

function getRandomNumber(min, max) {
    //готовое решение с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function countLetter(letter, word) {
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) counter++
    }
    return counter
}

function convertCurrency(number) {
    let convertIndex = 28.01
    let convertedNumber = parseInt(number)
    if (number.includes('$')) convertedNumber *= convertIndex
    else if (number.includes('UAH') || number.includes('uah')) convertedNumber /= convertIndex
    else convertedNumber = 'ERROR!'
    return convertedNumber
}

function getRandomPassword(number = 8) {
    let randomPassword = Math.random() * 10 ** number
    randomPassword = randomPassword.toFixed()
    return randomPassword
}

console.log(getMaxDigit(1234567890))
console.log(powerNumber(2, 10))
console.log(formatName('oleg'))
console.log(calcTaxDeduction(1000))
console.log(getRandomNumber(1,10))
console.log(countLetter('a', 'avadakedavra'))
console.log(convertCurrency('100 $'))
console.log(getRandomPassword(3))