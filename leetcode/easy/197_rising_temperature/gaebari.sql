--  https://leetcode.com/problems/rising-temperature
--  Runtime: 804 ms, faster than 33.50% of MySQL online submissions for Rising Temperature.
--  Memory Usage: 0B, less than 100.00% of MySQL online submissions for Rising Temperature.
--  Write your MySQL query statement below
SELECT w1.Id FROM Weather w1, Weather w2
WHERE subdate(w1.RecordDate, 1)=w2.RecordDate AND w1.Temperature>w2.Temperature
