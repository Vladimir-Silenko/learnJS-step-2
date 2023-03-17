//Напишите функцию printList(list), которая выводит элементы списка по одному.
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

const printList = (list, arr = []) => {

    if (list.next != null) {
        arr.push(list.value)
        printList(list.next, arr)
    }
    else {
        arr.push(list.value)
        for (let i of arr) {
            alert(i)
        }
    }
}
console.log(printList(list))