--https://www.codewars.com/kata/5ab7a736edbcfc8e62000007/train/sql
--Time: 1611ms Passed: 11 Failed: 0

--PostgreSQL 9.6
SELECT A.senshi_name   AS sailor_senshi, 
       A.real_name_jpn AS real_name, 
       C.school AS school, 
       B.name AS cat
  FROM sailorsenshi AS A 
       LEFT OUTER JOIN cats     AS B ON A.cat_id = B.id
       LEFT OUTER JOIN schools  AS C ON A.school_id = C.id 