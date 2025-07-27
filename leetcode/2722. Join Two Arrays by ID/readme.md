## en 
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

## ru

Даны два массива arr1 и arr2. Необходимо вернуть новый массив joinedArray.

Все объекты в обоих входных массивах содержат поле id с целочисленным значением.

joinedArray — это массив, сформированный путём объединения arr1 и arr2 по ключу id. Его длина должна соответствовать количеству уникальных значений id. Возвращаемый массив должен быть отсортирован по возрастанию значения id.

Если определённый id присутствует только в одном из массивов, объект с этим id должен быть включён в результирующий массив без изменений.

Если два объекта имеют одинаковый id, их свойства должны быть объединены в один объект:

Если ключ присутствует только в одном объекте, он включается в итоговый объект как есть.

Если ключ присутствует в обоих объектах, значение из объекта из arr2 должно переопределить значение из arr1.