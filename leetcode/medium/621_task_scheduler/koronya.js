// [Medium] 621. Task Scheduler
// 621_task_scheduler

// https://leetcode.com/problems/task-scheduler
// Runtime: 100 ms, faster than 87.29% of JavaScript online submissions for Task Scheduler.
// Memory Usage: 42.6 MB, less than 75.14% of JavaScript online submissions for Task Scheduler.

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const taskMap = new Map()
  tasks.forEach((task) => {
    taskMap.set(task, (taskMap.get(task) || 0) + 1)
  })
  const sortedTaskArr = [...taskMap].sort((a, b) => b[1] - a[1])
  const maxCount = sortedTaskArr[0][1]
  const maxCountFrequency = sortedTaskArr.filter((item) => item[1] === maxCount).length
  const candidate = (n + 1) * (maxCount - 1) + maxCountFrequency

  return Math.max(tasks.length, candidate)
}

leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2) //?
leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0) //?
leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2) //?
leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'M', 'M', 'M', 'M'], 2) //?
