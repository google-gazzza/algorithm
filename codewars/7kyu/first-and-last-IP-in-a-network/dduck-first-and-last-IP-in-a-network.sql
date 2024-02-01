-- first-and-last-IP-in-a-network
-- https://www.codewars.com/kata/5db5ff03d10bfa001da9cf2e/train/sql
-- https://www.postgresql.org/docs/9.3/functions-net.html

select id,
       text(network(ip_address))   as first_address,
       text(broadcast(ip_address)) as last_address
FROM connections;
