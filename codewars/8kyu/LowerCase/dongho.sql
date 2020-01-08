--https://www.codewars.com/kata/easy-sql-lowercase/train/sql
--PostgreSQL 9.6

-- 1. race를 소문자로 반환
SELECT id, name, birthday, lower(race) as race
  FROM demographics

