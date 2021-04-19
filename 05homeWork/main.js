function getRandomArray(length, min, max) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    let randomArray = Array.from({ length }, number => {
        return number = getRandomInt(min, max + 1)
    })
    return randomArray
}

console.log('Массив случайных чисел : ', getRandomArray(10,0,10))

function getAverage(...numbers) {
    const numbersArray = [...numbers]
    let average = 0
    numbersArray.map (number => {
        if (Number.isInteger(number)) {
            average += number
        }
    })
    average /= numbersArray.length
    return average
}

console.log('Среднее значение : ', getAverage(1, 2, 3, 4, 5))

function filterEvenNumbers(...numbers) {
    const oddNumbers = [...numbers].filter(number => number%2 === 0)
    return oddNumbers
}

console.log('Фильтр чётных чисел : ', filterEvenNumbers(1,2,3,4,5))

function countPositiveNumbers(...numbers) {
    let counter = 0
    let numbersArray = [...numbers]
    numbersArray.map(number => { (number > 0 ? counter++ : counter) })
    return counter
}

console.log('К-во чисел больше 0: ', countPositiveNumbers(-1, 0, 1, 2, 3, 4))

function getDividedByFive(...numbers) {
    const dividedByFive = [...numbers].filter(number => number%5 === 0)
    return dividedByFive
}

console.log('Числа кратные 5: ', getDividedByFive(1, 2, 3, 4, 5, 10))

function replaceBadWords(string) {
    let words = string.split(' ')
    const wordsForCensore = ['fuck', 'shit']
    words.forEach((word, index) => {
        wordsForCensore.forEach(wordForCensore => {
            if (word.includes(wordForCensore)) {
                words[index] = word.replace(wordForCensore, "****")
            }
        })
    })
    let censoredFrase = words.join(' ')
    return censoredFrase
}

console.log('Замена ругательств на ****: ', replaceBadWords('holy shit , its raining today. Im not go anywhere, its fucking cold outside'))