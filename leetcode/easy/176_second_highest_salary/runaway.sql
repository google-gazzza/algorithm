-- https://leetcode.com/problems/second-highest-salary/
-- Runtime: 156 ms, faster than 84.68% of MySQL online submissions for Second Highest Salary.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Second Highest Salary.
# Write your MySQL query statement below
SELECT MAX(Salary) AS SecondHighestSalary FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);