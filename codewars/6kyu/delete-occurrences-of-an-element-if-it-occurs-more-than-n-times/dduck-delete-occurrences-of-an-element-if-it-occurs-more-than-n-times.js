// delete-occurrences-of-an-element-if-it-occurs-more-than-n-times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023

const deleteNth = (arr, n) => {
  const countMap = new Map();
  
  return arr.map((v) => {
    const count = countMap.get(v) || 1;
    countMap.set(v, count + 1);
    if (count <= n) {
      return v;
    }
    return undefined;
  }).filter((v) => v !== undefined);
};

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);

// ---------------------------
// best practice of codewars
// ---------------------------
//
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }
