// [Easy] 1700. Number of Students Unable to Eat Lunch
// 1700_number_of_students_unable_to_eat_lunch

// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch
// Runtime: 80 ms, faster than 67.91% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 38.1 MB, less than 93.28% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
const countStudents = function (students, sandwiches) {
  let nextStudent
  let count = 0
  while (count < sandwiches.length) {
    nextStudent = students.shift()
    if (nextStudent === sandwiches[0]) {
      sandwiches.shift()
      count = 0
    } else {
      students.push(nextStudent)
      count += 1
    }
  }

  return sandwiches.length
}
