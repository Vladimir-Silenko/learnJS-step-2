
//Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение


function makeCounter() {

    let count = 0

    const counter = () => count++
    counter.set = (num) => count = num
    counter.decrease = () => count--

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1


counter.set(10)

alert(counter())

counter.decrease()

alert(counter())

