-- https://leetcode.com/problems/employees-earning-more-than-their-managers
-- Runtime: 864 ms, faster than 23.42% of MySQL online submissions for Employees Earning More Than Their Managers.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Earning More Than Their Managers.
# Write your MySQL query statement below
SELECT e.Name as Employee FROM Employee e LEFT JOIN Employee e2 ON e.ManagerId = e2.Id WHERE e2.Salary < e.Salary;