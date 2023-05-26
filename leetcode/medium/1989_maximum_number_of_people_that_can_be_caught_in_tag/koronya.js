// [Medium] 1989. Maximum Number of People That Can Be Caught in Tag
// 1989_maximum_number_of_people_that_can_be_caught_in_tag

// https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag
// Runtime: 824 ms, faster than 66.67% of JavaScript online submissions for Maximum Number of People That Can Be Caught in Tag.
// Memory Usage: 90.3 MB, less than 33.33% of JavaScript online submissions for Maximum Number of People That Can Be Caught in Tag.

/**
 * @param {number[]} team
 * @param {number} dist
 * @return {number}
 */
const catchMaximumAmountofPeople = function (team, dist) {
  const filteredArr = team.map((item, index) => [item, index]).filter((item) => item[0] === 1)
  const filteredArrLen = filteredArr.length
  const teamLen = team.length
  const getLeftIndex = (index) => (index - dist < 0 ? 0 : index - dist)
  const getRightIndex = (index) => (index + dist > teamLen - 1 ? teamLen - 1 : index + dist)
  let count = 0
  let prevChangeIndex = -1
  for (let i = 0; i < filteredArrLen; i += 1 || 0) {
    if (count >= filteredArrLen) {
      return filteredArrLen
    }
    const [_, index] = filteredArr[i]
    const left = Math.max(prevChangeIndex, getLeftIndex(index))
    const right = getRightIndex(index)
    for (let j = left; j <= right; j += 1 || 0) {
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

// TLE...
const catchMaximumAmountofPeople2 = function (team, dist) {
  const filteredArr = team.map((item, index) => [item, index]).filter((item) => item[0] === 1)
  const filteredArrLen = filteredArr.length
  const teamLen = team.length
  const getLeftIndex = (index) => (index - dist < 0 ? 0 : index - dist)
  const getRightIndex = (index) => (index + dist > teamLen - 1 ? teamLen - 1 : index + dist)
  let count = 0
  for (let i = 0; i < filteredArrLen; i += 1 || 0) {
    if (count >= filteredArrLen) {
      return filteredArrLen
    }
    const [_, index] = filteredArr[i]
    const left = getLeftIndex(index)
    const right = getRightIndex(index)
    for (let j = left; j <= right; j += 1 || 0) {
      if (j !== index) {
        if (team[j] === 0) {
          team[j] = 1
          count += 1
          break
        }
      }
    }
  }

  return count
}

catchMaximumAmountofPeople([0, 1, 0, 1, 0], 3)
catchMaximumAmountofPeople([0, 1, 0, 1, 1, 1, 0, 0], 1)
