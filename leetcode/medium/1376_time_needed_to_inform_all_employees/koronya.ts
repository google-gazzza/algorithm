// [Medium] 1376. Time Needed to Inform All Employees
// 1376_time_needed_to_inform_all_employees

// https://leetcode.com/problems/time-needed-to-inform-all-employees
// Runtime: 400 ms, faster than 25.00% of TypeScript online submissions for Time Needed to Inform All Employees.
// Memory Usage: 76.2 MB, less than 25.00% of TypeScript online submissions for Time Needed to Inform All Employees.

function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  const timeMap = new Map<number, number>()
  const managerMap = new Map<number, number[]>()
  timeMap.set(headID, informTime[headID])
  let targetIdArr: number[] = [headID]
  let maxValue: number = informTime[headID]
  manager.forEach((item, index) => {
    if (managerMap.has(item)) {
      managerMap.get(item)!.push(index)
    } else {
      managerMap.set(item, [index])
    }
  })

  let count: number = 1
  while (count < n) {
    const newTargetIdArr: number[] = []
    targetIdArr.forEach((targetId) => {
      if (managerMap.has(targetId) === true) {
        managerMap.get(targetId)!.forEach((item) => {
          count += 1
          newTargetIdArr.push(item)
          const newValue: number = timeMap.get(targetId)! + informTime[item]
          maxValue = Math.max(maxValue, newValue)
          timeMap.set(item, newValue)
        })
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
