// Связанный список это структура данных которая хранит в себе значение и ссылку на следующий узел
// Данная структура позволяет быстро добовлять и удалять данные из начала списка
// Она была полезна тем что позволяла оптимизировать использование памяти т.к раньше массивы не были динамическими
// Данная реализация позволяет делать следующие действия:
// prepend(value) - добавить значение в начало списка за O(1) время
// append(value) - добавить значение в конец списка за O(1) время
// delete(value) - удалить все value из списка за O(n) время
// find(value) - найти первый узел с данным значением за O(n) время
// deleteTail(): удаляет последний узел из списка за O(1) время
// deleteHead(): удаляет первый узел из списка за O(1) время
// fromArray(массив значений): принимает массив значений и 
// создаёт новые узлы из каждого элемента массива, добавляя их в конец списка за O(n) время
// toArray(): создаёт массив из всех узлов за O(n) время
// reverse(): создаёт обратный список, меняя узлы местами за O(n) время


class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }

    toString(callBack){
        callBack ? callBack(this.value) : `${this.value}`
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(value) {
        // Создаём новый узел, который будет новым head,
        const newNode = new Node(value, this.head);
      
        // Переназначаем head на новый узел
        this.head = newNode;
      
        // Если ещё нет tail, делаем новый узел tail.
        if (!this.tail) {
          this.tail = newNode;
        }
      
        // Возвращаем весь список.
        return this;
      }

      append(value) {
        // Создаём новый узел.
        const newNode = new Node(value);
      
        // Если нет head или tail, делаем новым узлом head и tail.
        if (!this.head || !this.tail) {
          this.head = newNode;
          this.tail = newNode;
      
          return this;
        }
      
        // Присоединяем новый узел к концу связного списка.
        // Берём последний узел и указываем, что его next будет новым узлом.
        this.tail.next = newNode;
      
        // Переназначаем tail на новый узел.
        this.tail = newNode;
      
        return this;
      }

      delete(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
          return null;
        }
      
        let deletedNode = null;
      
        // Если head должен быть удален, то делаем следующий узел новым head.
        while (this.head && this.head.value === value) {
          deletedNode = this.head;
      
          // Переназначаем следующий за head узел на новый head.
          this.head = this.head.next;
        }
      
        let currentNode = this.head;
      
        // Если следующий узел должен быть удален,
        // делаем узел через один, следующим для проверки.
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        if (currentNode !== null) {
          while (currentNode.next) {
            if (currentNode.next.value === value) {
              deletedNode = currentNode.next;
              // Перезаписываем, чтобы узел через один стал следующим узлом.
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }
          }
        }
      
        // Проверяем, должен ли tail быть удален.
        // Так как, если в цикле мы удаляем последний узел,
        // то с предпоследнего узла убираем только ссылку на него.
        if (this.tail && this.tail.value === value) {
          // в данном случае currentNode это или предпоследний узел или head.
          this.tail = currentNode;
        }
      
        return deletedNode;
      }

      find(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
          return null;
        }
      
        let currentNode = this.head;
      
        // Перебираем все узлы в поиске значения.
        while (currentNode) {
          // Если указано значение, пробуем сравнить его по значению.
          if (value !== undefined && currentNode.value === value) {
            return currentNode;
          }
      
          // Перематываем на один узел вперед.
          currentNode = currentNode.next;
        }
      
        return null;
      }

      deleteTail() {
        // Если нет tail, значит список пуст.
      
        if (!this.tail) {
          return null;
        }
      
        // Сохраняем значение последнего узла.
        const deletedTail = this.tail;
      
        // Если head и tail равны, значит в списке только один узел.
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      
          return deletedTail;
        }
      
        // Если в связном списке много узлов.
        // Перебираем все узлы и находим предпоследний узел,
        // убираем ссылку «next» на последний узел.
        let currentNode = this.head;
        while (currentNode.next) {
          // Если у следующего узла нет следующего узла,
          // значит текущий узел предпоследний.
          if (!currentNode.next.next) {
            // убираем ссылку «next» на последний узел.
            currentNode.next = null;
          } else {
            // Перематываем на один узел вперед.
            currentNode = currentNode.next;
          }
        }
      
        // В данном случае currentNode - это предпоследний узел или head,
        // который становится последним узлом.
        this.tail = currentNode;
      
        return deletedTail;
      }

      deleteHead() {
        // Если нет head значит список пуст.
        if (!this.head) {
          return null;
        }
      
        const deletedHead = this.head;
      
        // Если у head есть ссылка на следующий "next" узел
        // то делаем его новым head.
        if (this.head.next) {
          this.head = this.head.next;
        } else {
          // Если у head нет ссылки на следующий "next" узел
          // то мы удаляем последний узел.
          this.head = null;
          this.tail = null;
        }
      
        return deletedHead;
      }

    fromArray(values) {
        values.forEach(value => this.append(value));
      
        return this;
    }

    toArray() {
        const nodes = [];
      
        let currentNode = this.head;
      
        // Перебираем все узлы и добавляем в массив.
        while (currentNode) {
          nodes.push(currentNode);
          currentNode = currentNode.next;
        }
      
        // Возвращаем массив из всех узлов.
        return nodes;
    }

// Обратный список
reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
  
    // Перебираем все узлы.
    while (currNode) {
      // Сохраняем следующий узел.
      nextNode = currNode.next;
  
      // Меняем ссылку на следующий "next" узел текущего узла,
      currNode.next = prevNode;
  
      // Перемещаем узлы prevNode и currNode на один шаг вперед.
      prevNode = currNode;
      currNode = nextNode;
    }
  
    // Меняем head и tail местами.
    this.tail = this.head;
  
    // В данном случае prevNode это последний узел,
    // поэтому, после reverse, он становится первым.
    this.head = prevNode;
    return this;
  }
}

const test = new LinkedList()
test.append(1)
test.prepend(2)
test.fromArray([3,4,5,6,7,8,9])
console.log(test.toArray())