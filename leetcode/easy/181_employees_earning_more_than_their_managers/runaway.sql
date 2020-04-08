# https://leetcode.com/problems/employees-earning-more-than-their-managers/
# Runtime: 358 ms, faster than 83.66% of MySQL online submissions for Employees Earning More Than Their Managers.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Earning More Than Their Managers.

# Write your MySQL query statement below
SELECT e.Name AS Employee FROM Employee AS e
JOIN Employee AS m ON e.ManagerId = m.Id
WHERE e.Salary > m.Salary;