// Cоздание массива
const arr = ['one', 2, 'три', 4, 5, 6, 7, null, undefined, true, false];

// Получение элемента массива
let index = 4;
const el = arr[index]
const one = arr[0]
const last = arr[arr.length - 1] // последний элемент

const array = new Array(1, 2, 3, 4);
// console.log(array[3]) // 4

const newArr = Array(5); // длина 5
// console.log(newArr[3]) // undefined

// Двумерный массив (таблица/матрица)

const table = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// Получение элемента двумерного массива
const three = table[0][2]; // 3

// Итереация по массиву
const arr1 = ['one', 2, 'три', 4, 5, 6, 7, null, undefined, true, false];
//console.log('is equal?:', arr === arr1) false т.к массивы ссылочный объект
for(let i = 0; i < arr1.length; i++){
   // console.log(arr[i])
}

// не рекомендуется испоьзовать for... in с массивами т.к нет гарантии 
// что он будет возвращать индексы в конкретном порядке

for(const x of arr1){
    //console.log(x)
}


// ===== Основыные методы массивов =====
// push, pop, shift, unshift, slice, splice,
// join, sort, toSorted, toString, isArray, entries, keys, values
// fill, find, includes, reverse, toResversed
// map, filter, reduce, forEach
const names = ['Alex', 'Bob', 'Ben', 'Anna', 'John']

let len = names.length // длина массива (5)

names.push('Martin') // вставка в конец массива 'Martin'
names.pop() // удаляет последний элемент и возвращает его
names.unshift('Ilon') // всавка' в начало массива и возвращает его новую длину
names.shift() // удаление первого элемента массива
names.includes('Alex') // проверяет есть ли данный элемент в массива true/ false

const massiv = new Array(10).fill(null) // создает массив размером 10 и зополняет его nullами
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.isArray(nums) // массив или нет true/false

// возвращает новый развернутый массив не меняя исходый 
// метод reverse() меняет исходный массив
const reversedNums = nums.toReversed() 

// сортирует массив по возрастанию не меняя исходный
// метод sort() меняет исходный массив
const sortedNums = reversedNums.toSorted((a, b) => a - b) 
names.join('-') // возвращает строку 'Alex-Bob-Ben-Anna-John'

const newNames = names.slice(0, 2) // копирует от 0 до 2 го элемента  ['Alex', 'Bob']

const nameList = ['Alex', 'Bob', 'Ben', 'Anna', 'John']

// вернет [ 'Ben' ] а nameList станет [ 'Alex', 'Bob', 'Greg', 'Anna', 'John' ]
const modifiedNames = nameList.splice(2, 1, 'Greg') 
//console.log(modifiedNames, nameList)

// ==== Функциональные методы =====

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// выполняет коллбэк функцию для каждого элемента массива
// каллбак принимает три аргумента currEl, index, arr
numbers.forEach((item) => {
    console.log(item)
})

// filter создает новый массив с элементами прошедший проверку функции
// каллбак принимает три аргумента currEl, index, arr

const filteredNums = numbers.filter((num) => {
    return num > 6
}) // вернет [ 7, 8, 9, 10 ]


// map создает новый массив с результатом вызова функци для каждого элемента массива
// каллбак принимает три аргумента currEl, index, arr

const numPows = numbers.map( item => item*item) // вернет квадрат всех чисел в массиве

// reduce применяет функцию reducer к каждому элементу массива (слева-направо),
// возвращая одно результирующее значение
// accumulator = previousValue = initialValue значение предыдущего вызова функции

let total = [0, 1, 2, 3].reduce( (acc, curr, currInd, arr) => {
    return acc + curr
}, 10); // вернет сумму всех элементов + 10

