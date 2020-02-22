--https://www.codewars.com/kata/5811315e04adbbdb5000050e/train/sql
--Time: 2181ms Passed: 11 Failed: 0

--PostgreSQL 9.6
SELECT id, 
       COALESCE(NULLIF(name,''), '[product name not found]') AS name, 
       price AS price, 
       COALESCE(NULLIF(card_name,''),'[card name not found]') AS card_name,
       card_number, 
       transaction_date
  FROM eusales 
 WHERE price > 50.00