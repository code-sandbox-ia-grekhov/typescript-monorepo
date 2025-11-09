/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((accum, current) => {
      return current(accum);
    }, x);
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);

console.log(fn(4));

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
