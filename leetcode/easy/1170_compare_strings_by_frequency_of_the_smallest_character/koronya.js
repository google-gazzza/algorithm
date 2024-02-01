const getFValue = str => {
  const strLen = str.length
  let minCharCode = 'z'.charCodeAt()
  let minCount = 0
  for (let i = 0; i < strLen; i = i + 1 | 0) {
    const charCode = str[i].charCodeAt()
    if (charCode < minCharCode) {
      minCharCode = charCode
      minCount = 1
    } else if (charCode === minCharCode) {
      minCount += 1
    }
  }
  return minCount
}

// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character
// memoize 사용해서 조금더 빠르게!
// Runtime: 100 ms, faster than 73.93% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
// Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
const numSmallerByFrequency = (queries, words) => {
  const wordsFValueArr = words.map(word => getFValue(word))
  const getFilteredLength = num => wordsFValueArr.filter(fValue => fValue > num).length
  const memoizedMap = new Map()
  const getMemoizedFilteredLength = num => {
    if (!memoizedMap.has(num)) {
      const res = getFilteredLength(num)
      memoizedMap.set(num, res)
      return res
    }
    return memoizedMap.get(num)
  }
  return queries.reduce((acc, query) => {
    const fValueOfQuery = getFValue(query)
    return [...acc, getMemoizedFilteredLength(fValueOfQuery)]
  }, [])
}

// 처음 풀었던 풀이!
// Runtime: 156 ms, faster than 42.86% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
// Memory Usage: 43.7 MB, less than 100.00% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
const numSmallerByFrequency2 = (queries, words) => {
  const wordsFValueArr = words.map(word => getFValue(word))
  return queries.reduce((acc, query) => {
    const fValueOfQuery = getFValue(query)
    return [...acc, wordsFValueArr.filter(fValue => fValue > fValueOfQuery).length]
  }, [])
}

