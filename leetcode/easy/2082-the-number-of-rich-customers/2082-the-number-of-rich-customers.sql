# leetcode/easy/2082. The Number of Rich Customers
# 2082-the-number-of-rich-customers
# URL: https://leetcode.com/problems/the-number-of-rich-customers/


# Input:
# Store table:
# +---------+-------------+--------+
# | bill_id | customer_id | amount |
# +---------+-------------+--------+
# | 6       | 1           | 549    |
# | 8       | 1           | 834    |
# | 4       | 2           | 394    |
# | 11      | 3           | 657    |
# | 13      | 3           | 257    |
# +---------+-------------+--------+
# Output:
# +------------+
# | rich_count |
# +------------+
# | 2          |
# +------------+
# Explanation:
# Customer 1 has two bills with amounts strictly greater than 500.
# Customer 2 does not have any bills with an amount strictly greater than 500.
# Customer 3 has one bill with an amount strictly greater than 500.

SELECT COUNT(CASE WHEN max_amount > 500 THEN 1 ELSE NULL END) AS rich_count
FROM (SELECT MAX(amount) AS max_amount
      FROM Store
      GROUP BY customer_id) AS subquery;
