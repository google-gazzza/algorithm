// [Medium] 165. Compare Version Numbers
// 165_compare_version_numbers

// https://leetcode.com/problems/compare-version-numbers
// Runtime: 68 ms, faster than 97.56% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 38.3 MB, less than 80.79% of JavaScript online submissions for Compare Version Numbers.

const convertNum = (version) => (version == null ? 0 : Number(version))

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const version1Arr = version1.split('.')
  const version2Arr = version2.split('.')
  const version1ArrLen = version1Arr.length
  const version2ArrLen = version2Arr.length
  const maxLen = Math.max(version1ArrLen, version2ArrLen)
  for (let i = 0; i < maxLen; i += 1 || 0) {
    const ver1 = convertNum(version1Arr[i])
    const ver2 = convertNum(version2Arr[i])
    if (ver1 > ver2) {
      return 1
    }
    if (ver1 < ver2) {
      return -1
    }
  }
  return 0
}

compareVersion('1.01', '1.001') //?
compareVersion('1.0', '1.0.0') //?
compareVersion('0.1', '1.1') //?
compareVersion('1.0.1', '1') //?
compareVersion('7.5.2.4', '7.5.3') //?
compareVersion('1.01', '1.001.02') //?

Number('01') //?
Number('001') //?
