/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const uniqueSet = [...arr1, ...arr2].reduce((accum, current) => {
    if (accum.has(current.id)) {
      accum.set(current.id, {
        ...accum.get(current.id),
        ...current,
      });
    } else accum.set(current.id, current);

    return accum;
  }, new Map());

  return Array.from(uniqueSet.values()).sort((a, b) => a.id - b.id);
};
