// [Medium] 621. Task Scheduler
// 621_task_scheduler

// https://leetcode.com/problems/task-scheduler
// Runtime: 104 ms, faster than 79.41% of TypeScript online submissions for Task Scheduler.
// Memory Usage: 42.9 MB, less than 82.35% of TypeScript online submissions for Task Scheduler.

function leastInterval(tasks: string[], n: number): number {
  const taskMap = new Map<string, number>()
  tasks.forEach((task) => {
    taskMap.set(task, (taskMap.get(task) || 0) + 1)
  })
  const sortedTaskArr: [string, number][] = [...taskMap].sort((a, b) => b[1] - a[1])
  const maxCount: number = sortedTaskArr[0][1]
  const maxCountFrequency: number = sortedTaskArr.filter((item) => item[1] === maxCount).length
  const candidate: number = (n + 1) * (maxCount - 1) + maxCountFrequency

  return Math.max(tasks.length, candidate)
}

leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2) //?
leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0) //?
leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2) //?
leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'M', 'M', 'M', 'M'], 2) //?
