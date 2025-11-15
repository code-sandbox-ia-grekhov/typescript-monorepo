/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
  const countChunk = Math.ceil(arr.length / size);

  return Array.from({ length: countChunk }).reduce((accum, _, index) => {
    const position = index * size;
    accum.push(arr.slice(position, position + size));

    return accum;
  }, []);
};

// var chunk = function (arr, size) {
//   const chunky = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunky.push(arr.slice(i, i + size));
//   }
//   return chunky;
// };

const arr = [1, 9, 6, 3, 2];
const size = 3;

console.log(chunk(arr, size));
