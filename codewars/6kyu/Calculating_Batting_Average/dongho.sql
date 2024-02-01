--https://www.codewars.com/kata/5994dafcbddc2f116d000024/train/sql
--Time: 1341ms Passed: 8 Failed: 0

SELECT player_name, 
       games AS games,       
       to_char(hits/at_bats::float, 'FM99990.000') AS batting_average
 FROM yankees 
WHERE at_bats > 100
ORDER BY 3 DESC