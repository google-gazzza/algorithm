--https://programmers.co.kr/learn/courses/30/lessons/59043
--MySQL

--관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 
--보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 
--이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.

--ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블
--ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블

SELECT A.ANIMAL_ID, A.NAME
  FROM ANIMAL_INS   AS A 
       LEFT OUTER JOIN ANIMAL_OUTS AS B ON A.ANIMAL_ID = B.ANIMAL_ID
 WHERE A.DATETIME > B.DATETIME
 ORDER BY A.DATETIME