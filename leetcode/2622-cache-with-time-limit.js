var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const nowMs = new Date().getTime();
  const expireTime = nowMs + duration;
  const previousCacheVal = this.cache.get(key);

  if (previousCacheVal && previousCacheVal.expireTime > nowMs) {
    this.cache.set(key, {
      value,
      expireTime,
    });
    return true;
  } else {
    this.cache.set(key, {
      value,
      expireTime,
    });
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const selectedVal = this.cache.get(key);

  if (selectedVal && selectedVal.expireTime > new Date().getTime())
    return selectedVal.value;
  else return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const values = Array.from(this.cache.values()).filter(
    (v) => v.expireTime > new Date().getTime()
  );
  return values.length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
