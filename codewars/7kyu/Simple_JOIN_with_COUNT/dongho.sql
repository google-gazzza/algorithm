--https://www.codewars.com/kata/580918e24a85b05ad000010c/train/sql
--PostgreSQL 9.6

SELECT A.id, A.name, 
       (SELECT count(*) 
          FROM toys
         WHERE people_id = A.id) as toy_count
  FROM people AS A



