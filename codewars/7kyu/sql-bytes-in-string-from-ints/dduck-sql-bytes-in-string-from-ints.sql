-- https://www.codewars.com/kata/59491429952ac97ad9000106/train/sql

SELECT LENGTH(number1::varchar) AS octnum1,
       LENGTH(number2::varchar) AS octnum2,
       LENGTH(number3::varchar) AS octnum3,
       LENGTH(number4::varchar) AS octnum4,
       LENGTH(number5::varchar) AS octnum5
FROM numbers
