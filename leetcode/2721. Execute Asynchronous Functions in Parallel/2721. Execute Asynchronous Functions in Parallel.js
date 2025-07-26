/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  const results = [];
  let completed = 0;

  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
