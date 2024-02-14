/* Основаная идея: Подсчитываем сколько раз в массиве встречается каждое значение 
и заполняем массив подсчитанными элементами в соответствующих количествах.
Подходит для случаев когда массив содержит определенный диапазон значении (min, max)*/

// Пространчтвенная сложность: Требует O(max - min) доп памяти для хранения подсчетов 

// Временная сложность: В среднем и в худщем случаях O(n + max - min) и O(n) в лучшем (малленький диапазон) 

function CountingSort(arr, min, max){
    let len = arr.length
    let i = min, j = 0
    let count = [] // вспомогательный массив

    // заполняем нулями вспомогательный массив
    for(i; i <= max; i++){
        count[i] = 0
    }

    // инкрементируем ячейки массив count для каждого значения arr
    for(i = 0; i < len; i++){
        count[arr[i]] += 1
    }

    // записываем в исходный массив числа из диапазона мин-мах столько раз 
    // сколько они встречаеются в массиве count
    for(i = min; i <= max; i++){
        while(count[i] > 0){
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
   
    // возвращаем массив
    return arr
}


const testArray = [9, 3, 5, 1, 7, 3, 8, 2, 6, 4];
const minVal = Math.min(...testArray);
const maxVal = Math.max(...testArray);

let result = CountingSort(testArray, minVal, maxVal);

console.log(result)