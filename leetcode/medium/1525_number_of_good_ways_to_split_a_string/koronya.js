// [Medium] 1525. Number of Good Ways to Split a String
// 1525_number_of_good_ways_to_split_a_string

// https://leetcode.com/problems/number-of-good-ways-to-split-a-string
// Runtime: 112 ms, faster than 77.12% of JavaScript online submissions for Number of Good Ways to Split a String.
// Memory Usage: 39.3 MB, less than 80.39% of JavaScript online submissions for Number of Good Ways to Split a String.
const numSplits = s => {
  const sLen = s.length
  let resultCount = 0
  const totalMap = new Map()
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const str = s[i]
    totalMap.set(str, (totalMap.get(str) | 0) + 1)
  }
  const preMap = new Map()
  const nextMap = totalMap

  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const str = s[i]
    preMap.set(str, (preMap.get(str) | 0) + 1)
    const strCountOfNextMap = nextMap.get(str)
    if (strCountOfNextMap === 1) {
      nextMap.delete(str)
    } else {
      nextMap.set(str, strCountOfNextMap - 1)
    }
    if (preMap.size === nextMap.size) {
      resultCount += 1
    }
  }

  return resultCount
}


const getDistinctStringLength = str => {
  const strLen = str.length
  const charSet = new Set()
  for (let i = 0; i < strLen; i = i + 1 | 0) {
    const char = str[i]
    if (!charSet.has(char)) {
      charSet.add(char)
    }
  }
    
  return charSet.size
}

// 처음에 아래처럼 풀다가 Time Limit Exceeded 뜸 ㅜㅜ
const numSplits2 = s => {
  const sLen = s.length
  let resultCount = 0
  for (let i = 0; i < sLen; i = i + 1 | 0) {
    const pre = s.slice(0, i)
    const next = s.slice(i)
    if (getDistinctStringLength(pre) === getDistinctStringLength(next)) {
      resultCount += 1
    }
  }

  return resultCount
}
