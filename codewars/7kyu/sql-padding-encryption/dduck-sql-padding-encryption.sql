-- https://www.codewars.com/kata/5943b797d8c9432eb7000066/train/sql
-- LPAD - https://www.postgresqltutorial.com/postgresql-string-functions/postgresql-lpad/


SELECT RPAD(md5, length(sha256), '1')  md5,
       LPAD(sha1, length(sha256), '0') sha1,
       sha256
FROM encryption
