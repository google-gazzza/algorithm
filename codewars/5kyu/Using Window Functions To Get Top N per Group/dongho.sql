--https://www.codewars.com/kata/582001237a3a630ce8000a41/train/sql
--Time: 2343ms Passed: 15 Failed: 0

-- PostgreSQL 9.6
SELECT A.id       AS category_id, 
       A.category AS category, 
       B.title    AS title, 
       B.views    AS views, 
       B.id       AS post_id
  FROM categories AS A 
       LEFT OUTER JOIN (
                         SELECT RANK() OVER(PARTITION BY category_id ORDER BY Views DESC, id) AS Cnt,
                                category_id  AS category_id, 
                                title        AS title,
                                views        AS views,
                                id           AS id
                           FROM posts
                         ) AS B ON A.id = B.category_id  
 WHERE B.Cnt <= 2     -- 카테고리별 2row이하
    OR B.id  IS NULL  -- Posts에 데이터 없는 경우
 ORDER BY a.category, B.Views DESC, B.id 
