/**
 * Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
 *  но хотелось бы создать ещё один объект такого же типа.
 * Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
 */

function bgcolor(color) {
    this.color = color
}
let colorFunc = new bgcolor('red')
let colorFunc2 = new colorFunc.constructor('green')
alert(colorFunc2.color)

function user(name) {
    this.name = name
}
// user.prototype = {}

let usr1 = new user('Galya')
let usr2 = new usr1.constructor('Valya')

alert(usr2.name)