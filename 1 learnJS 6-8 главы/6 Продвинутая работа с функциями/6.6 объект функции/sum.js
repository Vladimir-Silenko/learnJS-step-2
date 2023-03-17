//Напишите функцию sum()()()

function sum(initialValue) {
    let currentSum = initialValue;

    function add(num) {
        currentSum += num;
        return add;
    }

    add.toString = function () {
        return currentSum;
    };

    return add;
}
/**
 * Я долго не мог сообразить почему алерт показывает результат, а консоль выводит функцию, и как это исправить
 * и единственно возможный способ который я нашёл это к логу добавлять ещё один .toString()
 */
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15
console.log(sum(5)(-1)(2).toString())