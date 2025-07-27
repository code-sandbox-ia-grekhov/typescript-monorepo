## en

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

# ru

Дан многомерный массив arr и глубина n. Необходимо вернуть уплощённую версию этого массива.

Многомерный массив — это рекурсивная структура данных, содержащая целые числа или другие многомерные массивы.

Уплощённый массив — это версия массива, в которой некоторые или все вложенные подмассивы заменены их элементами. Эта операция упрощения (flattening) должна выполняться только если текущая глубина вложенности меньше n. Глубина элементов в самом верхнем (первом) массиве считается равной 0.

Необходимо решить задачу без использования встроенного метода Array.flat.