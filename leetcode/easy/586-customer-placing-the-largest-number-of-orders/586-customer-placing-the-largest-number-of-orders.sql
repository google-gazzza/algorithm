-- leetcode/easy/586. Customer Placing the Largest Number of Orders
-- 586-customer-placing-the-largest-number-of-orders
-- URL: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/description/

-- Input:
-- Orders table:
-- +--------------+-----------------+
-- | order_number | customer_number |
-- +--------------+-----------------+
-- | 1            | 1               |
-- | 2            | 2               |
-- | 3            | 3               |
-- | 4            | 3               |
-- +--------------+-----------------+
-- Output:
-- +-----------------+
-- | customer_number |
-- +-----------------+
-- | 3               |
-- +-----------------+

WITH counted_order AS (SELECT customer_number,
                              COUNT(customer_number) AS order_count
                       FROM Orders
                       GROUP BY customer_number)

SELECT customer_number
FROM counted_order
WHERE order_count = (SELECT MAX(order_count)
                     FROM counted_order)
