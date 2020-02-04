--https://www.codewars.com/kata/5ac698cdd325ad18a3000170/train/sql
--Time: 2321ms Passed: 8 Failed: 0

--PostgreSQL 9.6
SELECT A.name, 
       SUM(won) AS won, 
       SUM(lost) AS lost
  FROM fighters AS A 
       JOIN winning_moves AS B ON A.move_id = B.id
 WHERE B.move NOT IN('Hadoken', 'Shouoken', 'Kikoken')
 GROUP BY A.name
 ORDER BY won desc
 LIMIT 6 