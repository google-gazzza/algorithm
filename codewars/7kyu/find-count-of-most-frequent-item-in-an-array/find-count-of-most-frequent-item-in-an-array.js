// find-count-of-most-frequent-item-in-an-array
// Find Count of Most Frequent Item in an Array
// difficulty: 7kyu
// https://www.codewars.com/kata/56582133c932d8239900002e/

function mostFrequentItemCount(collection) {
  if (collection.length === 0) {
    return 0;
  }
  
  const countedMap = collection.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  
  return [...Object.entries(countedMap)]
    .sort((a, b) => a[1] - b[1])
    .pop()[1];
}

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
