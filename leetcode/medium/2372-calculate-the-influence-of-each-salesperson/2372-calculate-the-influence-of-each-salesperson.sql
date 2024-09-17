# leetcode/medium/2372. Calculate the Influence of Each Salesperson
# 2372-calculate-the-influence-of-each-salesperson
# URL: https://leetcode.com/problems/calculate-the-influence-of-each-salesperson/description/

# Input:
# Salesperson table:
# +----------------+-------+
# | salesperson_id | name  |
# +----------------+-------+
# | 1              | Alice |
# | 2              | Bob   |
# | 3              | Jerry |
# +----------------+-------+
# Customer table:
# +-------------+----------------+
# | customer_id | salesperson_id |
# +-------------+----------------+
# | 1           | 1              |
# | 2           | 1              |
# | 3           | 2              |
# +-------------+----------------+
# Sales table:
# +---------+-------------+-------+
# | sale_id | customer_id | price |
# +---------+-------------+-------+
# | 1       | 2           | 892   |
# | 2       | 1           | 354   |
# | 3       | 3           | 988   |
# | 4       | 3           | 856   |
# +---------+-------------+-------+
# Output:
# +----------------+-------+-------+
# | salesperson_id | name  | total |
# +----------------+-------+-------+
# | 1              | Alice | 1246  |
# | 2              | Bob   | 1844  |
# | 3              | Jerry | 0     |
# +----------------+-------+-------+

SELECT s.salesperson_id, s.name, IFNULL(SUM(price), 0) AS total
FROM Salesperson s
         LEFT JOIN Customer c ON s.salesperson_id = c.salesperson_id
         LEFT JOIN Sales s2 ON c.customer_id = s2.customer_id
GROUP BY s.salesperson_id
ORDER BY s.salesperson_id;
