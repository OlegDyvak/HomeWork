const potatoPrice = 15.678
const onionPrice = 123.965
const carrotPrice = 90.2345
console.log(Math.max(potatoPrice, onionPrice, carrotPrice))
console.log(Math.min(potatoPrice, onionPrice, carrotPrice))
const sumPrice = (potatoPrice + onionPrice + carrotPrice)
console.log(sumPrice)
const sumPriceFloor=(Math.floor(potatoPrice)+Math.floor(onionPrice)+Math.floor(carrotPrice))
const sumPriceFloorRound = (Math.round(sumPriceFloor/100)*100)
console.log(sumPriceFloorRound)
let evenOrOdd = false
if (sumPriceFloor % 2 == 0) evenOrOdd = true
console.log("Перевірка на парність (парне-true, непарне-false):",evenOrOdd)
console.log("Решта з 500:", (500 - sumPrice))
console.log("Середнє значення откуглене до ругого знаку після коми:", (Math.round(100*(sumPrice/3))/100))
