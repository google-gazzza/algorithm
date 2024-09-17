# leetcode/easy/1565. Unique Orders and Customers Per Month
# 1565-unique-orders-and-customers-per-month
# URL: https://leetcode.com/problems/unique-orders-and-customers-per-month/

# +---------------+---------+
# | Column Name   | Type    |
# +---------------+---------+
# | order_id      | int     |
# | order_date    | date    |
# | customer_id   | int     |
# | invoice       | int     |
# +---------------+---------+
# Input:
# Orders table:
# +----------+------------+-------------+------------+
# | order_id | order_date | customer_id | invoice    |
# +----------+------------+-------------+------------+
# | 1        | 2020-09-15 | 1           | 30         |
# | 2        | 2020-09-17 | 2           | 90         |
# | 3        | 2020-10-06 | 3           | 20         |
# | 4        | 2020-10-20 | 3           | 21         |
# | 5        | 2020-11-10 | 1           | 10         |
# | 6        | 2020-11-21 | 2           | 15         |
# | 7        | 2020-12-01 | 4           | 55         |
# | 8        | 2020-12-03 | 4           | 77         |
# | 9        | 2021-01-07 | 3           | 31         |
# | 10       | 2021-01-15 | 2           | 20         |
# +----------+------------+-------------+------------+
# Output:
# +---------+-------------+----------------+
# | month   | order_count | customer_count |
# +---------+-------------+----------------+
# | 2020-09 | 2           | 2              |
# | 2020-10 | 1           | 1              |
# | 2020-12 | 2           | 1              |
# | 2021-01 | 1           | 1              |
# +---------+-------------+----------------+

SELECT DATE_FORMAT(order_date, '%Y-%m') as month,
       COUNT(invoice)                   as order_count,
       COUNT(DISTINCT customer_id)      as customer_count
FROM Orders
WHERE invoice > 20
GROUP BY month;
