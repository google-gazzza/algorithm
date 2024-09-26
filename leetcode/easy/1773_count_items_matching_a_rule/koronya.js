// [Easy] 1773. Count Items Matching a Rule
// 1773_count_items_matching_a_rule

// https://leetcode.com/problems/count-items-matching-a-rule
// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Count Items Matching a Rule.
// Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Count Items Matching a Rule.

const ruleArr = ['type', 'color', 'name']

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = ruleArr.indexOf(ruleKey)
  return items.filter((item) => item[keyIndex] === ruleValue).length
}

// countMatches(
//   [
//     ['phone', 'blue', 'pixel'],
//     ['computer', 'silver', 'lenovo'],
//     ['phone', 'gold', 'iphone'],
//   ],
//   'color',
//   'silver',
// ) //?

countMatches(
  [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'phone'],
    ['phone', 'gold', 'iphone'],
  ],
  'type',
  'phone',
) //?
