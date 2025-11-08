/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words, separator) => {
  return words.flatMap((w) => w.split(separator)).filter((w) => !!w);
};

/**
 * Сложность по времени (time complexity)
 * Линейная O(2n) или можно указать O(n) - проходимся по изначальному массиву 2 раза, значит сложность будет 2n
 *
 * Сложность по памяти (space complexity)
 * Линейная O(2n) или можно указать O(n) - создаются:
 *  - переменная words (объект, в  том числе массив строк)
 *  - переменная separator (строка)
 *  - созддается массив после flatMap (метод возвращает новый массив) и после filter (метод возвращает новый массив)
 */

const test = splitWordsBySeparator(["one.two.three", "four.five", "six"], ".");
console.log(test);
