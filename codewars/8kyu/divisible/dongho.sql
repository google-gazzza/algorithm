--https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/sql
--PostgreSQL 9.6

--Is n divisible by x and y
--1. n, x, y는 양수
--2. n을 x,y로 둘다 나눌 수 있으면 true, 아니면 false

-- true, false을 문자형로 반환하여 Test Case 넘어가지 못하여 고생함.
select id, 
       CASE WHEN n%x = 0 AND n%y = 0  THEN true
            ELSE false END AS res
  from kata
