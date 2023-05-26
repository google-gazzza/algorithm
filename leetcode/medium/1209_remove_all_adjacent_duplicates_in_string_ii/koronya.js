// [Medium] 1209. Remove All Adjacent Duplicates in String II
// 1209_remove_all_adjacent_duplicates_in_string_ii

// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii
// Runtime: 76 ms, faster than 96.85% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
// Memory Usage: 48 MB, less than 98.20% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
  const arr = []
  for (let char of s) {
    if (arr.length && arr[arr.length - 1].char === char) {
      arr[arr.length - 1].count += 1
      if (arr[arr.length - 1].count === k) {
        arr.pop()
      }
    } else {
      arr.push({ char, count: 1 })
    }
  }

  return arr.reduce((acc, { char, count }) => acc + char.repeat(count), '')
}

// TLE...
const removeDuplicates2 = function (s, k) {
  const getAdjustStr = (str) => {
    const strLen = str.length
    let removeCount = 0
    let returnStr = ''
    let index = 1
    let prevStr = str[0]
    let sameCount = 1
    let accStr = prevStr
    while (index < strLen) {
      const nowStr = str[index]
      if (prevStr === nowStr) {
        sameCount += 1
        accStr += nowStr
      } else {
        sameCount = 1
        prevStr = nowStr
        returnStr += accStr
        accStr = nowStr
      }
      if (sameCount === k) {
        removeCount += 1
        prevStr = ''
        accStr = ''
        sameCount = 0
      }

      index += 1
    }
    if (accStr.length > 0) {
      returnStr += accStr
    }

    return {
      removeCount,
      returnStr,
    }
  }

  let targetStr = s
  while (true) {
    let { returnStr, removeCount } = getAdjustStr(targetStr)
    targetStr = returnStr
    if (removeCount === 0) {
      return targetStr
    }
  }
}

removeDuplicates('abcd', 2)
removeDuplicates('deeedbbcccbdaa', 3)
removeDuplicates('pbbcggttciiippooaais', 2)
