--https://leetcode.com/problems/exchange-seats/
--Runtime: 723 ms, faster than 42.55% of MS SQL Server online submissions for Exchange Seats.
--Memory Usage: 0B, less than 100.00% of MS SQL Server online submissions for Exchange Seats.


WITH new_seat(newid, student) 
AS (SELECT (CASE WHEN id%2 = 0 THEN id-1 
                 ELSE id+1 END) AS newid, student
      FROM seat)
SELECT RANK()OVER(ORDER BY newid) AS id, student
  FROM new_seat