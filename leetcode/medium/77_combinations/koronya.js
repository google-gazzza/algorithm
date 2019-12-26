// https://leetcode.com/problems/combinations
// Runtime: 104 ms, faster than 82.95% of JavaScript online submissions for Combinations.
// Memory Usage: 40.5 MB, less than 66.67% of JavaScript online submissions for Combinations.
const combine = (n, k) => {
  const resultArr = []
  const nArr = Array.from({length: n}, (_, index) => index + 1)
  const backtrack = (elements, count, loopCount) => {
    if (count === k) {
      resultArr.push([...elements])
      return
    }
    for (let i = loopCount; i < n; i += 1) {
      const item = nArr[i]
      elements.push(item)
      backtrack(elements, count + 1, i + 1)
      elements.pop()
    }
  }
  backtrack([], 0, 0)
  return resultArr
}
