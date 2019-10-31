--https://leetcode.com/problems/rising-temperature/ 
--Runtime: 662 ms, faster than 94.60% of MS SQL Server online submissions for Rising Temperature.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Rising Temperature.

SELECT A.Id
  FROM Weather AS A LEFT OUTER JOIN Weather AS B ON A.RecordDate = DATEADD(dd,+1,B.RecordDate)
 WHERE A.Temperature > B.Temperature
