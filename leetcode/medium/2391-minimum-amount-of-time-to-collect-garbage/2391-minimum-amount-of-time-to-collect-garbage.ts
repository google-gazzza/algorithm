/*
2391-minimum-amount-of-time-to-collect-garbage
leetcode/medium/2391. Minimum Amount of Time to Collect Garbage
URL: https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function abstractCollection(
  garbage: string[][],
  targetGarbage: string,
  travel: number[],
  garbageMap: Map<string, number>,
): number {
  return garbage.map((item, i) => {
    let count = 0;

    while (item.includes(targetGarbage)) {
      garbageMap.set(targetGarbage, garbageMap.get(targetGarbage) - 1);
      item.splice(item.indexOf(targetGarbage), 1);
      count += 1;
    }

    if (garbageMap.get(targetGarbage) !== 0) {
      count += travel[i];
    }

    return count;
  }).reduce((acc, cur) => acc + cur, 0);
}

function garbageCollection(garbage: string[], travel: number[]): number {
  const garbageMap: Map<string, number> = new Map();
  const convertedGarbage: string[][] = garbage.map((item) => item.split(''));

  convertedGarbage.forEach((item) => {
    for (let i = 0; i < item.length; i += 1) {
      if (!garbageMap.has(item[i])) {
        garbageMap.set(item[i], 0);
      }
      garbageMap.set(item[i], garbageMap.get(item[i]) + 1);
    }
  });

  return Array.from(garbageMap.keys())
    .map((key) => abstractCollection(convertedGarbage, key, travel, garbageMap))
    .reduce((acc, cur) => acc + cur, 0);
}

let garbage = ['G', 'P', 'GP', 'GG'];
let travel = [2, 4, 3];
console.log(garbageCollection(garbage, travel));
// Output: 21

garbage = ['MMM', 'PGM', 'GP'];
travel = [3, 10];
console.log(garbageCollection(garbage, travel));
// Output: 37
