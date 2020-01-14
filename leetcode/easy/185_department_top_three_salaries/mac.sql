--https://leetcode.com/problems/department-top-three-salaries/
--Runtime: 1384 ms, faster than 96.25% of Oracle online submissions for Department Top Three Salaries.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Department Top Three Salaries.

/* Write your PL/SQL query statement below */

SELECT 
    A.Department
    ,A.Employee
    ,A.Salary
FROM (
    SELECT 
        D.Name Department 
        ,E.Name Employee
        ,E.Salary Salary
        ,DENSE_RANK() OVER (PARTITION BY D.Name ORDER BY E.Salary DESC) Rank
    FROM Employee E
    INNER JOIN Department D 
    ON (E.DepartmentId = D.Id)
) A
WHERE A.Rank < 4

;

