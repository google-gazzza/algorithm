-- conditional-count
-- Conditional Count
-- difficulty: 6kyu
-- https://www.codewars.com/kata/5816a3ecf54413a113000074

SELECT extract('month' FROM payment_date)          AS month,
       count(*)                                    AS total_count,
       sum(amount)                                 AS total_amount,
       sum(CASE WHEN staff_id = 1 THEN 1 END)      AS mike_count,
       sum(CASE WHEN staff_id = 1 THEN amount END) AS mike_amount,
       sum(CASE WHEN staff_id = 2 THEN 1 END)      AS jon_count,
       sum(CASE WHEN staff_id = 2 THEN amount END) AS jon_amount
FROM payment
GROUP BY extract('month' FROM payment_date)
ORDER BY extract('month' FROM payment_date) ASC
