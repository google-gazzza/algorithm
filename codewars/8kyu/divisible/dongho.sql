--https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/sql
--PostgreSQL 9.6

--Is n divisible by x and y
--1. n, x, y�� ���
--2. n�� x,y�� �Ѵ� ���� �� ������ true, �ƴϸ� false

-- true, false�� �������� ��ȯ�Ͽ� Test Case �Ѿ�� ���Ͽ� �����.
select id, 
       CASE WHEN n%x = 0 AND n%y = 0  THEN true
            ELSE false END AS res
  from kata
