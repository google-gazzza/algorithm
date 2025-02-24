-- 1069-product-sales-analysis-ii
-- URL: https://leetcode.com/problems/product-sales-analysis-ii/description/
--
-- Input:
-- Sales table:
-- +---------+------------+------+----------+-------+
-- | sale_id | product_id | year | quantity | price |
-- +---------+------------+------+----------+-------+
-- | 1       | 100        | 2008 | 10       | 5000  |
-- | 2       | 100        | 2009 | 12       | 5000  |
-- | 7       | 200        | 2011 | 15       | 9000  |
-- +---------+------------+------+----------+-------+
-- Product table:
-- +------------+--------------+
-- | product_id | product_name |
-- +------------+--------------+
-- | 100        | Nokia        |
-- | 200        | Apple        |
-- | 300        | Samsung      |
-- +------------+--------------+
-- Output:
-- +--------------+----------------+
-- | product_id   | total_quantity |
-- +--------------+----------------+
-- | 100          | 22             |
-- | 200          | 15             |
-- +--------------+----------------+

SELECT product_id, SUM(quantity) AS total_quantity
FROM Sales
GROUP BY product_id
ORDER BY product_id ASC
