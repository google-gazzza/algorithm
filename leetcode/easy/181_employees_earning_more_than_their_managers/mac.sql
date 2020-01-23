--https://leetcode.com/problems/employees-earning-more-than-their-managers/
--Runtime: 923 ms, faster than 60.81% of Oracle online submissions for Employees Earning More Than Their Managers.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Employees Earning More Than Their Managers.

/* Write your PL/SQL query statement below */
​
SELECT
   A.NAME Employee
FROM Employee A
INNER JOIN Employee B
ON (A.ManagerId = B.Id)
WHERE A.Salary > B.Salary
​
;