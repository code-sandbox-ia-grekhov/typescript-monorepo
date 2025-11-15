const testArray = [1, 4, 5, 2, 3, 9, 8, 11, 0];
const result = "0-5, 8-9, 11";

const compress = (list) => {
  const sortedArray = list.toSorted((a, b) => a - b);
  const spliceIndexes = [];
  const resultArray = [];

  sortedArray.forEach((val, index) => {
    const previousElement = sortedArray[index - 1];
    if (val !== previousElement + 1) spliceIndexes.push(index);
  });

  for (let i = 0; i < spliceIndexes.length; i += 1) {
    resultArray.push(sortedArray.slice(spliceIndexes[i], spliceIndexes[i + 1]));
  }

  return resultArray.map((x) =>
    x.length > 1 ? `${x[0]}-${x[x.length - 1]}` : `${x[0]}`
  );
};

console.log(compress(testArray));

// const compress = (list) => {
//   const sorted = list.toSorted((a, b) => a - b);
//   const result = [];

//   let start = sorted[0];
//   let prev = sorted[0];

//   for (let i = 1; i < sorted.length; i++) {
//     const cur = sorted[i];

//     if (cur !== prev + 1) {
//       result.push(start === prev ? `${start}` : `${start}-${prev}`);
//       start = cur;
//     }

//     prev = cur;
//   }

//   result.push(start === prev ? `${start}` : `${start}-${prev}`);

//   return result;
// };
