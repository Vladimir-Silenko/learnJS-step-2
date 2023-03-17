/**
 * Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}


const recursive = (list) => {
    if (list.next) {
        recursive(list.next)
    }
    alert(list.value)
}

recursive(list)


const withLoop = (list, arr = []) => {
    if (list.next != null) {
        arr.push(list.value)
        withLoop(list.next, arr)
    }
    else {
        arr.push(list.value)
        for (let i = arr.length; i > 0; i--) {
            console.log(i)
        }
    }
}
withLoop(list)