// [Medium] 539. Minimum Time Difference
// 539_minimum_time_difference

// https://leetcode.com/problems/minimum-time-difference
// Runtime: 156 ms, faster than 25.00% of TypeScript online submissions for Minimum Time Difference.
// Memory Usage: 42.7 MB, less than 25.00% of TypeScript online submissions for Minimum Time Difference.

const transformNumber = (str: string): number => {
  const [hh, mm] = str.split(':')
  return Number(hh) * 60 + Number(mm)
}

const getDiff = (numA: number, numB: number): number => {
  const small: number = numA <= numB ? numA : numB
  const large: number = numA <= numB ? numB : numA
  return Math.min(large - small, small + 1440 - large)
}

function findMinDifference(timePoints: string[]): number {
  const timePointsLen: number = timePoints.length
  const numArr: number[] = timePoints.map((time) => transformNumber(time))
  let min: number = Number.MAX_SAFE_INTEGER

  for (let i: number = 0; i < timePointsLen; i += 1) {
    const num: number = numArr[i]
    for (let j: number = 0; j < timePointsLen; j += 1) {
      if (i !== j) {
        const diff: number = getDiff(num, numArr[j])
        if (diff === 0) {
          return 0
        }
        min = Math.min(min, diff)
      }
    }
  }
  return min
}

findMinDifference(['23:59', '00:00']) //?
findMinDifference(['00:00', '23:59', '00:00']) //?
