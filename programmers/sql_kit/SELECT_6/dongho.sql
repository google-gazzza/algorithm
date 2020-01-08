--https://programmers.co.kr/learn/courses/30/lessons/59404
--MySQL
--여러 기준으로 정렬하기
--1.NAME순으로 정렬
--2.NAME이 같으면 보호일 나중순

SELECT ANIMAL_ID, NAME, DATETIME
  FROM ANIMAL_INS 
 ORDER BY NAME, DATETIME DESC