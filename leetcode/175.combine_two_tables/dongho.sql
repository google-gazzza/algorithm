--https://leetcode.com/problems/combine-two-tables/
--Runtime: 736 ms, faster than 82.98% of MS SQL Server online submissions for Combine Two Tables.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Combine Two Tables.

SELECT A.FirstName, A.LastName, B.City, B.State
  FROM Person AS A 
       LEFT OUTER JOIN Address AS B ON A.PersonID = B.PerSonID 
 WHERE 1=1