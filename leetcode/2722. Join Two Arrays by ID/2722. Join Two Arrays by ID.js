var join = function (arr1, arr2) {
  const map = new Map();

  for (const obj of arr1) {
    map.set(obj.id, obj);
  }

  for (const obj of arr2) {
    const existing = map.get(obj.id);
    if (existing) {
      for (const key in obj) {
        existing[key] = obj[key];
      }
    } else {
      map.set(obj.id, obj);
    }
  }

  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
