--https://programmers.co.kr/learn/courses/30/lessons/59414
--MySQL
--DATETIME���� DATE�� ����ȯ
--1.ANIMAL_ID������ ����

-- MySQL
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS ��¥
 FROM ANIMAL_INS  
ORDER BY ANIMAL_ID



