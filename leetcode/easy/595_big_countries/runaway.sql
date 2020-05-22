# https://leetcode.com/problems/big-countries/
# Runtime: 234 ms, faster than 85.64% of MySQL online submissions for Big Countries.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.

# Write your MySQL query statement below
SELECT name, population, area FROM World
WHERE population > 25000000 OR area > 3000000;