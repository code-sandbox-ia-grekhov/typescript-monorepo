/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    functions.forEach((fn, index) => {
      fn()
        .then((val) => {
          result[index] = val;
          count++;

          if (count === functions.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// var promiseAll = function (functions) {
//   let result = [];
//   let count = 0;

//   return new Promise((resolve, reject) => {
//     functions.forEach((fn, index) => {
//       fn().then(
//         (val) => {
//           result[index] = val;
//           count++;

//           if (count === functions.length) resolve(result);
//         },
//         (err) => reject(err)
//       );
//     });
//   });
// };
