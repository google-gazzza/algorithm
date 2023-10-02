# leetcode/easy/1965. Employees With Missing Information
# 1965-employees-with-missing-information
# URL: https://leetcode.com/problems/employees-with-missing-information/

# Input:
# Employees table:
# +-------------+----------+
# | employee_id | name     |
# +-------------+----------+
# | 2           | Crew     |
# | 4           | Haven    |
# | 5           | Kristian |
# +-------------+----------+
# Salaries table:
# +-------------+--------+
# | employee_id | salary |
# +-------------+--------+
# | 5           | 76071  |
# | 1           | 22517  |
# | 4           | 63539  |
# +-------------+--------+
# Output:
# +-------------+
# | employee_id |
# +-------------+
# | 1           |
# | 2           |
# +-------------+
# Explanation:
# Employees 1, 2, 4, and 5 are working at this company.
# The name of employee 1 is missing.
# The salary of employee 2 is missing.


-- Rows in Employees but not in Salaries
SELECT e.employee_id AS employee_id
FROM Employees e
         LEFT JOIN Salaries s ON e.employee_id = s.employee_id
WHERE s.employee_id IS NULL

UNION

-- Rows in Salaries but not in Employees
SELECT s.employee_id AS employee_id
FROM Employees e
         RIGHT JOIN Salaries s ON e.employee_id = s.employee_id
WHERE e.employee_id IS NULL

ORDER BY employee_id;
