# https://leetcode.com/problems/classes-more-than-5-students/
# Runtime: 340 ms, faster than 50.67% of MySQL online submissions for Classes More Than 5 Students.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Classes More Than 5 Students.

# Write your MySQL query statement below
SELECT class FROM (
    SELECT DISTINCT * FROM courses
) c
GROUP BY class
HAVING COUNT(student) >= 5;