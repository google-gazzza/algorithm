--https://www.codewars.com/kata/sql-basics-simple-join-and-rank/train/sql
--PostgreSQL 9.6

SELECT A.id, 
       A.name, 
       B.count   AS sale_count,
       B.ranking AS sale_rank
  FROM people AS A
       LEFT OUTER JOIN (SELECT people_id AS people_id, 
                               COUNT(*)  AS count, 
                               RANK() OVER (ORDER BY COUNT(*) DESC) AS ranking
                          FROM sales 
                         GROUP BY people_id) AS B on A.id = B.people_id