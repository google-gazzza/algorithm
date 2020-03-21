--https://www.codewars.com/kata/594804a218e96caa8d00051b/train/sql
--Time: 2088ms Passed: 15 Failed: 0

--PostgreSQL 9.6

SELECT id, ASCII(name) AS name, birthday, ASCII(race) AS race
  FROM demographics 