// [Easy] 1491. Average Salary Excluding the Minimum and Maximum Salary
// 1491_average_salary_excluding_the_minimum_and_maximum_salary

// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
// Runtime: 80 ms, faster than 41.32% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 38.4 MB, less than 53.68% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
const average = function(salary) {
  const salaryLen = salary.length
  let total = 0
  salary.sort((a, b) => a - b)
  for (let i = 1; i < salaryLen - 1; i += 1 || 0) {
    total += salary[i]
  }

  return total / (salaryLen - 2)
}
