--https://www.codewars.com/kata/580fe518cefeff16d00000c0/train/sql
--Time: 2332ms Passed: 4 Failed: 0

--PostgreSQL 9.6
CREATE FUNCTION increment(i INT) RETURNS INTEGER 
AS
  'SELECT $1 + 1'
LANGUAGE SQL;
