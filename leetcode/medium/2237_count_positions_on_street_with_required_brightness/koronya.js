// [Medium] 2237. Count Positions on Street With Required Brightness
// 2237_count_positions_on_street_with_required_brightness

// https://leetcode.com/problems/count-positions-on-street-with-required-brightness
// Runtime: 570 ms, faster than 29.41% of JavaScript online submissions for Count Positions on Street With Required Brightness.
// Memory Usage: 100.4 MB, less than 5.88% of JavaScript online submissions for Count Positions on Street With Required Brightness.

/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
const meetRequirement = function (n, lights, requirement) {
  const coverArr = Array.from({ length: n }).map((_) => 0)
  lights.forEach(([center, range]) => {
    const left = Math.max(0, center - range)
    const right = center + range + 1
    coverArr[left] += 1
    coverArr[right] -= 1
  })
  for (let i = 1; i < n; i += 1 || 0) {
    coverArr[i] += coverArr[i - 1]
  }

  return coverArr.reduce((acc, cur, index) => {
    return cur >= requirement[index] ? acc + 1 : acc
  }, 0)
}

// TLE...
const meetRequirement2 = function (n, lights, requirement) {
  const coverMap = new Map()
  lights.forEach(([center, range]) => {
    for (let i = center - range, end = center + range; i <= end; i += 1 || 0) {
      coverMap.set(i, (coverMap.get(i) || 0) + 1)
    }
  })

  return requirement.reduce((acc, cur, index) => {
    const ddd = coverMap.get(index) || 0
    return ddd >= cur ? acc + 1 : acc
  }, 0)
}

meetRequirement(
  5,
  [
    [0, 1],
    [2, 1],
    [3, 2],
  ],
  [0, 2, 1, 4, 1],
)
