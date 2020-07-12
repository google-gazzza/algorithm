// [Medium] 207. Course Schedule
// 207_course_schedule

// https://leetcode.com/problems/course-schedule
// Runtime: 72 ms, faster than 96.27% of JavaScript online submissions for Course Schedule.
// Memory Usage: 40.3 MB, less than 65.68% of JavaScript online submissions for Course Schedule.
const canFinish = (numCourses, prerequisites) => {
  const preMap = new Map()
  const visitedSet = new Set()
  const pathSet = new Set()
  const check = (num) => {
    if (!preMap.has(num)) {
      return true
    }
    if (pathSet.has(num)) {
      return false
    }
    pathSet.add(num)

    for (let pre of preMap.get(num)) {
      if (visitedSet.has(pre)) {
        continue
      }
      if (pathSet.has(pre) || !check(pre)) {
        return false
      }
    }
    pathSet.delete(num)
    visitedSet.add(num)
    return true
  }

  prerequisites.forEach(item => {
    const [course, pre] = item
    if (preMap.has(course)) {
      preMap.get(course).push(pre)
    } else {
      preMap.set(course, [pre])
    }
  })

  for (let i = 0; i < numCourses; i = i + 1 | 0) {
    if (check(i) === false) {
      return false
    }
  }
  return true
}
