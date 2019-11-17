--https://leetcode.com/problems/classes-more-than-5-students/submissions/

--Runtime: 993 ms, faster than 66.81% of MS SQL Server online submissions for Classes More Than 5 Students.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Classes More Than 5 Students.

SELECT A.class
  FROM (SELECT DISTINCT student, class 
          FROM  courses ) AS A 
 GROUP BY A.class
 HAVING COUNT(*) >=  5