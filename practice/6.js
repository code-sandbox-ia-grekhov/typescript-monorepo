/**
 * Функция проверяет, является ли строка палиндромом
 *
 * @param {string} str - Строка, которую необходимо проверить
 * @returns {boolean} Булево значение, является ли строка палиндромом
 */
export function isPalindrome(str) {
  const normiliseString = str
    .toLowerCase()
    .normalize()
    .replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = normiliseString.length - 1;

  while (left < right) {
    if (normiliseString[left] !== normiliseString[right]) return false;
    left++;
    right--;
  }

  return true;
}

// export function isPalindrome(str) {
//   const normaliseString = str
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, "")
//     .trim()
//     .normalize();

//   const reverseString = normaliseString.split("").reverse().join('');
//   return normaliseString === reverseString;
// }
