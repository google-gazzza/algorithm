--https://programmers.co.kr/learn/courses/30/lessons/59039
--MySQL
--이름이 없는 동물의 아이디
--1.NAME이 없는 동물
--2.ID오름차순

SELECT ANIMAL_ID 
  FROM ANIMAL_INS
 WHERE NAME IS NULL
 ORDER BY ANIMAL_ID 