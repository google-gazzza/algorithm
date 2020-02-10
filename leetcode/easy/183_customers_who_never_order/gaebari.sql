-- https://leetcode.com/problems/customers-who-never-order
-- Runtime: 966 ms, faster than 10.83% of MySQL online submissions for Customers Who Never Order.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customers Who Never Order.
# Write your MySQL query statement below
SELECT Name as Customers FROM Customers c LEFT JOIN Orders o ON c.Id = o.CustomerId WHERE o.CustomerId IS NULL;