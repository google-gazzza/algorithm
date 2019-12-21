--https://www.codewars.com/kata/register-for-the-party-sql-for-beginners-number-3/train/sql
--PostgreSQL 9.6
--Time: 1457ms Passed: 10 Failed: 0

-- 참이슬 26 age 데이터 추가 : 
INSERT INTO participants VALUES('Dongho Kim', 26, 'true');
--Your code here--

SELECT name, age, attending
  FROM participants
