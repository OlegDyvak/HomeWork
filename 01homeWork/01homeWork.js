const potatoPrice = 15.678
const onionPrice = 123.965
const carrotPrice = 90.2345
console.log("Максимальне значення:",Math.max(potatoPrice, onionPrice, carrotPrice))
console.log("Мінімальне значення:",Math.min(potatoPrice, onionPrice, carrotPrice))
const sumPrice = (potatoPrice + onionPrice + carrotPrice)
console.log("Сумма:",sumPrice)
const sumPriceFloor=(Math.floor(potatoPrice)+Math.floor(onionPrice)+Math.floor(carrotPrice))
const sumPriceFloorRound = (Math.round(sumPriceFloor/100)*100)
console.log("Сумма округлена до сотень:",sumPriceFloorRound)
let evenOrOdd = false
if (sumPriceFloor % 2 == 0) evenOrOdd = true
console.log("Перевірка сумми на парність (парне-true, непарне-false):",evenOrOdd)
console.log("Решта з 500:", (500 - sumPrice))
console.log("Середнє значення округлене до другого знаку після коми:", (Math.round(100*(sumPrice/3))/100))
let discount = Math.random()
console.log ("Сумма з випадковою знижкою:",(Math.round(100*(sumPrice*(1-discount))/100))
console.log ("Чистий прибуток:",(sumPrice/2 - sumPrice*discount))

//Advanced

document.writeln(`Максимальне значення:${Math.max(potatoPrice, onionPrice, carrotPrice)}<br/>bla`)
          
             
