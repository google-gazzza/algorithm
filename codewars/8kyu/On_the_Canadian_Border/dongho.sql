--https://www.codewars.com/kata/590ba881fe13cfdcc20001b4/train/sql
--PostgreSQL 9.6

--1. 특정나라(Canada, Mexico, USA) 사람을 제외하고 여행자 passports Check

SELECT name, country
  FROM travelers
 WHERE country not in ('Canada', 'Mexico', 'USA')