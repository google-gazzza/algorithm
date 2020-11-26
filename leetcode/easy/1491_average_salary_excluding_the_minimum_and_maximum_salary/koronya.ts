// [Easy] 1491. Average Salary Excluding the Minimum and Maximum Salary
// 1491_average_salary_excluding_the_minimum_and_maximum_salary

// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
// Runtime: 72 ms, faster than 94.44% of TypeScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 39.2 MB, less than 66.67% of TypeScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
function average (salary: number[]): number {
  const salaryLen: number = salary.length
  let total: number = 0
  salary.sort((a: number, b: number): number => a - b)
  for (let i: number = 1; i < salaryLen - 1; i += 1 || 0) {
    total += salary[i]
  }

  return total / (salaryLen - 2)
}
