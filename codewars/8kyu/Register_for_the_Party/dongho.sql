--https://www.codewars.com/kata/register-for-the-party-sql-for-beginners-number-3/train/sql
--PostgreSQL 9.6
--Time: 1457ms Passed: 10 Failed: 0

-- ÂüÀÌ½½ 26Â©~!~
INSERT into participants Values('donghokim', 26, 'true');
--Your code here--

SELECT name, age, attending
  FROM participants