## en

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.

## ru

Напишите код, который расширяет все массивы таким образом, чтобы вы могли вызывать метод array.groupBy(fn) на любом массиве, и он возвращал сгруппированную версию этого массива.

Сгруппированный массив — это объект, в котором каждый ключ — это результат вызова fn(arr[i]), а каждое значение — массив, содержащий все элементы исходного массива, которые дают этот ключ.

Переданный колбэк fn принимает элемент массива и возвращает строковый ключ.

Порядок элементов внутри каждого массива должен сохранять порядок появления этих элементов в исходном массиве. Порядок самих ключей может быть любым.

Не используйте функцию _.groupBy из библиотеки lodash.