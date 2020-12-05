// [Easy] 278. First Bad Version
// 278_first_bad_version

// https://leetcode.com/problems/first-bad-version
// Runtime: 80 ms, faster than 79.25% of TypeScript online submissions for First Bad Version.
// Memory Usage: 39.3 MB, less than 16.98% of TypeScript online submissions for First Bad Version.
const solution = function (isBadVersion: any) {
  return function(n: number): number {
    const nSet = new Set<number>()
    let min: number = n
    let first: number = 1
    let last: number = n
    while (true) {
      let num: number = Math.ceil((first + last) / 2)
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
