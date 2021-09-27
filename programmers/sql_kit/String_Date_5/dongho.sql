--https://programmers.co.kr/learn/courses/30/lessons/59414
--MySQL
--DATETIME에서 DATE로 형변환
--1.ANIMAL_ID순으로 정렬

-- MySQL
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS 날짜
 FROM ANIMAL_INS  
ORDER BY ANIMAL_ID



