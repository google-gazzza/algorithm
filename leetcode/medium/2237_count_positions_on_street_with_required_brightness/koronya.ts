// [Medium] 2237. Count Positions on Street With Required Brightness
// 2237_count_positions_on_street_with_required_brightness

// https://leetcode.com/problems/count-positions-on-street-with-required-brightness
// Runtime: 521 ms, faster than 20.00% of TypeScript online submissions for Count Positions on Street With Required Brightness.
// Memory Usage: 94 MB, less than 20.00% of TypeScript online submissions for Count Positions on Street With Required Brightness.

function meetRequirement(n: number, lights: number[][], requirement: number[]): number {
  const coverArr = Array.from({ length: n }).map((_) => 0)
  lights.forEach(([center, range]) => {
    const left = Math.max(0, center - range)
    const right = center + range + 1
    coverArr[left] += 1
    coverArr[right] -= 1
  })
  for (let i: number = 1; i < n; i += 1) {
    coverArr[i] += coverArr[i - 1]
  }

  return coverArr.reduce((acc, cur, index) => {
    return cur >= requirement[index] ? acc + 1 : acc
  }, 0)
}
