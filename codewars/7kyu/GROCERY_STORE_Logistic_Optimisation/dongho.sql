--https://www.codewars.com/kata/5a8ec692b17101bfc70001ba/train/sql
--Time: 3315ms Passed: 7 Failed: 0

--1. producer���� �� ����ũ�� ����
--2. ���ļ���

SELECT count(*) AS unique_products, producer 
  FROM products 
 GROUP BY producer
 ORDER BY unique_products DESC, producer ASC