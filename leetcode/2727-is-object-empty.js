/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (obj == null) return true;

  const isArray = Array.isArray(obj);

  if (isArray) {
    return obj.length === 0;
  } else {
    return Object.keys(obj).length === 0;
  }
};
