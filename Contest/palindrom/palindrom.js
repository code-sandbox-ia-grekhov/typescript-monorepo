/**
 * Функция проверяет, является ли строка палиндромом
 *
 * @param {string} str - Строка, которую необходимо проверить
 * @returns {boolean} Булево значение, является ли строка палиндромом
 */
export function isPalindrome(s) {
  const normalized = s
    .toLowerCase()
    .normalize()
    .replace(/[^a-z0-9]/gi, "");

  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}
