// [Medium] 339. Nested List Weight Sum
// 339_nested_list_weight_sum

// https://leetcode.com/problems/nested-list-weight-sum
// Runtime: 76 ms, faster than 92.86% of TypeScript online submissions for Nested List Weight Sum.
// Memory Usage: 41 MB, less than 32.14% of TypeScript online submissions for Nested List Weight Sum.

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

function depthSum(nestedList: NestedInteger[]): number {
  const dfs = (nList: NestedInteger[], depth: number): number => {
    let sum: number = 0
    const nListLen = nList.length
    for (let i: number = 0; i < nListLen; i += 1) {
      const listItem = nList[i]
      if (listItem.isInteger() === true) {
        sum += listItem.getInteger() * depth
      } else {
        sum += dfs(listItem.getList(), depth + 1)
      }
    }
    return sum
  }

  return dfs(nestedList, 1)
}

depthSum([[1, 1], 2, [1, 1]]) //?
