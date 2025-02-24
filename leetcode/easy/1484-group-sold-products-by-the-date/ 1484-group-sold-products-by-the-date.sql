# 1484-group-sold-products-by-the-date
# leetcode/easy/1484. Group Sold Products By The Date
# URL: https://leetcode.com/problems/group-sold-products-by-the-date/


# NOTE: naive solution
SELECT sell_date,
       COUNT(DISTINCT product)                             AS num_sold,
       GROUP_CONCAT(DISTINCT product ORDER BY product ASC) AS products
FROM Activities
GROUP BY sell_date;


# NOTE: Best Practice
SELECT sell_date,
       COUNT(DISTINCT (product))                                         AS num_sold,
       GROUP_CONCAT(DISTINCT product ORDER BY product ASC SEPARATOR ',') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date ASC
