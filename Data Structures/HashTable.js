/* Хэш таблицы это структура данных которая хранит в себе данные в виде ключ-значение.
Она дает возможность делать вставку, удаление и получение элемента за O(1)-константное время. 
Для этого она использует специальную хэш-функцию которая расчитывает индекс элемента по ключу
Данная реализация использует двойное хэширование с линейным пробированием для разрешения коллизии.
Размер хэш таблицы нужно определить в момент его инициализации и рекомендуется испоьзовать простые числа.*/

class HashTable {
    constructor(size = 1000003) {
      this.size = size;
      this.keys = new Array(size).fill(null);
      this.values = new Array(size).fill(null);
    }
  
    put(key, value) {
      let slot = this.hash(key);
  
      while (this.keys[slot] !== null && this.keys[slot] !== key) {
        slot = this.rehash(slot);
      }
  
      this.keys[slot] = key;
      this.values[slot] = value;
    }
  
    get(key) {
      let slot = this.hash(key);
  
      while (this.keys[slot] !== null) {
        if (this.keys[slot] === key) {
          return this.values[slot];
        }
        slot = this.rehash(slot);
      }
  
      return null;
    }
  
    delete(key) {
      let slot = this.hash(key);
  
      while (this.keys[slot] !== null) {
        if (this.keys[slot] === key) {
          const value = this.values[slot];
          this.keys[slot] = null;
          this.values[slot] = null;
          return value;
        }
        slot = this.rehash(slot);
      }
  
      return null;
    }
  
    hash(key) {
      return (key % this.size + this.size) % this.size;
    }
  
    rehash(oldHash) {
      return (oldHash + 1) % this.size;
    }
  }