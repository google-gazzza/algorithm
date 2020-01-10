--https://programmers.co.kr/learn/courses/30/lessons/59409
--MySQL
--중성화 여부 파악하기
--1.ANIMAL_ID순으로 정렬
--2.중성화여부 : 'Neutered' 또는 'Spayed' 단어가 들어가 있음

-- MySQL
SELECT ANIMAL_ID, NAME, 
       CASE WHEN SEX_UPON_INTAKE LIKE 'Neutered%' 
              OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
            ELSE 'X' END AS 중성화
 FROM ANIMAL_INS  
 ORDER BY ANIMAL_ID 
