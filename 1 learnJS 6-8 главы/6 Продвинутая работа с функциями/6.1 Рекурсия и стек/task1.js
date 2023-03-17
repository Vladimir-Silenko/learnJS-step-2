/**
 * Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
 */
//Вариант с циклом:
const sumTo1 = (n) => {
    let sum = 0
    for (let i = n; i > 0; i--) {
        sum += i
    }
    return sum
}
console.log(sumTo1(100))

//Через рекурсию:
const sumTo2 = (n) => {
    if (n == 1) return n
    else return n + sumTo2(n - 1)
}
console.log(sumTo2(3))

//через арифметическую прогрессию:
const sumTo3 = (n) => {
    return n * (n + 1) / 2
}


//P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//Третий вариант выглядит самым быстрым, так как выполняет три простых 
// арифметических операции, в отличие от двух других, гда применяется сложная конструкция
// цикла, и рекурсивный вызов функции, которые требуют значительно больше памяти для выполнения


//P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)
//скорее вссего в таком случае мы получим ошибку, так как чаще всего в движке есть ограничения
//по размеру стека