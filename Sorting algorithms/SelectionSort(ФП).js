/* Основная идея: Находим минимальный элемент в неотсортированной части массива и меняем его местами 
с первым неотсортированным элементом. Повторяем, пока массив не будет полностью отсортирован. */

// Временная сложность: O(n^2) во всех случаях (худший, средний и лучший)
// Пространственная сложность: O(1)

function SelectionSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        let minIndex = i;
        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;  // Меняем значение переменной на наибольшее значение
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]  // Меняем значения переменных
    }
    return arr
}

const array = [10, 9, 9, 5, 7, 8, 4, 3, 1, 2, 6]
const result = SelectionSort(array)
console.log(result)