// [Medium] 339. Nested List Weight Sum
// 339_nested_list_weight_sum

// https://leetcode.com/problems/nested-list-weight-sum
// Runtime: 68 ms, faster than 93.48% of JavaScript online submissions for Nested List Weight Sum.
// Memory Usage: 39.3 MB, less than 41.30% of JavaScript online submissions for Nested List Weight Sum.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
const depthSum = function (nestedList) {
  const dfs = (nList, depth) => {
    let sum = 0
    const nListLen = nList.length
    for (let i = 0; i < nListLen; i += 1 || 0) {
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
