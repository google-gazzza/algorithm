// which-are-in
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/

const inArray = (array1, array2) => {
  return array1.map((array1Element) => {
    return array2.map((array2Element) => {
      return array2Element.search(array1Element);
    }).filter((v) => v >= 0).length ? array1Element : null;
  }).filter((v) => v)
    .sort();
};
// I really made trash code today.
// shame on me.

// best practice in codewars
// const inArray = (arr1, arr2) => {
//   return arr1.filter((arr1v) => {
//     return arr2.some((arr2v) => {
//       return arr2v.search(arr1v) > -1;
//     });
//   }).sort();
// };

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

let a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2), ["live", "strong"]);

a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2), ["arp", "live", "strong"]);

a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2), []);
