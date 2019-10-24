--https://leetcode.com/problems/second-highest-salary/
--Runtime: 649 ms, faster than 86.56% of MS SQL Server online submissions for Second Highest Salary.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Second Highest Salary.

SELECT TOP 1 MAX(Salary) AS SecondHighestSalary
  FROM Employee
 WHERE Salary < (SELECT MAX(Salary) 
                   FROM Employee)