--https://programmers.co.kr/learn/courses/30/lessons/59044
--MySQL

--아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을
--조회하는 SQL문을 작성해주세요. 
--이때 결과는 보호 시작일 순으로 조회해야 합니다.

--ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블
--ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블

SELECT A.NAME, A.DATETIME
  FROM ANIMAL_INS  AS A 
       LEFT OUTER JOIN ANIMAL_OUTS AS B ON A.ANIMAL_ID = B.ANIMAL_ID
 WHERE B.ANIMAL_ID IS NULL 
 ORDER BY A.DATETIME 
 LIMIT 3