--https://programmers.co.kr/learn/courses/30/lessons/59047
--MySQL
--이름에 el이 들어가는 동물찾기
--1.NAme순으로 정렬
--2.Name중 el이 들어간 Dog만 찾기

-- MySQL
SELECT ANIMAL_ID, NAME
 FROM ANIMAL_INS  
WHERE Name LIKE '%el%' 
  AND ANIMAL_TYPE = 'Dog'
 ORDER BY Name 
