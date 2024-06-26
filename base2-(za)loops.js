/*
  while - проверяет условие перед тем как что-то выполнить
  do ... while ... - проверяет условие после того как что-то выполнит
  for - проверяет условие перед тем как что-то выполнить, но имеет конкретные управляемые параметры условия

  for in - обращается к индексу(позиции) в массиве
  for of - обращается к значению по индексу(позиции) в массиве
*/




/*
    while - ключевое слово которое стартует цикл типа While(Пока что-то соответствует)
    (true) - пока это условие истинно (выдает только true - например 2+2 === 4) то цикл выполняется
    { тело цикла } - то что будет выполняться пока в условии true
*/

let num = 0
let lastNum = 5
let arrr = [1, 2, 3, 4, 5]

while (num <= lastNum) {
    let newNum = 1
    num++
    newNum++
}

do {
    num++
} while (num <= lastNum)

/*
    for - ключевое слово для цикла for (Для каждого...)
    let i = 0 - локальная изменяющаяся переменная, которая станет опорной точкой для выполнения
    i <= lastNum - условие по которому будет выполняться цикл
    i++ - переход на следующий шаг цикла
    { тело цикла } - то что будет выполняться пока в условии true

    Порядок выполнения => 
    1. Объявляем первое действие в цикле в виде локальной переменной let i = 0
    2. Смотрим на условие если === true выполняем тело цикла
    3. Увеличиваем шаг на значение
    4. Возвращаемся к 1 шагу


    ключевое слово break прерывает действие цикла
    ключевое слово сontinue прерывает действие цикла на этом шаге и переходит к следующему
*/

for (let i = 0; i <= lastNum; i++) {
    if (i % 2 !== 0) continue
}

for (let num of arrr){
    console.log('for of: ', num)
}

for (let index in arrr) {
    console.log('for in:', index)
}
