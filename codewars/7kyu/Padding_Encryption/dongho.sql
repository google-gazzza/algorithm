--https://www.codewars.com/kata/5943b797d8c9432eb7000066/train/sql
--Time: 1550ms Passed: 14 Failed: 0
-- 1. sha256���̸�ŭ md5 �ڿ� 1 �ֱ�
-- 2. sha256���̸�ŭ sh1 �տ� 0 �ֱ�

--PostgreSQL 9.6
SELECT md5 || repeat('1',length(sha256)-length(md5)) as md5, 
       repeat('0',length(sha256)-length(sha1)) || sha1 AS sha1, 
       sha256
  FROM encryption