//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
const sum = (a) => {
    return (b) => a + b
}
let a = sum(1)(3)
console.log(a)
