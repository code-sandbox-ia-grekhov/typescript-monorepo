/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.filter((x) => !!x).map((x) => compactObject(x));
  }

  if (typeof obj === "object") {
    const arrayFromObj = Object.entries(obj);

    return arrayFromObj.reduce((accum, current) => {
      const [key, value] = current;

      if (!value) return accum;

      if (typeof value === "object") {
        accum[key] = compactObject(value);
      } else {
        accum[key] = value;
      }

      return accum;
    }, {});
  }

  if (!!obj) return obj;
};

const obj = { a: null, b: [false, 1] };
const result = compactObject(obj);
console.log("result: ", result);
