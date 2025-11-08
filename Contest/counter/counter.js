/**
 * Реализуйте функцию, которая создаёт объект счётчика
 * с базовыми методами: increment, decrement, reset.
 *
 * @param {number} init - начальное значение счётчика
 * @returns {object} объект с методами increment, decrement, reset
 */
export function createCounter(init) {
  const initValue = init;

  return {
    increment: () => (init += 1),
    decrement: () => (init -= 1),
    reset: () => (init = initValue),
  };
}

/**
 * Временная сложность (time complexity)
 * Константная - O(1), так как всегда выполняется простое арифметическое действие с 1 числом
 *
 * Сложность по памяти (space complexity)
 * Константная - O(1), так как количество созданных объектов и переменных постоянно
 */
