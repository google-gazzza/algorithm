// [Medium] 1817. Finding the Users Active Minutes
// 1817_finding_the_users_active_minutes

// https://leetcode.com/problems/finding-the-users-active-minutes
// Runtime: 388 ms, faster than 31.15% of JavaScript online submissions for Finding the Users Active Minutes.
// Memory Usage: 57.4 MB, less than 80.63% of JavaScript online submissions for Finding the Users Active Minutes.

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function (logs, k) {
  const userMap = new Map()
  const visitedMap = new Map()
  const getUserIndexSet = (userId) => {
    if (userMap.has(userId) !== true) {
      userMap.set(userId, new Set())
    }
    return userMap.get(userId)
  }
  logs.forEach((log) => {
    const [userId, index] = log
    visitedMap.set(index, (visitedMap.get(index) || 0) + 1)
    getUserIndexSet(userId).add(index)
  })

  const resultArr = Array.from({ length: k }).map((_) => 0) //?
  userMap.forEach((indexSet) => {
    const uam = indexSet.size //?
    resultArr[uam - 1] += 1
  })

  return resultArr
}

findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  5,
) //?
findingUsersActiveMinutes(
  [
    [1, 1],
    [2, 2],
    [2, 3],
  ],
  4,
) //?
