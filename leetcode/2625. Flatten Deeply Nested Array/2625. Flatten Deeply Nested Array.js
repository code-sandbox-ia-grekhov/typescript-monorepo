/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const result = [];

  const helper = (array, currentDepth) => {
    for (const value of array) {
      if (Array.isArray(value) && currentDepth < n) {
        helper(value, currentDepth + 1);
      } else {
        result.push(value);
      }
    }
  };

  helper(arr, 0);
  return result;
};
