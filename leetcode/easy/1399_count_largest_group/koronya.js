// https://leetcode.com/problems/count-largest-group/
// Runtime: 80 ms, faster than 40.28% of JavaScript online submissions for Count Largest Group.
// Memory Usage: 41.8 MB, less than 7.21% of JavaScript online submissions for Count Largest Group.
const countLargestGroup = n => {
  if (n <= 10) {
    return n
  }
  const sumMap = new Map()
  for (let num = 1; num <= n; num = num + 1 | 0) {
    const sum = num.toString().split('').reduce((sum, cur) => sum + Number(cur), 0)
    sumMap.set(sum, (sumMap.get(sum) | 0) + 1)
  }
  const freqArr = [...sumMap].map(item => item[1])
  const max = Math.max(...freqArr)

  return freqArr.filter(freq => freq === max).length
}
