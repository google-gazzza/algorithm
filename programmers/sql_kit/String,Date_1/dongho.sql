--https://programmers.co.kr/learn/courses/30/lessons/59046
--MySQL
--루시와 엘라 찾기
--1.ANIMAL_ID순으로 정렬
--2.Name이 'Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty'만 찾기

-- MySQL
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
  FROM ANIMAL_INS 
 WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty' )
 ORDER BY ANIMAL_ID
