--https://leetcode.com/problems/employees-earning-more-than-their-managers/

--Runtime: 851 ms, faster than 60.09% of MS SQL Server online submissions for Employees Earning More Than Their Managers.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Employees Earning More Than Their Managers.

SELECT A.Name AS Employee
  FROM Employee AS A
     LEFT OUTER JOIN Employee AS B on A.ManagerId  = B.Id 
 WHERE A.Salary  > B.Salary