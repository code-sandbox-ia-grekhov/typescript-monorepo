/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  if (n === 0) return arr;

  const flatOneLevel = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flatOneLevel.push(...item);
    } else {
      flatOneLevel.push(item);
    }
  }

  const hasOneNestedArray = arr.find((x) => Array.isArray(x));
  if (!hasOneNestedArray) return flatOneLevel;

  return n > 1 ? flat(flatOneLevel, n - 1) : flatOneLevel;
};

// var flat = function (arr, n) {
//   if (n === 0) return arr;

//   const flatOnelevel = arr.reduce((accum, current) => {
//     const isArray = Array.isArray(current);
//     accum.push(...(isArray ? current : [current]));
//     return accum;
//   }, []);

//   const hasOneNestedArray = arr.find((x) => Array.isArray(x));

//   if (!hasOneNestedArray || hasOneNestedArray.length === 0) return flatOnelevel;

//   return flat(flatOnelevel, n - 1);
// };
