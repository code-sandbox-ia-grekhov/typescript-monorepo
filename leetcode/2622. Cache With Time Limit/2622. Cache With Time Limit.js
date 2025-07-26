var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const time = Date.now();
  let hasKey = !!this.cache[key] && this.cache[key].expireAt > time;

  this.cache[key] = {
    value: value,
    expireAt: Date.now() + duration,
  };

  return hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const time = Date.now();
  let value = this.cache[key];

  if (value && value.expireAt > time) return value.value;
  else return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const time = Date.now();
  return (unexpireValue = Object.values(this.cache).reduce((accum, current) => {
    if (current.expireAt > time) accum += 1;
    return accum;
  }, 0));
};
