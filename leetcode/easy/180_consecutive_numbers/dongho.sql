--https://leetcode.com/problems/consecutive-numbers/submissions/
--Runtime: 701 ms, faster than 98.83% of MS SQL Server online submissions for Consecutive Numbers.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Consecutive Numbers.

SELECT DISTINCT t1.Num as ConsecutiveNums
FROM Logs t1, Logs t2, Logs t3
WHERE t1.Id = t2.Id - 1 
  AND t2.Id = t3.Id -1
  AND t1.Num = t2.Num 
  AND t2.Num = t3.Num
