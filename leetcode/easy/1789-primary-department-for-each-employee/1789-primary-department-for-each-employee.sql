-- // 1789-primary-department-for-each-employee
-- // URL: https://leetcode.com/problems/primary-department-for-each-employee/description/
--
--

-- Input:
-- Employee table:
-- +-------------+---------------+--------------+
-- | employee_id | department_id | primary_flag |
-- +-------------+---------------+--------------+
-- | 1           | 1             | N            |
-- | 2           | 1             | Y            |
-- | 2           | 2             | N            |
-- | 3           | 3             | N            |
-- | 4           | 2             | N            |
-- | 4           | 3             | Y            |
-- | 4           | 4             | N            |
-- +-------------+---------------+--------------+
-- Output:
-- +-------------+---------------+
-- | employee_id | department_id |
-- +-------------+---------------+
-- | 1           | 1             |
-- | 2           | 1             |
-- | 3           | 3             |
-- | 4           | 3             |
-- +-------------+---------------+
SELECT employee_id, department_id
FROM Employee
WHERE primary_flag = 'Y'
   OR employee_id IN (SELECT employee_id
                      FROM Employee
                      GROUP BY employee_id
                      HAVING COUNT(employee_id) = 1)
