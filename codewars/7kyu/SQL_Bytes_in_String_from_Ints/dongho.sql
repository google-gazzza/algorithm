--https://www.codewars.com/kata/59491429952ac97ad9000106/train/sql
--Time: 2440ms Passed: 18 Failed: 0

--PostgreSQL 9.6

-- octet_length : 문자열 바이트수
-- char_length  : 문자열 문자 수
-- bit_length   : 문자열 비트수


SELECT octet_length(number1::TEXT) AS octnum1,
       octet_length(number2::TEXT) AS octnum2,
       octet_length(number3::TEXT) AS octnum3,
       octet_length(number4::TEXT) AS octnum4,
       octet_length(number5::TEXT) AS octnum5
  FROM numbers 