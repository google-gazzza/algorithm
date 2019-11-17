--https://leetcode.com/problems/customers-who-never-order/

--Runtime: 879 ms, faster than 40.54% of MS SQL Server online submissions for Customers Who Never Order.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Customers Who Never Order.

SELECT Name as Customers
  FROM Customers
 WHERE Customers.Id NOT IN(
                            SELECT CustomerId
                              FROM Customers AS A JOIN Orders AS B 
                                ON A.Id = B.CustomerId)