// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time
// Runtime: 68 ms, faster than 61.82% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 33.2 MB, less than 97.48% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
const busyStudent = (startTime, endTime, queryTime) => {
  let count = 0
  const timeLen = startTime.length
  for (let i = 0; i < timeLen; i = i + 1 | 0) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count += 1
    }
  }
  return count
}
