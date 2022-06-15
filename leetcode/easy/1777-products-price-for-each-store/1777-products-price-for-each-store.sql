# 1777-products-price-for-each-store
# leetcode/easy/1777. Product's Price for Each Store
# Difficulty: easy
# URL: https://leetcode.com/problems/products-price-for-each-store/
#
# Input:
# Products table:
# +-------------+--------+-------+
# | product_id  | store  | price |
# +-------------+--------+-------+
# | 0           | store1 | 95    |
# | 0           | store3 | 105   |
# | 0           | store2 | 100   |
# | 1           | store1 | 70    |
# | 1           | store3 | 80    |
# +-------------+--------+-------+
# Output:
# +-------------+--------+--------+--------+
# | product_id  | store1 | store2 | store3 |
# +-------------+--------+--------+--------+
# | 0           | 95     | 100    | 105    |
# | 1           | 70     | null   | 80     |
# +-------------+--------+--------+--------+
# Explanation:
# Product 0 price's are 95 for store1, 100 for store2 and, 105 for store3.
# Product 1 price's are 70 for store1, 80 for store3 and, it's not sold in store2.


# NOTE: best practice
SELECT product_id,
       MAX(CASE WHEN store = 'store1' THEN price END) AS store1,
       MAX(CASE WHEN store = 'store2' THEN price END) AS store2,
       MAX(CASE WHEN store = 'store3' THEN price END) AS store3
FROM Products
GROUP BY product_id;


# NOTE: naive solution
SELECT P.product_id,
       (SELECT price
        FROM Products
        WHERE store = 'store1'
          AND product_id = P.product_id)
           AS store1,
       (SELECT price
        FROM Products
        WHERE store = 'store2'
          AND product_id = P.product_id)
           AS store2,
       (SELECT price
        FROM Products
        WHERE store = 'store3'
          AND product_id = P.product_id)
           AS store3
FROM Products AS P
GROUP BY P.product_id;
