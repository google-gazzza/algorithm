# 1581-customer-who-visited-but-did-not-make-any-transactions
# leetcode/easy/1581. Customer Who Visited but Did Not Make Any Transactions
# Difficulty: easy
# URL: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/

# Input:
# Visits
# +----------+-------------+
# | visit_id | customer_id |
# +----------+-------------+
# | 1        | 23          |
# | 2        | 9           |
# | 4        | 30          |
# | 5        | 54          |
# | 6        | 96          |
# | 7        | 54          |
# | 8        | 54          |
# +----------+-------------+
# Transactions
# +----------------+----------+--------+
# | transaction_id | visit_id | amount |
# +----------------+----------+--------+
# | 2              | 5        | 310    |
# | 3              | 5        | 300    |
# | 9              | 5        | 200    |
# | 12             | 1        | 910    |
# | 13             | 2        | 970    |
# +----------------+----------+--------+
# Output:
# +-------------+----------------+
# | customer_id | count_no_trans |
# +-------------+----------------+
# | 54          | 2              |
# | 30          | 1              |
# | 96          | 1              |
# +-------------+----------------+

SELECT customer_id, COUNT(*) AS count_no_trans
FROM visits
WHERE visit_id NOT IN (SELECT DISTINCT visit_id FROM transactions)
GROUP BY customer_id
