// [Easy] 2103. Rings and Rods
// 2103_rings_and_rods

// https://leetcode.com/problems/rings-and-rods
// Runtime: 126 ms, faster than 17.65% of TypeScript online submissions for Rings and Rods.
// Memory Usage: 40.2 MB, less than 52.94% of TypeScript online submissions for Rings and Rods.

function countPoints(rings: string): number {
  const ringsLen: number = rings.length / 2
  const rodMap = new Map<string, Set<string>>()
  for (let i: number = 0; i < ringsLen; i += 1) {
    const color = rings[2 * i]
    const position = rings[2 * i + 1]
    if (rodMap.has(position) === true) {
      rodMap.get(position)!.add(color)
    } else {
      rodMap.set(position, new Set([color]))
    }
  }
  return [...rodMap].filter((item) => item[1].size === 3).length
}

countPoints('B0B6G0R6R0R6G9') //?
countPoints('B0R0G0R9R0B0G0') //?
