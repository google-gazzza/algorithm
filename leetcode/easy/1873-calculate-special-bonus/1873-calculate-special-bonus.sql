"""
1873-calculate-special-bonus
leetcode/easy/1873. Calculate Special Bonus
Difficulty: easy
URL: https://leetcode.com/problems/calculate-special-bonus/
"""
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | employee_id | int     |
-- | name        | varchar |
-- | salary      | int     |
-- +-------------+---------+

SELECT e.employee_id,
       CASE
           WHEN (e.employee_id % 2 = 1
                     AND e.name NOT LIKE 'M%')
               THEN e.salary
           ELSE 0
           END
           AS bonus
FROM Employees AS e
