/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words, separator) => {
  return words.flatMap((x) => x.split(separator)).filter((x) => !!x);
};

const test = ["1/", "/2", "/"];
const result = splitWordsBySeparator(test, "/");
console.log(result);
