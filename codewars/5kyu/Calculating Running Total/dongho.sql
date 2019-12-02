--https://www.codewars.com/kata/calculating-running-total/train/sql
--PostgreSQL 9.6

SELECT -- created_at가 datetime
       CAST(created_at AS date) AS date, --  2019-11-10 날짜타입변환
       count(*) AS count,
       -- SUM OVER에서 count(*) 결과셋 0.2e 타입으로 생성되어 integer 변환
       SUM(CAST(count(*) AS integer)) OVER (ORDER BY CAST(created_at AS date))  AS total
  FROM posts 
 GROUP BY CAST(created_at AS date)
 ORDER BY CAST(created_at AS date)