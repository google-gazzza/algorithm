--https://programmers.co.kr/learn/courses/30/lessons/59410
--MySQL
--NULL처리하기
--1.ID순으로 정렬
--2.NULL = 'No name'으로 처리

SELECT ANIMAL_TYPE,
       IFNULL(NAME, 'No name') AS NAME,
       SEX_UPON_INTAKE
  FROM ANIMAL_INS
 ORDER BY ANIMAL_ID