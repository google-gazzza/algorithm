--https://leetcode.com/problems/customers-who-never-order/
--Runtime: 1116 ms, faster than 64.96% of Oracle online submissions for Customers Who Never Order.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Customers Who Never Order.
​
/* Write your PL/SQL query statement below */
​
SELECT
   Name Customers
FROM Customers
WHERE Id NOT IN (
   SELECT
       CustomerId
   FROM Orders
)
ORDER BY Id
​
;