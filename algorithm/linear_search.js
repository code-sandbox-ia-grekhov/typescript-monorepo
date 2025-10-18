const findIndexFromArray = (arr, val) => {
  return arr.reduce((accum, current, index) => {
    if (current === val) accum = index;
    return accum;
  }, -1);
};

const arr = Array.from({ length: 1_000_000 }, (_, i) => i + 1);

console.time("findIndexFromArray");
const result = findIndexFromArray(arr, 999999);
console.timeEnd("findIndexFromArray");
console.log(result);
