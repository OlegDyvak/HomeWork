const potatoPrice = 15.678
const onionPrice = 123.965
const carrotPrice = 90.2345

const maxPrice = Math.max(potatoPrice, onionPrice, carrotPrice)
console.log("Максимальне значення:", maxPrice)

const minPrice = Math.min(potatoPrice, onionPrice, carrotPrice)
console.log("Мінімальне значення:", minPrice)

const sumPrice = (potatoPrice + onionPrice + carrotPrice)
console.log("Сумма:", sumPrice)

const sumPriceFloor=(Math.floor(potatoPrice)+Math.floor(onionPrice)+Math.floor(carrotPrice))
const sumPriceFloorRound = (Math.round(sumPriceFloor/100)*100)
console.log("Сумма округлена до сотень:", sumPriceFloorRound)

const evenOrOdd = sumPriceFloor % 2 === 0
console.log("Перевірка сумми на парність (парне-true, непарне-false):", evenOrOdd)

const bill = 500
let change = bill - sumPrice
console.log("Решта з ", bill, ":", change)

const average = +(sumPrice).toFixed(2)
console.log("Середнє значення округлене до другого знаку після коми:", average)

const discount = Math.random()
const discountPrice = sumPrice * (1 - discount)
console.log("Сумма з випадковою знижкою:", +discountPrice.toFixed(2))

const profit = sumPrice/2 - sumPrice*discount
console.log("Чистий прибуток:", +profit.toFixed(2))

//Advanced

document.writeln(`Максимальне значення: ${maxPrice} <br>
Мінімальне значення: ${minPrice} <br>
Сумма: ${sumPrice} <br>
Сумма округлена до сотень: ${sumPriceFloorRound} <br>
Перевірка сумми на парність (парне-true, непарне-false): ${evenOrOdd} <br>
Решта з ${bill}: ${change} <br>
Середнє значення округлене до другого знаку після коми: ${average} <br>
Сумма з випадковою знижкою: ${+discountPrice.toFixed(2)} <br>
Чистий прибуток: ${+profit.toFixed(2)}                       
`)
          
             
