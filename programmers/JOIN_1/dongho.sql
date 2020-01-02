--https://programmers.co.kr/learn/courses/30/lessons/59042
--MySQL

--천재지변으로 인해 일부 데이터가 유실되었습니다. 
--입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 
--ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

--ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블
--ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블

SELECT A.ANIMAL_ID, A.NAME
  FROM ANIMAL_OUTS  AS A 
       LEFT OUTER JOIN ANIMAL_INS AS B ON A.ANIMAL_ID = B.ANIMAL_ID
 WHERE B.ANIMAL_ID IS NULL
 ORDER BY A.ANIMAL_ID