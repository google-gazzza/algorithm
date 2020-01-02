--https://programmers.co.kr/learn/courses/30/lessons/59413?language=mysql
--입양 시각 구하기(2)

SET @Hour = -1;

SELECT (@Hour := @Hour +1) AS HOUR,
       (
         SELECT COUNT(*)
         FROM ANIMAL_OUTS
         WHERE HOUR(DATETIME) = @Hour
        ) AS COUNT
FROM ANIMAL_OUTS
WHERE @Hour < 23
