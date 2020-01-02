--https://programmers.co.kr/learn/courses/30/lessons/59407
--MySQL
--이름이 있는 동물의 아이디
--1.NAME이 있는 동물
--2.ID오름차순

SELECT ANIMAL_ID 
  FROM ANIMAL_INS
 WHERE NAME IS NOT NULL
 ORDER BY ANIMAL_ID 