/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */

export const addTwoPromises = async function (promise1, promise2) {
  const safePromiseFirst = promise1.catch((val) => val);
  const safePromiseSecond = promise2.catch((val) => val);

  const [v1, v2] = await Promise.all([safePromiseFirst, safePromiseSecond]);

  return v1 + v2;
};

// export const addTwoPromises = async function (promise1, promise2) {
//   return Promise.all([promise1.catch((v) => v), promise2.catch((v) => v)]).then(
//     ([v1, v2]) => v1 + v2
//   );
// };

const test = addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(
  (val) => console.log(val)
);
