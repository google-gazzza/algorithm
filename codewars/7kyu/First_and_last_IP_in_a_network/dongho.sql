--https://www.codewars.com/kata/5db5ff03d10bfa001da9cf2e/train/sql
--Time: 1485ms Passed: 8 Failed: 0

--PostgreSQL 9.6
SELECT id, 
       network(ip_address)   AS first_address, 
       broadcast(ip_address) AS last_address 
  FROM connections 
 ORDER BY id



