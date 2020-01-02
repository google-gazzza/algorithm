--https://programmers.co.kr/learn/courses/30/lessons/59408
--MySql
--SUM, MAX, MIN 최댓값 구하기
--중복 제거하기

SELECT COUNT(*)
  FROM (SELECT DISTINCT NAME
          FROM ANIMAL_INS 
         WHERE NAME IS NOT NULL) AS A 