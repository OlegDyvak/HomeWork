function getRandomArray(length, min, max) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    let randomArray = []
    for (i = 0; i < length; i++) {
        randomArray[i] = getRandomInt(min, max+1)
    }
    return randomArray
}

console.log(getRandomArray(10,0,10))

function getAverage(...numbers) {
    let average = 0
    let counter = 0
    for (i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            average += numbers[i]
            counter ++
        }
    }
    average /= counter
    return average
}

console.log(getAverage(1, 2, 3, 4, 5))

function filterEvenNumbers(...numbers) {
    let oddNumbers = []
    for (i = 0; i < numbers.length; i++) {
        if (!(numbers[i] % 2 === 0)) {
            oddNumbers = oddNumbers.concat(numbers[i])
        }
    }
    return oddNumbers
}

console.log(filterEvenNumbers(1,2,3,4,5))

function countPositiveNumbers(...numbers) {
    let counter = 0
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i]>0) {counter++}
    }
    return counter
}

console.log(countPositiveNumbers(-1, 0, 1, 2, 3))

function getDividedByFive(...numbers) {
    let dividedByFive = []
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
            dividedByFive = dividedByFive.concat(numbers[i])
        }
    }
    return dividedByFive
}

console.log(getDividedByFive(1, 2, 3, 4, 5, 10))

function replaceBadWords(string) {
    let words = string.split(' ')
    const wordsForCensore = ['fuck', 'shit']
    for (i = 0; i < wordsForCensore.length; i++) {
        words.forEach((word, index) => {
            if (word === wordsForCensore[i]) {
                words[index] = '****'
            }
        })
    }
    let censoredFrase = words.join(' ')
    return censoredFrase
}

console.log(replaceBadWords('holy shit , its raining today. Im not go anywhere, fuck it'))