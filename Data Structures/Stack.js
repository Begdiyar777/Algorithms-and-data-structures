/* Стэк это структура данных которая работает по принципу LIFO 
он позволяет доставать или добавлять элементы только в конец стэка
Имеет методы:
 - push(value) - добавляет value в конец стэка за O(1)*
 - pop() - удаляет элемент с конца стэка и возвращает его за O(1)
 - peek() - возвращает последний элемент стэка за O(1)
 - size() - возвращает размер стэка*/


class Stack {
    constructor(array = []){
        this.stack = array
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
       this.stack.length ? this.stack.pop() : undefined
    }

    peek(){
        this.stack.length ? this.stack[this.stack.length - 1] : undefined
    }

    size(){
        return this.stack.length
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop()
stack.pop()
console.log(stack.pop())
console.log(stack.size())