// [Medium] 1817. Finding the Users Active Minutes
// 1817_finding_the_users_active_minutes

// https://leetcode.com/problems/finding-the-users-active-minutes
// Runtime: 588 ms, faster than 15.00% of TypeScript online submissions for Finding the Users Active Minutes.
// Memory Usage: 70.1 MB, less than 5.00% of TypeScript online submissions for Finding the Users Active Minutes.

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */

function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const userMap = new Map<number, Set<number>>()
  const visitedMap = new Map<number, number>()
  const getUserIndexSet = (userId: number): Set<number> => {
    if (userMap.has(userId) !== true) {
      userMap.set(userId, new Set<number>())
    }
    return userMap.get(userId)!
  }
  logs.forEach((log) => {
    const [userId, index] = log
    visitedMap.set(index, (visitedMap.get(index) || 0) + 1)
    getUserIndexSet(userId)!.add(index)
  })

  const resultArr: number[] = Array.from({ length: k }).map((_) => 0)
  userMap.forEach((indexSet) => {
    const uam: number = indexSet.size //?
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
