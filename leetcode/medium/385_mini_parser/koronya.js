// [Medium] 385. Mini Parser
// 385_mini_parser

// https://leetcode.com/problems/mini-parser
// Runtime: 117 ms, faster than 84.44% of JavaScript online submissions for Mini Parser.
// Memory Usage: 54.7 MB, less than 82.22% of JavaScript online submissions for Mini Parser.

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
 * @param {string} s
 * @return {NestedInteger}
 */
const deserialize = function (s) {
  const result = new NestedInteger()
  if (!s) {
    return result
  }
  if (s[0] !== '[') {
    result.setInteger(Number(s))
    return result
  }
  const sLen = s.length
  if (sLen === 2) {
    return result
  }
  let start = 1
  let count = 0
  for (let i = 1; i < sLen; i += 1 || 0) {
    const char = s[i]
    if (count === 0 && (i === sLen - 1 || char === ',')) {
      result.add(deserialize(s.substring(start, i)))
      start = i + 1
    } else if (char === '[') {
      count += 1
    } else if (char === ']') {
      count -= 1
    }
  }

  return result
}

deserialize('abc')
