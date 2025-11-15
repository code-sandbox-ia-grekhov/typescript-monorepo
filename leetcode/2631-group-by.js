/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((accum, current) => {
    const key = fn(current);

    if (!accum[key]) {
      accum[key] = [current];
    } else {
      accum[key].push(current);
    }

    return accum;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
