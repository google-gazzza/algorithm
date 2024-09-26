// [Medium] 739. Daily Temperatures
// 739_daily_temperatures

// https://leetcode.com/problems/daily-temperatures
// Runtime: 208 ms, faster than 54.23% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 47.1 MB, less than 41.28% of JavaScript online submissions for Daily Temperatures.
const dailyTemperatures = T => {
  const TLen = T.length
  const resultArr = []
  const stack = []

  for (let i = TLen - 1; i >= 0; i = i - 1 | 0) {
    if (stack.length === 0) {
      resultArr.push(0)
    } else {
      let top = stack[stack.length - 1]
      while (stack.length && T[top] <= T[i]) {
        stack.pop()
        if (stack.length > 0) {
          top = stack[stack.length - 1]
        }
      }
      if (stack.length === 0) {
        resultArr.push(0)
      } else {
        resultArr.push(top - i)
      }
    }
    stack.push(i)
  }

  return resultArr.reverse()
}

// Runtime: 812 ms, faster than 30.77% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 69.3 MB, less than 5.00% of JavaScript online submissions for Daily Temperatures.
const dailyTemperatures2 = T => {
  const resultArr = []
  const TLen = T.length
  const TMap = new Map()
  T.forEach((t, i) => {
    if (TMap.has(t)) {
      TMap.get(t).push(i)
    } else {
      TMap.set(t, [i])
    }
  })
  const moreMap = new Map()
  const sortedArr = [...TMap].sort((a, b) => b[0] - a[0])
  let accArr = []
  sortedArr.forEach(item => {
    moreMap.set(item[0], [...accArr])
    accArr.push(...item[1])
    accArr.sort((a, b) => a - b)
  })

  for (let i = 0; i < TLen; i = (i + 1) | 0) {
    const candidates = moreMap.get(T[i])
    const candidatesLen = candidates.length
    let findFlag = false
    for (let j = 0; j < candidatesLen; j = (j + 1) | 0) {
      if (i < candidates[j]) {
        resultArr.push(candidates[j] - i)
        findFlag = true
        break
      }
    }
    if (findFlag === false) {
      resultArr.push(0)
    }
  }

  return resultArr
}

// Runtime: 684 ms, faster than 40.90% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 46.9 MB, less than 47.95% of JavaScript online submissions for Daily Temperatures.
const dailyTemperatures3 = T => {
  const TLen = T.length
  const resultArr = []
  for (let i = 0; i < TLen - 1; i = (i + 1) | 0) {
    const num = T[i]
    let findFlag = false
    for (let j = i + 1; j < TLen; j = (j + 1) | 0) {
      if (num < T[j]) {
        resultArr.push(j - i)
        findFlag = true
        break
      }
    }
    if (findFlag === false) {
      resultArr.push(0)
    }
  }
  resultArr.push(0)

  return resultArr
}
