--https://leetcode.com/problems/rank-scores/
--Runtime: 746 ms, faster than 72.65% of Oracle online submissions for Rank Scores.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Rank Scores.
​
/* Write your PL/SQL query statement below */
​
SELECT
   Score
   ,DENSE_RANK() OVER (ORDER BY Score DESC) Rank
FROM Scores
ORDER BY Rank ASC
​
;