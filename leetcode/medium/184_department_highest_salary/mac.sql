--https://leetcode.com/problems/department-highest-salary/
--Runtime: 1343 ms, faster than 54.26% of Oracle online submissions for Department Highest Salary.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Department Highest Salary.

/* Write your PL/SQL query statement below */

SELECT
    B.name Department
    ,A.name Employee
    ,A.Salary
FROM Employee A
INNER JOIN Department B
ON (A.DepartmentId = B.Id)
WHERE A.Salary = (
    SELECT 
        MAX(Salary) 
    FROM Employee
    WHERE DepartmentId = A.DepartmentId
)

;