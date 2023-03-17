let log = (a) => console.log(a)
/**
 * Результатом декоратора debounce(f, ms) должна быть обёртка,
 *  которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами,
 *  когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
 */

// debounce обертка, которая принимает функцию func и задержку delay в миллисекундах
function debounce(f, ms) {
    let timeArr = [];
    let start = Date.now();

    return function (x) {
        let time = Date.now() - start;
        let last = timeArr.at(-1);
        timeArr.push(time);

        if (timeArr.length == 1 || (time >= last + ms)) {
            return setTimeout(f, ms, x);
        }
    };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500);