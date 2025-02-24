# leetcode/medium/1831. Maximum Transaction Each Day
# 1831-maximum-transaction-each-day
# URL: https://leetcode.com/problems/maximum-transaction-each-day/

# Input:
# Transactions table:
# +----------------+--------------------+--------+
# | transaction_id | day                | amount |
# +----------------+--------------------+--------+
# | 8              | 2021-4-3 15:57:28  | 57     |
# | 9              | 2021-4-28 08:47:25 | 21     |
# | 1              | 2021-4-29 13:28:30 | 58     |
# | 5              | 2021-4-28 16:39:59 | 40     |
# | 6              | 2021-4-29 23:39:28 | 58     |
# +----------------+--------------------+--------+
# Output:
# +----------------+
# | transaction_id |
# +----------------+
# | 1              |
# | 5              |
# | 6              |
# | 8              |
# +----------------+

SELECT T1.transaction_id
FROM Transactions T1
         JOIN (SELECT MAX(amount) AS max_amount, DATE(day) AS day
               FROM Transactions
               GROUP BY day) T2
              ON T1.amount = T2.max_amount AND DATE(T1.day) = T2.day
ORDER BY T1.transaction_id ASC;
