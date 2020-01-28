--https://www.codewars.com/kata/5a8ec692b17101bfc70001ba/train/sql
--Time: 3315ms Passed: 7 Failed: 0

--1. producer에게 산 유니크한 물건
--2. 정렬순서

SELECT count(*) AS unique_products, producer 
  FROM products 
 GROUP BY producer
 ORDER BY unique_products DESC, producer ASC