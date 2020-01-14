--https://programmers.co.kr/learn/courses/30/lessons/59405
--MySQL
--상위 n개 레코드
--1.가장 먼저 들어온 동물의 이름

-- MySQL
SELECT NAME
  FROM ANIMAL_INS 
 ORDER BY DATETIME 
 LIMIT 1

-- SQL Sever 
SELECT TOP 1 NAME
  FROM ANIMAL_INS 
 ORDER BY DATETIME 
