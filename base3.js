let string = '123JOPA456' // Строка - в кавычках

let stringObj = {
    0: 'J',
    1: 'O',
    2: 'P',
    3: 'A',
}

console.log(typeof string) // typeof - проверяет тип данных

// *****

console.log(`Метод toUpperCase ${string.toUpperCase()}`) // Все буквы в верхнем регистре toUpperCase()
console.log(`Метод toLowerCase ${string.toLowerCase()}`) // Все буквы в нижнем регистре toLowerCase()
console.log(`Метод replace ${string.replace('J', 'Ж')}`) // Заменяет букву J на Ж replace()
console.log(`Метод length ${string.length}`) // Длина строки length
console.log(`Метод charAt ${string.charAt(0)}`) // Символ на определенном индексе charAt(index) можно заменить как string[index]
console.log(`Метод slice ${string.slice(3, 7)}`) // Срез строки slice()
console.log(`Метод split ${string.split('')}`) // Делаем из строки массив по паттерну

// *****


let num = 123 // Число - цифры
let dnum = 1.25 // Как число только с точкой называется float
console.log(`Делаем число ${Number(num)}`)

// *****
// Любые математические операции в классе Math
// Дока https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

let floor = Math.floor(num)
let ceil = Math.ceil(num)

console.log(`Floor: ${floor}\nCeil: ${ceil}`)

// *****

let array = [string, num, dnum] // Массив, а тут ссылки на переменные выше
let emptyArr = [5, 4, 3, 2, 1]

console.log(`(Изменяет массив)* Метод fill ${emptyArr.fill('123', 0, 4)}`) // Заполняем массив '123' - то чем заполним 0 - стартовая точка(индекс) в массиве 4 - конечная
console.log(`(Изменяет массив)* Метод pop ${emptyArr.pop()}`) // Удаляет последний элемент массива и возвращет его при выполнении
console.log(`(Изменяет массив)* Метод push ${emptyArr.push('456')}`) // Добавляет в конец новый элемент массива и возвращет индекс этого элемента
console.log(`Метод at ${array.at(2)}`) // Выводит элемент по индексу можно заменить как array[index]
console.log(`Метод filter ${emptyArr.filter((item) => typeof item === 'number')}`) // Фильтруем массив по выражению
console.log(`Метод findIndex ${array.findIndex((item) => item === string)}`) // Выводит индекс элемента по выражению
console.log(`Метод sort ${emptyArr.sort((a, b) => a - b)}`) // Сортируем массив по выражению
console.log(`Метод reverse ${array.reverse()}`) // Переворачиваем массив
console.log(`Метод join ${array.join('')}`) // Преобразует массив в строку по разделителю в скобках

// *****
let boolean = true // Логический тип
// *****
let object = {   // Объект в котором находятся штуки выше по собственным ссылкам на них
    string: string | boolean,
    num: num,
    dnum: dnum,
    array: array,
    func: (param) => { return param }
}

let chel = Object.create({}) // Создает объект с прототипом

chel[string] = 'dalbayob' // Добавляем имя объекта[ключ] = значение с помощью переменной
chel.name = 'oleg' // Добавляем статическое значение из несуществующей сущности
chel.surname = 'dalbayob'

console.log(`Созданный объект: `, chel)

let { name, surname } = chel // Деструктуризация объекта позволит получить доступ к значению по ключу в одну строку

console.log(`name: ${name} surname: ${surname}`) // name: oleg surname: dalbayob

let newObject = {  // Соединение двух объектов через метод деструктуризации
    ...object,
    ...chel
}

let assign = Object.assign(object, chel) // Соединение двух объектов через метод Object.assign

console.log(`Обратная деструктуризация: `, newObject)
console.log(`Метод assign: `, assign)

let arrayEntries = Object.entries(assign) // Метод Object.entries() преобразует объект в массив массивов с ключами[0] и значениями[1] 
                                          // Идеально для заЛупов(Циклов for)

console.log(`Метод entries:`, arrayEntries)


let hasOwnProperty = Object.hasOwnProperty(object, string) // Метод Object.hasOwnProperty() проверяет есть ли свойство в объекте

// *****



