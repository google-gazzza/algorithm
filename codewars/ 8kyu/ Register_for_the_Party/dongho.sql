--https://www.codewars.com/kata/register-for-the-party-sql-for-beginners-number-3/train/sql
--PostgreSQL 9.6
--Time: 1457ms Passed: 10 Failed: 0

-- insert 데이터 : 오른쪽이니?? 는 26짤~!~
INSERT INTO participants VALUES('IsRight', 26, 'True');
--Your code here--

SELECT name, age, attending
  FROM participants
