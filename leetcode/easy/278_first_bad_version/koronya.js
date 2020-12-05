// [Easy] 278. First Bad Version
// 278_first_bad_version

// https://leetcode.com/problems/first-bad-version
// Runtime: 76 ms, faster than 69.19% of JavaScript online submissions for First Bad Version.
// Memory Usage: 38.5 MB, less than 40.41% of JavaScript online submissions for First Bad Version.
const solution = function (isBadVersion) {
  return function (n) {
    const nSet = new Set()
    let min = n
    let first = 1
    let last = n
    while (true) {
      let num = Math.ceil((first + last) / 2)
      if (nSet.has(num)) {
        break
      }
      nSet.add(num)
      if (isBadVersion(num) === true) {
        last = num - 1
        min = Math.min(n, num)
      } else {
        first = num + 1
      }
    }

    return min
  }
}


// Runtime: 76 ms, faster than 69.19% of JavaScript online submissions for First Bad Version.
// Memory Usage: 38.4 MB, less than 40.41% of JavaScript online submissions for First Bad Version.
const solution2 = function (isBadVersion) {
  return function (n) {
    const nSet = new Set()
    const arr = []
    let first = 1
    let last = n
    while (true) {
      let num = Math.ceil((first + last) / 2)
      if (nSet.has(num)) {
        break
      }
      nSet.add(num)
      if (isBadVersion(num) === true) {
        last = num - 1
        arr.push(num)
      } else {
        first = num + 1
      }
    }

    return arr.sort((a, b) => a - b)[0]
  }
}
