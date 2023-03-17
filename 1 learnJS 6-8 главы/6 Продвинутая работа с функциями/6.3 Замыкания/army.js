//Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
function makeArmy() {
    let shooters = [];


    for (let i = 0; i < 10; i++) {  //меняем цикл с while na for, тем самым поменяв лексическое окружение i
        ;
        let shooter = function () { // функция shooter
            alert(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);

    }

    return shooters;
}

let army = makeArmy();

army[0]()
army[5]()