# leetcode/medium/180. Consecutive Numbers
# 180-consecutive-numbers
# URL: https://leetcode.com/problems/consecutive-numbers/


WITH ConsecutiveRows AS (SELECT id,
                                num,
                                LAG(num, 1) OVER (ORDER BY id)  AS prev_num,
                                LAG(num, 2) OVER (ORDER BY id)  AS prev_num_2,
                                LEAD(num, 1) OVER (ORDER BY id) AS next_num,
                                LEAD(num, 2) OVER (ORDER BY id) AS next_num_2
                         FROM Logs)
SELECT DISTINCT num AS ConsecutiveNums
FROM ConsecutiveRows
WHERE (num = prev_num AND num = prev_num_2)
   OR (num = prev_num AND num = next_num)
   OR (num = next_num AND num = next_num_2);
