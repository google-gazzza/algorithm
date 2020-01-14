--https://leetcode.com/problems/rising-temperature/
--Runtime: 1154 ms, faster than 36.11% of Oracle online submissions for Rising Temperature.
--Memory Usage: 0B, less than 100.00% of Oracle online submissions for Rising Temperature.

/* Write your PL/SQL query statement below */

SELECT 
    A.Id 
FROM Weather A
INNER JOIN Weather B
ON (TO_DATE(A.RecordDate) = TO_DATE(B.RecordDate)+1)
WHERE A.Temperature > B.Temperature

;