# 1445-apples-oranges
# leetcode/medium/1445. Apples & Oranges
# Difficulty: medium
# URL: https://leetcode.com/problems/apples-oranges/


# +---------------+---------+
# | Column Name   | Type    |
# +---------------+---------+
# | sale_date     | date    |
# | fruit         | enum    |
# | sold_num      | int     |
# +---------------+---------+
# Input:
# Sales table:
# +------------+------------+-------------+
# | sale_date  | fruit      | sold_num    |
# +------------+------------+-------------+
# | 2020-05-01 | apples     | 10          |
# | 2020-05-01 | oranges    | 8           |
# | 2020-05-02 | apples     | 15          |
# | 2020-05-02 | oranges    | 15          |
# | 2020-05-03 | apples     | 20          |
# | 2020-05-03 | oranges    | 0           |
# | 2020-05-04 | apples     | 15          |
# | 2020-05-04 | oranges    | 16          |
# +------------+------------+-------------+
# Output:
# +------------+--------------+
# | sale_date  | diff         |
# +------------+--------------+
# | 2020-05-01 | 2            |
# | 2020-05-02 | 0            |
# | 2020-05-03 | 20           |
# | 2020-05-04 | -1           |
# +------------+--------------+


###############################################################################
# with subquery
###############################################################################

SELECT sales_by_date.sale_date,
       sum(sales_by_date.sold_num) AS diff
FROM (
         SELECT sale_date,
                CASE
                    WHEN fruit = 'oranges'
                        THEN -sold_num
                    ELSE
                        sold_num
                    END AS sold_num
         FROM sales
     ) AS sales_by_date
GROUP BY sale_date;


###############################################################################
# without subquery
###############################################################################
SELECT sales.sale_date,
       sum(CASE
               WHEN sales.fruit = 'oranges'
                   THEN -sales.sold_num
               ELSE
                   sales.sold_num
           END) AS diff
FROM sales
GROUP BY sale_date;
