/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBeFn(_val) {
    if (val === _val) return true;
    else throw new Error("Not Equal");
  }

  function notToBe(_val) {
    if (val !== _val) return true;
    else throw new Error("Equal");
  }

  return {
    toBe: toBeFn,
    notToBe: notToBe,
  };
};

module.exports = expect;
