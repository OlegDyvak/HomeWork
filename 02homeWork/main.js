let N = null
do { N = + prompt('Введіть перше число (N):') }
while (!Number.isInteger(N) || !N)

let M = null
do { M = + prompt('Введіть друге число (M):') }
while (!Number.isInteger(M) || !M)

switch(true){
    case (!N || !M):{
            alert('Ви ввели НЕ число!')
            break
    }
    case (!Number.isInteger(N) || !Number.isInteger(M)):{
            alert('Ви ввели НЕ ціле число!')
            break
    }
    case (N>=M):{
            alert('Перше число повинно бути менше другого!')
            break
    }
    case (N<M):{
            const isTrue = confirm('Виберіть "Ok" якщо потрібно пропускати парні числа, і "Отмена" якщо ні')
            let sum = 0
            for (let index = N; index <= M; index ++) {
                if (isTrue && (index % 2 === 0)) continue
                sum += index
            } 
            alert (`Сумма чисел від ${N} до ${M}: ${sum}`)
            break
    }
}
