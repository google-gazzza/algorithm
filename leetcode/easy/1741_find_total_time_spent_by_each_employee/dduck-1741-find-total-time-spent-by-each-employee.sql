/*
1741_find_total_time_spent_by_each_employee

# leetcode/easy/1741. Find Total Time Spent by Each Employee
Difficulty: easy
URL: https://leetcode.com/problems/find-total-time-spent-by-each-employee/
Tags:

## Approach

### en

### kr

## Solution
### SQL

*/

SELECT e.event_day                 AS day,
       e.emp_id,
       SUM(e.out_time - e.in_time) AS total_time
FROM Employees as e
GROUP BY e.event_day, e.emp_id
ORDER BY e.event_day
