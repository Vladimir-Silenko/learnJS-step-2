/**
 * Создайте декоратор spy(func), который должен возвращать обёртку,
 *  которая сохраняет все вызовы функции в своём свойстве calls.
 */
function work(a, b) {
    alert(a + b); // произвольная функция или метод
}
function spy(func) {

    function a(...args) {
        a.calls.push(args)
        return func.apply(this, args)
    }
    a.calls = []
    return a
}
work = spy(work)
// alert(work(1, 2))
work(1, 2); // 3
work(4, 5); // 9

