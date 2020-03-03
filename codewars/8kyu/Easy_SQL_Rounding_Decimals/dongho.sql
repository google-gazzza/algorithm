--https://www.codewars.com/kata/594a6133704e4daf5d00003d/train/sql
--Time: 1737ms Passed: 11 Failed: 0

--1. 문제 설명이 제대로 되어 있지 않음.
--2. ROUND로 혼동을 주는 문제 / Test Case로 올림과 버림문제로 확인하여 처리

SELECT FLOOR(number1) AS number1, 
       CEIL(number2) AS number2 
  FROM decimals
