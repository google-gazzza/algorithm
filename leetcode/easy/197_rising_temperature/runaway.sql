# https://leetcode.com/problems/rising-temperature/
# Runtime: 371 ms, faster than 82.35% of MySQL online submissions for Rising Temperature.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Rising Temperature.

# Write your MySQL query statement below
SELECT w1.ID FROM Weather w1
LEFT JOIN Weather w2 ON w1.RecordDate = DATE_ADD(w2.RecordDate, INTERVAL 1 DAY)
WHERE w1.Temperature > w2.Temperature;