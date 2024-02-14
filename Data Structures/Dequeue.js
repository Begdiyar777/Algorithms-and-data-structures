// Дек (Eng Deq - double-ended-queue) структура данных которая позволяет 
// за константное время O(1) добавлять и удалять элементы в начало и конец массива

class Dequeue {
    constructor(maxSize) {
      this.array = new Array(maxSize);
      this.maxSize = maxSize;
      this.size = 0;
      this.head = 0;
      this.tail = 0;
    }
  
    get isFull() {
      return this.size === this.maxSize;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  
    pushBack(value) {
      if (this.isFull) {
        throw new Error('ErrorDeqIsFull');
      } else {
        this.array[this.tail] = value;
        this.tail = this.incrementIndex(this.tail);
        this.size++;
      }
    }
  
    pushFront(value) {
      if (this.isFull) {
        throw new Error('ErrorDeqIsFull');
      } else {
        this.head = this.decrementIndex(this.head);
        this.array[this.head] = value;
        this.size++;
      }
    }
  
    popBack() {
      if (this.isEmpty) {
        throw new Error('ErrorDeqIsEmpty');
      } else {
        this.tail = this.decrementIndex(this.tail);
        const value = this.array[this.tail];
        this.size--;
        return value;
      }
    }
  
    popFront() {
      if (this.isEmpty) {
        throw new Error('ErrorDeqIsEmpty');
      } else {
        const value = this.array[this.head];
        this.head = this.incrementIndex(this.head);
        this.size--;
        return value;
      }
    }
    
    //функции для изменений значении итераторов
  
    incrementIndex(index) {
      return (index + 1) % this.maxSize;
    }
  
    decrementIndex(index) {
      return (index - 1 + this.maxSize) % this.maxSize;
    }
  }


  const deq = new Dequeue(100)
  deq.pushBack(5)
  deq.pushFront(1)
  deq.pushFront(2)
  console.log(deq.popFront(), deq.popFront())
  console.log(deq.popBack())