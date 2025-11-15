export function memoize(fn) {
  const cashed = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    const cashedValue = cashed.get(key);

    if (cashed.has(key)) return cashedValue;

    const result = fn(...args);
    cashed.set(key, result);
    return result;
  };
}
