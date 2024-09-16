-- leetcode/easy/1251. Average Selling Price
-- 1251-average-selling-price
-- https://leetcode.com/problems/average-selling-price/description/
-- Input:
-- Prices table:
-- +------------+------------+------------+--------+
-- | product_id | start_date | end_date   | price  |
-- +------------+------------+------------+--------+
-- | 1          | 2019-02-17 | 2019-02-28 | 5      |
-- | 1          | 2019-03-01 | 2019-03-22 | 20     |
-- | 2          | 2019-02-01 | 2019-02-20 | 15     |
-- | 2          | 2019-02-21 | 2019-03-31 | 30     |
-- +------------+------------+------------+--------+
-- UnitsSold table:
-- +------------+---------------+-------+
-- | product_id | purchase_date | units |
-- +------------+---------------+-------+
-- | 1          | 2019-02-25    | 100   |
-- | 1          | 2019-03-01    | 15    |
-- | 2          | 2019-02-10    | 200   |
-- | 2          | 2019-03-22    | 30    |
-- +------------+---------------+-------+
-- Output:
-- +------------+---------------+
-- | product_id | average_price |
-- +------------+---------------+
-- | 1          | 6.96          |
-- | 2          | 16.96         |
-- +------------+---------------+


WITH merged_table AS (SELECT p.product_id,
                             p.start_date,
                             p.end_date,
                             p.price,
                             COALESCE(u.units, 0) AS units_sold
                      FROM Prices p
                               LEFT JOIN
                           UnitsSold u ON p.product_id = u.product_id
                               AND u.purchase_date BETWEEN p.start_date AND p.end_date),
     price_with_product_id AS (SELECT product_id,
                                      units_sold,
                                      price * units_sold AS total_price
                               FROM merged_table)

SELECT m.product_id,
       CASE
           WHEN SUM(m.units_sold) = 0 THEN 0
           ELSE ROUND((SUM(m.total_price)::FLOAT / SUM(m.units_sold)::FLOAT)::NUMERIC, 2)
           END AS average_price
FROM price_with_product_id AS m
GROUP BY m.product_id
