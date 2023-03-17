/**
 * Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
 */

function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function () {
        setTimeout(f.apply(() => this, arguments), ms)
    }
}
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test");