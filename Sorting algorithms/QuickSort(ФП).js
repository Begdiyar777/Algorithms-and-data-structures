/*Основная идея: Определяем опорный элемент pivot, все элементы меньше него записываем в left, 
больше в right. Рекурсивно повторяем данное действие для д=левого и правого подмассива. Склеиваем конечный результат
и возвращаем его. */

// Временная сложность: O(n*logn) в среднем и O(n^2) в худщем (pivot = min || max)
// Пространственная сложность: O(n*logn) требуется доп память для хранения промежуточных значений(left, right)

function quicksort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
    
    for(let i = 1; i < arr.length; i++){
        pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]) 
    }

    return [...quicksort(left), pivot, ...quicksort(right)]
}

const arrayToSort = [9, 3, 5, 1, 7, 3, 8, 2, 6, 4];
console.log(quicksort(arrayToSort))