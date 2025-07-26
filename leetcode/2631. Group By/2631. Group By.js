/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((accum, current) => {
    const key = fn(current);

    (accum[key] ??= []).push(current);

    return accum;
  }, {});
};
