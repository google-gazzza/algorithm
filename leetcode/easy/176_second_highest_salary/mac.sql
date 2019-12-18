-- https://leetcode.com/problems/second-highest-salary/
-- Runtime: 649 ms, faster than 73.30% of Oracle online submissions for Second Highest Salary.
-- Memory Usage: 0B, less than 100.00% of Oracle online submissions for Second Highest Salary.

/* Write your PL/SQL query statement below */

SELECT
    MAX(Salary) AS SecondHighestSalary
FROM (
    SELECT 
        Salary
        ,RANK() OVER (ORDER BY Salary DESC) RN
    FROM Employee 
)
WHERE RN <> 1

;