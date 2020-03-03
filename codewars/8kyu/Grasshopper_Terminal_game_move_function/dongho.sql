--https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/sql
--Time: 1525ms Passed: 103 Failed: 0

--1.현재위치에서 주사위 두번 돌린 후 이동한 위치 확인하기

SELECT position + roll*2 AS res
  FROM moves
