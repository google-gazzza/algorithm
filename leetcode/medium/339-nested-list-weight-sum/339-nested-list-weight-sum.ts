/*
339-nested-list-weight-sum
leetcode/medium/339. Nested List Weight Sum
URL: https://leetcode.com/problems/nested-list-weight-sum/

NOTE: Description

NOTE: Constraints
  - 1 <= nestedList.length <= 50
  - The values of the integers in the nested list is in the range [-100, 100].
  - The maximum depth of any integer is less than or equal to 50.

NOTE: Explanation
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

 function depthSum(nestedList: NestedInteger[], depth: number = 1): number {
  return nestedList.reduce((acc, curr: NestedInteger) => {
    if (curr.isInteger()) {
      return acc + (curr.getInteger() * depth);
    }

    return acc + depthSum(curr.getList(), depth + 1);
  }, 0);
};