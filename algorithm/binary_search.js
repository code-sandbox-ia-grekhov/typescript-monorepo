const binarySearch = (arr, val, startIndex = 0, endIndex = arr.length - 1) => {
  if (startIndex > endIndex) return -1;

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const middleElement = arr[middleIndex];

  if (val === middleElement) return middleIndex;
  if (val > middleElement)
    return binarySearch(arr, val, middleIndex + 1, endIndex);
  return binarySearch(arr, val, startIndex, middleIndex - 1);
};

const arr = Array.from({ length: 1_000_000 }, (_, i) => i + 1);

console.time("binarySearch");
const result = binarySearch(arr, 999999);
console.log(result);
console.timeEnd("binarySearch");
