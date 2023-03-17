/**
 * Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
 */

if (!Function.prototype.defer) {
    Function.prototype.defer = function (param) {
        setTimeout(this, param)
    }
}
function f() {
    alert("Hello!");
}

f.defer(1000);

