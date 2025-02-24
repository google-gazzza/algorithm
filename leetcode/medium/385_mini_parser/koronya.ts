// [Medium] 385. Mini Parser
// 385_mini_parser

// https://leetcode.com/problems/mini-parser
// Runtime: 131 ms, faster than 66.67% of TypeScript online submissions for Mini Parser.
// Memory Usage: 46.9 MB, less than 33.33% of TypeScript online submissions for Mini Parser.

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

function deserialize(s: string): NestedInteger {
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
  for (let i: number = 1; i < sLen; i += 1) {
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
