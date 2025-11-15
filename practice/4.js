/**
 * Функция, которая запрашивает данные с помощью fetcher
 * и повторяет запрос в случае ошибки. Запросы повторяются
 * до тех пор, пока не будет получен успешный ответ
 * или пока не будут исчерпаны все попытки.
 *
 * @param {function} fetcher - функция, которая возвращает Promise
 * @param {number} count - максимальное количество попыток
 */

export async function fetchWithAutoRetry(fetcher, count) {
  return fetcher().then(
    (val) => val,
    (err) => {
      if (count === 0) throw err;
      else return fetchWithAutoRetry(fetcher, count - 1);
    }
  );
}

// export async function fetchWithAutoRetry(fetcher, count) {
//   try {
//     return await fetcher();
//   } catch (err) {
//     if (count === 0) throw err;
//     return fetchWithAutoRetry(fetcher, count - 1);
//   }
// }
