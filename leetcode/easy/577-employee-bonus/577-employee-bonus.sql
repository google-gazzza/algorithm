# 577-employee-bonus
# leetcode/easy/577. Employee Bonus
# URL: https://leetcode.com/problems/employee-bonus/
#
# Employee table:
# +-------+--------+------------+--------+
# | empId | name   | supervisor | salary |
# +-------+--------+------------+--------+
# | 3     | Brad   | null       | 4000   |
# | 1     | John   | 3          | 1000   |
# | 2     | Dan    | 3          | 2000   |
# | 4     | Thomas | 3          | 4000   |
# +-------+--------+------------+--------+
# Bonus table:
# +-------+-------+
# | empId | bonus |
# +-------+-------+
# | 2     | 500   |
# | 4     | 2000  |
# +-------+-------+
# Output:
# +------+-------+
# | name | bonus |
# +------+-------+
# | Brad | null  |
# | John | null  |
# | Dan  | 500   |
# +------+-------+
#

SELECT e.name, b.bonus
FROM Employee AS e
         LEFT JOIN Bonus AS b ON e.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL;

