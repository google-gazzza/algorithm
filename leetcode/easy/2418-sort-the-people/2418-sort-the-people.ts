/*
2418-sort-the-people
leetcode/easy/2418. Sort the People
URL: https://leetcode.com/problems/sort-the-people/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function zip(array1: any[], array2: any[]): any[] {
  const result = [];

  for (let i = 0; i < Math.max(array1.length, array2.length); i += 1) {
    result.push([array1[i], array2[i]]);
  }

  return result;
}

function sortPeople(names: string[], heights: number[]): string[] {
  const people: any[] = zip(names, heights);

  people.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  return people.map((person) => person[0]);
}

// Example 1:
let names = ['Mary', 'John', 'Emma'];
let heights = [180, 165, 170];
console.log(sortPeople(names, heights));
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
//   Example 2:
//
names = ['Alice', 'Bob', 'Bob'];
heights = [155, 185, 150];
console.log(sortPeople(names, heights));
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
