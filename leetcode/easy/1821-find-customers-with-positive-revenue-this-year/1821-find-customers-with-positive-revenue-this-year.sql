# 1821-find-customers-with-positive-revenue-this-year
# leetcode/easy/1821. Find Customers With Positive Revenue this Year
# URL: https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/
#
#
# Input:
# Customers table:
# +-------------+------+---------+
# | customer_id | year | revenue |
# +-------------+------+---------+
# | 1           | 2018 | 50      |
# | 1           | 2021 | 30      |
# | 1           | 2020 | 70      |
# | 2           | 2021 | -50     |
# | 3           | 2018 | 10      |
# | 3           | 2016 | 50      |
# | 4           | 2021 | 20      |
# +-------------+------+---------+
# Output:
# +-------------+
# | customer_id |
# +-------------+
# | 1           |
# | 4           |
# +-------------+

SELECT customer_id
FROM Customers
WHERE year = 2021
  AND revenue > 0
