// [Medium] 1376. Time Needed to Inform All Employees
// 1376_time_needed_to_inform_all_employees

// https://leetcode.com/problems/time-needed-to-inform-all-employees
// Runtime: 400 ms, faster than 34.19% of JavaScript online submissions for Time Needed to Inform All Employees.
// Memory Usage: 75.9 MB, less than 31.94% of JavaScript online submissions for Time Needed to Inform All Employees.

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
  const timeMap = new Map()
  const managerMap = new Map()
  timeMap.set(headID, informTime[headID])
  let targetIdArr = [headID]
  let maxValue = informTime[headID]
  manager.forEach((item, index) => {
    if (managerMap.has(item)) {
      managerMap.get(item).push(index)
    } else {
      managerMap.set(item, [index])
    }
  })

  let count = 1
  while (count < n) {
    const newTargetIdArr = []
    targetIdArr.forEach((targetId) => {
      if (managerMap.has(targetId) === true) {
        managerMap.get(targetId).forEach((item) => {
          count += 1
          newTargetIdArr.push(item)
          const newValue = timeMap.get(targetId) + informTime[item]
          maxValue = Math.max(maxValue, newValue)
          timeMap.set(item, newValue)
        })
      }
    })
    targetIdArr = newTargetIdArr
  }

  return maxValue
}

// TLE...
const numOfMinutes2 = function (n, headID, manager, informTime) {
  let count = 1
  const timeMap = new Map()
  timeMap.set(headID, informTime[headID])
  let targetIdArr = [headID]
  let maxValue = informTime[headID]

  while (count < n) {
    const newTargetIdArr = []
    manager.forEach((item, index) => {
      if (targetIdArr.includes(item)) {
        newTargetIdArr.push(index)
        count += 1
        const newValue = timeMap.get(item) + informTime[index]
        maxValue = Math.max(maxValue, newValue)
        timeMap.set(index, newValue)
      }
    })
    targetIdArr = newTargetIdArr
  }

  return maxValue
}

// numOfMinutes(1, 0, [-1], [0]) //?
// numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]) //?
// numOfMinutes(7, 6, [1, 2, 3, 4, 5, 6, -1], [0, 6, 5, 4, 3, 2, 1]) //?
// numOfMinutes(15, 0, [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]) //?
// numOfMinutes(4, 2, [3, 3, -1, 2], [0, 0, 162, 914]) //?
numOfMinutes(11, 4, [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4], [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337]) //?
