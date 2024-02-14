// Объект позволяет хранить данные в виде ключ значение

// Объектные литералы 

const obj = {
    name: 'Begdiyar',
    age: 23,
    sex: 'male',
    married: false,
    getAge: function(){
        return `He is ${this.age} year old `
    }
}

// получение значения объекта bracket и dot notation

const name = obj.name 
const age = obj['age']

// функция переданная как свойство объекта называется методом 
// и чтоб она возвращала результат нужно добавить () в конец ключа
 obj.getAge() //obj['getAge']()

 // Добавление и переназначение свойств

 obj.city = 'Moscow'
 obj.age = 24
 obj['Phone number'] = '+7 922 xxx - xx -xx'

 // Полезные методы объектов

 const arr = Object.entries(obj) // вернет массив [ [key, value], ...]

 for(const [key, value] of arr){
    console.log(`${key} : ${value}`)
 }

 const keys = Object.keys(obj) // вернет массив ключей
for(const key of keys){
    console.log(`${obj[key]}`)
}

const values = Object.values(obj) // вернет массив значении

console.log(Object.hasOwn(obj, 'age')) // проверка есть ли данной свойство true/false