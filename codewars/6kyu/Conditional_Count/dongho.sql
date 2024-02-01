--https://www.codewars.com/kata/5816a3ecf54413a113000074/train/sql
--Time: 1468ms Passed: 17 Failed: 0

-- Replace with your SQL Query
SELECT extract(month from payment_date) AS month,
       count(1) AS total_count,
       SUM(amount) AS total_amount,
       SUM(CASE WHEN staff_id = 1 THEN 1      ELSE 0 END) AS mike_count,
       SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) AS mike_amount,
       SUM(CASE WHEN staff_id = 2 THEN 1      ELSE 0 END) AS jon_count,
       SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) AS jon_amount        
  FROM payment 
 GROUP BY month
 ORDER BY month