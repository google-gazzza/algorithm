--https://www.codewars.com/kata/590ba881fe13cfdcc20001b4/train/sql
--PostgreSQL 9.6

--1. Ư������(Canada, Mexico, USA) ����� �����ϰ� ������ passports Check

SELECT name, country
  FROM travelers
 WHERE country not in ('Canada', 'Mexico', 'USA')