--https://www.codewars.com/kata/sql-basics-simple-union-all/train/sql

SELECT 'EU' AS location,
       id,
       name,
       price,
       card_name,
       card_number,
       transaction_date
  FROM eusales
 WHERE price > 50.00
  
 UNION ALL
 
 SELECT 'US' AS location,
        id,
        name,
        price,
        card_name,
        card_number,
        transaction_date
   FROM ussales
  WHERE price > 50.00
  ORDER BY  transaction_date