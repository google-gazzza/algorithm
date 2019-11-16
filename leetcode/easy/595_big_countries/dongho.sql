--https://leetcode.com/problems/big-countries/submissions/
--Runtime: 937 ms, faster than 77.97% of MS SQL Server online submissions for Big Countries.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Big Countries.

SELECT name, population, area
  FROM World
 WHERE (population > 25000000 or area > 3000000)




