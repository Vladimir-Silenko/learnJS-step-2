/**
 * Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
 *  начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
 */
function printNumbers1(from, to) {
    let curr = from
    let out = setInterval(() => {
        alert(curr)
        if (curr == to) clearInterval(out)
        curr++
    }, 1000)
}
// printNumbers1(1, 5)

function printNumbers2(from, to) {
    let curr = from
    setTimeout(function next() {
        alert(curr)
        if (curr < to) setTimeout(next, 1000)
        curr++
    }, 1000)
}
printNumbers2(1, 5)