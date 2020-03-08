--https://leetcode.com/problems/consecutive-numbers/
--Runtime: 1024 ms, faster than 73.86% of Oracle online submissions for Consecutive Numbers.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Consecutive Numbers.

/* Write your PL/SQL query statement below */
​
SELECT
   DISTINCT Now ConsecutiveNums
FROM
(
   SELECT
       LAG(Num) OVER (ORDER BY Id) AS Before
       ,Num Now
       ,LEAD(Num) OVER(ORDER BY Id) AS After
   FROM Logs
   ORDER BY Id
)
WHERE Now = Before
AND Now = After
​
;
​