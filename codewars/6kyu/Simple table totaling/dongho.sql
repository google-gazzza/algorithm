--https://www.codewars.com/kata/5809575e166583acfa000083/train/sql
--PostgreSQL 9.6
-- Simple table totaling

--1. clan name이 공백으로 들어오는 test case처리
--2. 랭킹은 클랜순서대로 나오게 처리
--3. rank순으로 정렬

SELECT DENSE_RANK() OVER (ORDER BY SUM(points) desc) AS rank,
       (CASE WHEN COALESCE(clan, '') ='' THEN '[no clan specified]' ELSE clan END) AS clan,
       SUM(points) AS total_points,
       COUNT(clan) AS total_people
  FROM people 
 GROUP BY (CASE WHEN COALESCE(clan, '') = '' THEN '[no clan specified]'  ELSE clan END)
 ORDER BY DENSE_RANK() OVER (ORDER BY SUM(points) DESC)


