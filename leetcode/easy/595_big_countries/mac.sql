--https://leetcode.com/problems/big-countries/
--Runtime: 672 ms, faster than 85.16% of Oracle online submissions for Big Countries.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Big Countries.

/* Write your PL/SQL query statement below */

SELECT 
    name
    ,population
    ,area
FROM World
WHERE area > 3000000 
OR population > 25000000

;