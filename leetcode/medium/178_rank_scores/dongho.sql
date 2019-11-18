--https://leetcode.com/problems/rank-scores/

--Runtime: 643 ms, faster than 85.29% of MS SQL Server online submissions for Rank Scores.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rank Scores.

SELECT Score, DENSE_RANK() OVER (ORDER BY Score desc) AS Rank
  FROM Scores 
 ORDER BY Score DESC