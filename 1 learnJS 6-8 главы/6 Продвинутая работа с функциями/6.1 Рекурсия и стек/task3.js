//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

const fib = (n, memo = {}) => {
    if (n in memo) {
        return memo[n];
    }
    if (n < 2) {
        return n;
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(77))
//чтобы функция работала быстрее, был добавлен объект <<мемо>>,
//который хранит в себе  результат предыдущих вычислений