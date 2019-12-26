// https://leetcode.com/problems/longest-common-prefix
// Runtime: 56 ms, faster than 80.28% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 36.8 MB, less than 15.63% of JavaScript online submissions for Longest Common Prefix.
const getCommonArr = (baseArr, addedArr) => {
  const addedArrLen = addedArr.length
  const resultArr = []

  for (let i = 0; i < addedArrLen; i += 1) {
    const item = addedArr[i]
    if (baseArr[i] && item === baseArr[i]) {
      resultArr.push(item)
    } else {
      break
    }
  }
  return resultArr
}

const longestCommonPrefix = strs => {
  let commonPrefixArr = strs[0] ? strs[0].split('') : []

  for (let i = 1, strsLen = strs.length; i < strsLen; i += 1) {
    commonPrefixArr = getCommonArr(commonPrefixArr, strs[i].split(''))
  }

  return commonPrefixArr.join('')
}
