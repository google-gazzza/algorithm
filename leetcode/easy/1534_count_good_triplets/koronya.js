// [Easy] 1534. Count Good Triplets
// 1534_count_good_triplets

// https://leetcode.com/problems/count-good-triplets
// Runtime: 420 ms, faster than 5.11% of JavaScript online submissions for Count Good Triplets.
// Memory Usage: 73.2 MB, less than 5.11% of JavaScript online submissions for Count Good Triplets.
const countGoodTriplets = (arr, a, b, c) => {
  const arrLen = arr.length
  const resultArr = []
  const dfs = (targetIndex, accArr = []) => {
    const accArrLen = accArr.length
    if (accArrLen === 3) {
      const [first, second, third] = accArr
      if (Math.abs(second - third) <= b && Math.abs(third - first) <= c) {
        resultArr.push(accArr)
      }
    } else if (accArrLen === 2) {
      const [first, second] = accArr
      if (Math.abs(first - second) <= a) {
        for (let i = targetIndex + 1; i < arrLen; i = i + 1 | 0) {
          dfs(i, [...accArr, arr[i]])
        }
      }
    } else if (accArrLen === 1) {
      for (let i = targetIndex + 1; i < arrLen - 1; i = i + 1 | 0) {
        dfs(i, [...accArr, arr[i]])
      }
    }
  }

  for (let i = 0; i < arrLen - 2; i = i + 1 | 0) {
    dfs(i, [arr[i]])
  }

  return resultArr.length
}
