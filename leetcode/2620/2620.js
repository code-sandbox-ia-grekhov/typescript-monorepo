/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;

  return function () {
    return (count += 1);
  };
};

module.exports = createCounter;
