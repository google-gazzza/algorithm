--https://programmers.co.kr/learn/courses/30/lessons/59037#fn1
--MySQL
--어린동물찾기
--1.ID순으로 정렬
--2.INTAKE_CONDITION가 Aged가 아닌 동물

SELECT ANIMAL_ID, NAME
  FROM ANIMAL_INS 
 WHERE INTAKE_CONDITION <> 'Aged'
 ORDER BY ANIMAL_ID