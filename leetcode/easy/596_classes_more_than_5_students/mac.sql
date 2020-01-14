--https://leetcode.com/problems/classes-more-than-5-students/
--Runtime: 783 ms, faster than 75.33% of Oracle online submissions for Classes More Than 5 Students.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Classes More Than 5 Students.

/* Write your PL/SQL query statement below */

SELECT 
    class
FROM courses
GROUP BY class
HAVING COUNT(DISTINCT student) > 4

;