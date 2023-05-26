// [Medium] 1989. Maximum Number of People That Can Be Caught in Tag
// 1989_maximum_number_of_people_that_can_be_caught_in_tag

// https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag
// Runtime: 1594 ms, faster than 100.00% of TypeScript online submissions for Maximum Number of People That Can Be Caught in Tag.
// Memory Usage: 107.8 MB, less than 100.00% of TypeScript online submissions for Maximum Number of People That Can Be Caught in Tag.

function catchMaximumAmountofPeople(team: number[], dist: number): number {
  const filteredArr: number[][] = team.map((item, index) => [item, index]).filter((item) => item[0] === 1)
  const filteredArrLen = filteredArr.length
  const teamLen = team.length
  const getLeftIndex = (index: number): number => (index - dist < 0 ? 0 : index - dist)
  const getRightIndex = (index: number): number => (index + dist > teamLen - 1 ? teamLen - 1 : index + dist)
  let count: number = 0
  let prevChangeIndex: number = -1
  for (let i: number = 0; i < filteredArrLen; i += 1) {
    if (count >= filteredArrLen) {
      return filteredArrLen
    }
    const [_, index] = filteredArr[i]
    const left = Math.max(prevChangeIndex, getLeftIndex(index))
    const right = getRightIndex(index)
    for (let j: number = left; j <= right; j += 1) {
      if (j !== index) {
        if (team[j] === 0) {
          team[j] = 1
          count += 1
          prevChangeIndex = j
          break
        }
      }
    }
  }

  return count
}
