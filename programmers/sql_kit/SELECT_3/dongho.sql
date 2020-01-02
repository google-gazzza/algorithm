--https://programmers.co.kr/learn/courses/30/lessons/59036
--MySQL
--아픈동물찾기
--1.ID순으로 정렬
--2.아픈 동물

SELECT ANIMAL_ID, NAME
  FROM ANIMAL_INS 
 WHERE INTAKE_CONDITION = 'Sick'
 ORDER BY ANIMAL_ID