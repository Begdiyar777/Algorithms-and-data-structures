/* Основная идея: делим массив пополам, каждый из них сортируем слиянием и потом соединяем оба массива. 
Каждый разделённый массив тоже нарезаем на два подмассива до тех пор, пока в каждом не окажется по одному элементу. 
Алгоритм стабильный - сохроняет исходный порядок элементов*/

// Пространчтвенная сложность: требует O(n) доп памяти 
// Временная сложность: O(n*logn) - в лучшем(уже отсортирован), среднем(рандомно) и в худщем(обратно отсортирован) случаях 

function merge(left, right) {
    let sortedArr = [] // Массив для хранения сортированных элементов
    while (left.length && right.length) {
      // Вставляем меньший элемент в SortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Возвращаем отсортированный массив (+ левый и правый массив если они не обработались в цикле)
    return [...sortedArr, ...left, ...right]
  }

  function mergeSort(arr) {
    // Базовый случай
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    
    // Рекурсивный вызов
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

// исходный массив
array = [3, 5, 1, 6, 9, 8, 2];
console.log(mergeSort(array));