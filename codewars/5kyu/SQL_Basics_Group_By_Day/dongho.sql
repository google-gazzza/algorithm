--https://www.codewars.com/kata/5811597e9d278beb04000038/train/sql
--Time: 1890ms Passed: 10 Failed: 0

--PostgreSQL 9.6
SELECT date(created_at) AS day, 
       description      AS description, 
       COUNT(*)         AS count
  FROM events
 WHERE name = 'trained'
 GROUP BY date(created_at), description