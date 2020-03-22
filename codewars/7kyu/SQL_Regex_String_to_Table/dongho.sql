--https://www.codewars.com/kata/59413d53f5c3947364000016/train/sql
--Time: 1476ms Passed: 9 Failed: 0

--PostgreSQL 9.6
SELECT regexp_split_to_table(text,'[a,e,i,o,u]') AS results
  FROM random_string