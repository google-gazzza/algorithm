// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

const findUniq = (arr) => arr.map((v) => arr.indexOf(v) === arr.lastIndexOf(v) ? v : undefined)
  .filter((v) => v !== undefined)[0];

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);

// const findUniq = (arr) => {
//   const map = new Map([...new Set(arr)].map((v) => [v, 0]));
//   arr.forEach((v) => {
//     map.set(v, map.get(v) + 1);
//   });
//
//   let uniqueNum = null;
//   [...map.entries()]
//     .forEach((v) => {
//       if (v[1] === 1) {
//         uniqueNum = v[0];
//       }
//     });
//
//   return uniqueNum;
// };
