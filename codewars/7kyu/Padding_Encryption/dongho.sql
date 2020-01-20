--https://www.codewars.com/kata/5943b797d8c9432eb7000066/train/sql
--Time: 1550ms Passed: 14 Failed: 0
-- 1. sha256길이만큼 md5 뒤에 1 넣기
-- 2. sha256길이만큼 sh1 앞에 0 넣기

--PostgreSQL 9.6
SELECT md5 || repeat('1',length(sha256)-length(md5)) as md5, 
       repeat('0',length(sha256)-length(sha1)) || sha1 AS sha1, 
       sha256
  FROM encryption