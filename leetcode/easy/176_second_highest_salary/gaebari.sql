-- https://leetcode.com/problems/second-highest-salary
-- Runtime: 228 ms, faster than 94.06% of MySQL online submissions for Second Highest Salary.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Second Highest Salary.
# Write your MySQL query statement below
SELECT max(Salary) as SecondHighestSalary from Employee WHERE Salary < (SELECT max(Salary) from Employee);