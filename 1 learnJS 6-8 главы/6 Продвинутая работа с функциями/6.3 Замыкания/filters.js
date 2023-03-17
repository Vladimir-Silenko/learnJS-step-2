/**
 * У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
 *  Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
 */

let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (a, b) => {
    return item => item >= a && item <= b
}

const inArray = (arr) => {
    return el => arr.includes(el)
}


console.log(arr.filter(inArray([1, 4, 3])))
console.log(arr.filter(inBetween(2, 6)))