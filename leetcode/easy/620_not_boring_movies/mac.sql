--https://leetcode.com/problems/not-boring-movies/submissions/
--Runtime: 718 ms, faster than 88.73% of Oracle online submissions for Not Boring Movies.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Not Boring Movies.

/* Write your PL/SQL query statement below */

SELECT 
    * 
FROM cinema
WHERE MOD(id, 2) = 1
AND description <> 'boring'
ORDER BY rating DESC

;