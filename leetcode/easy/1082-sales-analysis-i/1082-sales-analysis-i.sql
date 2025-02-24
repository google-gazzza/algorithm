-- 1082-sales-analysis-i
-- URL: https://leetcode.com/problems/sales-analysis-i/description/
--
-- Input:
-- Product table:
-- +------------+--------------+------------+
-- | product_id | product_name | unit_price |
-- +------------+--------------+------------+
-- | 1          | S8           | 1000       |
-- | 2          | G4           | 800        |
-- | 3          | iPhone       | 1400       |
-- +------------+--------------+------------+
-- Sales table:
-- +-----------+------------+----------+------------+----------+-------+
-- | seller_id | product_id | buyer_id | sale_date  | quantity | price |
-- +-----------+------------+----------+------------+----------+-------+
-- | 1         | 1          | 1        | 2019-01-21 | 2        | 2000  |
-- | 1         | 2          | 2        | 2019-02-17 | 1        | 800   |
-- | 2         | 2          | 3        | 2019-06-02 | 1        | 800   |
-- | 3         | 3          | 4        | 2019-05-13 | 2        | 2800  |
-- +-----------+------------+----------+------------+----------+-------+
-- Output:
-- +-------------+
-- | seller_id   |
-- +-------------+
-- | 1           |
-- | 3           |
-- +-------------+


SELECT seller_id
FROM (
         SELECT seller_id, SUM(price) AS total_price
         FROM Sales
         GROUP BY seller_id
     ) AS seller_totals
WHERE total_price = (
    SELECT MAX(total_price)
    FROM (
             SELECT seller_id, SUM(price) AS total_price
             FROM Sales
             GROUP BY seller_id
         ) AS max_total
);
