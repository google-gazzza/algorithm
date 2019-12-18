--https://www.codewars.com/kata/594a50bafd3b7031c1000013/train/sql
--PostgreSQL 9.6

-- 16진수로 변경
SELECT to_hex(legs) as  legs,
       to_hex(arms) AS  arms
  FROM monsters
