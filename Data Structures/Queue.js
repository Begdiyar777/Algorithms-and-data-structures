// Очередь работает по принципу FIFO, позволяет доставать элементы только с начала очереди
// преимущество перед массивом позволяет за O(1) время достать элемент с начала очереди
// По сути очередь представляет из себя цепочку вложенных объектов которые хранят в себе
// value - значения и next - указатель на следующую цепочку. Все новые узлы хранятся в свойстве head,
// tail - хранит в себе информацию о последнем узле, а length - длину очереди

// Операции данного класса и их временная сложность
// enqueue(value) - вставка в конец очереди O(1)
// dequeue() - удаление первого элемента O(1)
// print() - вывод все элементов на консоль O(n)
// getHead() - достать первый элемент O(1)
// isEmty() - проверка на пустоту очереди O(1)
// getLength() - возвращает длину очереди O(1)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(value){
        const node = new Node(value)
        
        // если есть первый узел
        if(this.head){
            // вставляем в конец нашей очереди
            this.tail.next = node
            this.tail = node 
        } else {
            this.head = node
            this.tail = node
        }
        this.length++
    }

    dequeue(){
        if(this.isEmpty){
            throw new Error('Queue is empty')
        } else {
            const current = this.head
            this.head = this.head.next
            this.length--
        }
    }

    print(){
        let current = this.head

        while(current){
            console.log(current.value)
            current = current.next
        }
    }

    // Дополнительные методы

    getLength(){
        return this.length
    }

    getHead(){
        return this.head.value
    }

    isEmpty(){
        return this.length === 0
    }
}


const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)

console.log(que)
que.print()

