--https://www.codewars.com/kata/5942b066db68b6f35f000084/train/sql
--Time: 1553ms Passed: 17 Failed: 0

--PostgreSQL 9.6

SELECT project, 
       commits, 
       contributors,        
       regexp_replace(address, '[0-9]', '!','g') AS address
  FROM repositories 