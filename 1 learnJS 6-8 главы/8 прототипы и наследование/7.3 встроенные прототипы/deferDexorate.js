
if (!Function.prototype.defer) {
    Function.prototype.defer = function (param) {
        return (...args) => setTimeout(f.apply(this, args), param)
    }
}


function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
f.defer(2000)(4, 2); // выведет 6 через 2 секунд.