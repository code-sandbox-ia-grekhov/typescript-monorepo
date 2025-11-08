// const success = false;

// const testPromise = new Promise((resolve, reject) => {
//   console.log("Create Promise");

//   if (success) resolve("Resolve");
//   else reject("Reject");
// });

// testPromise
//   .then((val) => console.log("Val: ", val))
//   .catch((error) => console.log("Error: ", error));

// Promise.resolve("Test resolve").then((val) => console.log("Val 2: ", val));

/**
 * Выстраивание цепочки с последовательным обновлением значения, полученного асинхронно
 */
// Promise.resolve("1")
//   .then((val) => (val += "+1"))
//   .then((val) => (val += "=2"))
//   .then((val) => console.log(val));

/**
 * До catch будет всен пропущено при reject. Если reject не обработать - все упадет с ошибкой Unhandeled Promise Rejection
 * Если Promise.reject("Reject") не вернуть - catch не поймает ошибку и все упадет с ошибкой Unhandeled Promise Rejection
 *
 * Лог:
 * Error:  Reject
 * Result:  Promise 3
 */
Promise.resolve("Promise 1 ")
  .then((val) => Promise.reject("Reject"))
  .then((val) => (val += "Promise 2 "))
  .catch((error) => console.log("Error: ", error))
  .then((val) => (val ? (val += "Promise 3") : "Promise 3"))
  .then((val) => console.log("Result: ", val));
