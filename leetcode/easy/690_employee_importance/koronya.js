// [Easy] 690. Employee Importance
// 690_employee_importance

// https://leetcode.com/problems/employee-importance/
// Runtime: 80 ms, faster than 93.79% of JavaScript online submissions for Employee Importance.
// Memory Usage: 39.2 MB, less than 67.93% of JavaScript online submissions for Employee Importance.
const GetImportance = (employees, id) => {
  const empMap = new Map()
  employees.forEach(employee => {
    empMap.set(employee.id, employee)
  })
  let total = 0
  const empStack = [empMap.get(id)]
  while (empStack.length > 0) {
    const {importance, subordinates} = empStack.pop()
    total += importance
    empStack.push(...subordinates.map(id => empMap.get(id)))
  }

  return total
}
