const N = + prompt('Введіть перше число (N):')
const M = + prompt('Введіть друге число (M):')
if (!N || !M) alert('Ви ввели НЕ число!')
if (!(Number.isInteger(N) || Number.isInteger(M))) alert('Ви ввели НЕ ціле число!')
const isTrue = confirm('Виберіть "Ok" якщо потрібно пропускати парні числа, і "Отмена" якщо ні')
let sum = 0
let i = 0
if (isTrue === true) {
    if (N % 2 === 0) i = N + 1
    else i = N
    while (i <= M) {
        sum = sum + i
        i = i + 2
        }  
    }
else {
    i = N
    while (i <= M) {
        sum = sum + i
        i++
    }
}
console.log (`Сумма чисел від ${N} до ${M}: ${sum}`)