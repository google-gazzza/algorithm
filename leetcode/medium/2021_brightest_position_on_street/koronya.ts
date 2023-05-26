// [Easy] 2021. Brightest Position on Street
// 2021_brightest_position_on_street

// https://leetcode.com/problems/brightest-position-on-street
// Runtime: 798 ms, faster than 60.00% of TypeScript online submissions for Brightest Position on Street.
// Memory Usage: 134 MB, less than 20.00% of TypeScript online submissions for Brightest Position on Street.

function brightestPosition(lights: number[][]): number {
  const brightMap = new Map<number, number>()
  lights.forEach((item) => {
    const [key, value] = item
    const positionA = key - value
    const positionB = key + value + 1
    brightMap.set(positionA, (brightMap.get(positionA) || 0) + 1)
    brightMap.set(positionB, (brightMap.get(positionB) || 0) - 1)
  })
  const brightArr = [...brightMap].sort((a, b) => a[0] - b[0])
  let maxPosition = 0
  let maxValue = 0
  let bright = 0
  for (const [key, value] of brightArr) {
    bright += value
    if (bright > maxValue) {
      maxValue = bright
      maxPosition = key
    }
  }

  return maxPosition
}

