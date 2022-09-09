/*
364-nested-list-weight-sum-ii
leetcode/medium/364. Nested List Weight Sum II
URL: https://leetcode.com/problems/nested-list-weight-sum-ii/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

// class NestedInteger {
//   // If value is provided, then it holds a single integer
//   // Otherwise it holds an empty nested list
//   constructor(value?: number) {
//   ...
//   };
//
//   // Return true if this NestedInteger holds a single integer, rather than a nested list.
//   isInteger(): boolean {
//   ...
//   };
//
//   // Return the single integer that this NestedInteger holds, if it holds a single integer
//   // Return null if this NestedInteger holds a nested list
//   getInteger(): number | null {
//   ...
//   };
//
//   // Set this NestedInteger to hold a single integer equal to value.
//   setInteger(value: number) {
//   ...
//   };
//
//   // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
//   add(elem: NestedInteger) {
//   ...
//   };
//
//   // Return the nested list that this NestedInteger holds,
//   // or an empty list if this NestedInteger holds a single integer
//   getList(): NestedInteger[] {
//   ...
//   };
// };

function findMaximumDepth(nestedList: NestedInteger[]): number {
  let maximumDepth = 1;

  // NOTE: it's empty list
  if (nestedList.length === 0) {
    return -1;
  }

  for (let i = 0; i < nestedList.length; i += 1) {
    const nestedInteger = nestedList[i];
    if (!nestedInteger.isInteger()) {
      const depth = findMaximumDepth(nestedInteger.getList());

      // NOTE: when empty list is provided then shouldn't calculate
      if (depth !== -1) {
        maximumDepth = Math.max(maximumDepth, depth + 1);
      }
    }
  }

  return maximumDepth;
}

function multiplyWithDepth(nestedList: NestedInteger[], depth: number): number {
  let sum = 0;

  for (let i = 0; i < nestedList.length; i += 1) {
    const nestedInteger = nestedList[i];
    if (nestedInteger.isInteger()) {
      sum += nestedInteger.getInteger() * depth;
    } else {
      sum += multiplyWithDepth(nestedInteger.getList(), depth - 1);
    }
  }

  return sum;
}

function depthSumInverse(nestedList: NestedInteger[]): number {
  const maximumDepth = findMaximumDepth(nestedList);

  return multiplyWithDepth(nestedList, maximumDepth);
}
