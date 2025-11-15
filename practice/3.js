/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
export const addTwoPromises = async function (promise1, promise2) {
  const safePromise1 = promise1.catch((val) => val);
  const safePromise2 = promise2.catch((val) => val);

  return Promise.all([safePromise1, safePromise2]).then(
    ([val1, val2]) => val1 + val2
  );
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((val) =>
  console.log(val)
);
