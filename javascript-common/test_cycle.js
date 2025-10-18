// Генерируем массив объектов
const arr = Array.from({ length: 1_000_000 }, (_, i) => ({
  id: i,
  value: i % 100,
  active: i % 2 === 0,
  category: ["A", "B", "C"][i % 3],
}));

// --- С циклом for ---
console.time("for loop complex object");
const accFor = {
  sumValue: 0,
  activeCount: 0,
  categories: { A: 0, B: 0, C: 0 },
};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  accFor.sumValue += item.value;
  if (item.active) accFor.activeCount++;
  accFor.categories[item.category]++;
}
console.timeEnd("for loop complex object");

// --- С reduce ---
console.time("reduce complex object");
const accReduce = arr.reduce(
  (acc, item) => {
    acc.sumValue += item.value;
    if (item.active) acc.activeCount++;
    acc.categories[item.category]++;
    return acc;
  },
  { sumValue: 0, activeCount: 0, categories: { A: 0, B: 0, C: 0 } }
);
console.timeEnd("reduce complex object");

console.log(accFor, accReduce);
