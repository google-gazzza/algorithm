// leetcode/medium/2649. Nested Array Generator
// 2649-nested-array-generator
// URL: https://leetcode.com/problems/nested-array-generator/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  while (arr.length) {
    if (Array.isArray(arr[0]) && arr[0].length === 0) {
      arr.shift();
      continue;
    }

    while (Array.isArray(arr[0])) {
      arr = arr[0].concat(arr.slice(1));
    }

    if (typeof arr[0] === 'number') {
      yield arr.shift() as number;
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
