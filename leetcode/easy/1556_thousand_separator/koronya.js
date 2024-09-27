// [Easy] 1556. Thousand Separator
// 1556_thousand_separator

// https://leetcode.com/problems/thousand-separator
// Runtime: 68 ms, faster than 96.88% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 38.8 MB, less than 19.31% of JavaScript online submissions for Thousand Separator.
const thousandSeparator = function(n) {
  let count = 0
  return String(n).split('').reduceRight((acc, cur) => {
    if (count !== 0 && count % 3 === 0) {
      cur = cur + '.'
    }
    count += 1
    return cur + acc
  }, '')
}
