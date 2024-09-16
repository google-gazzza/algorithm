// https://leetcode.com/problems/sort-integers-by-the-power-value
// Runtime: 84 ms, faster than 92.61% of JavaScript online submissions for Sort Integers by The Power Value.
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Sort Integers by The Power Value.

const getNextValue = num => num % 2 === 0
  ? num / 2
  : num * 3 + 1

const sortFnc = (a, b) => {
  if (a.count > b.count) {
    return 1
  } else if (a.count < b.count) {
    return -1
  }
  if (a.num > b.num) {
    return 1
  }
  return -1
}

const getKth = (lo, hi, k) => {
  const resultArr = []
  for (let i = lo; i <= hi; i = i + 1 | 0) {
    let target = i
    let count = 0
    while (target !== 1) {
      target = getNextValue(target)
      count += 1
    }
    resultArr.push({count, num: i})
  }
  resultArr.sort(sortFnc)
  return resultArr[k - 1].num
}
