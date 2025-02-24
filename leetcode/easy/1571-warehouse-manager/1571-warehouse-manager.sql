# 1571-warehouse-manager
# leetcode/easy/1571. Warehouse Manager
# Difficulty: easy
# URL: https://leetcode.com/problems/warehouse-manager/
#
# Input:
# Warehouse table:
# +------------+--------------+-------------+
# | name       | product_id   | units       |
# +------------+--------------+-------------+
# | LCHouse1   | 1            | 1           |
# | LCHouse1   | 2            | 10          |
# | LCHouse1   | 3            | 5           |
# | LCHouse2   | 1            | 2           |
# | LCHouse2   | 2            | 2           |
# | LCHouse3   | 4            | 1           |
# +------------+--------------+-------------+
# Products table:
# +------------+--------------+------------+----------+-----------+
# | product_id | product_name | Width      | Length   | Height    |
# +------------+--------------+------------+----------+-----------+
# | 1          | LC-TV        | 5          | 50       | 40        |
# | 2          | LC-KeyChain  | 5          | 5        | 5         |
# | 3          | LC-Phone     | 2          | 10       | 10        |
# | 4          | LC-T-Shirt   | 4          | 10       | 20        |
# +------------+--------------+------------+----------+-----------+
# Output:
# +----------------+------------+
# | warehouse_name | volume     |
# +----------------+------------+
# | LCHouse1       | 12250      |
# | LCHouse2       | 20250      |
# | LCHouse3       | 800        |
# +----------------+------------+
# Explanation:
# Volume of product_id = 1 (LC-TV), 5x50x40 = 10000
# Volume of product_id = 2 (LC-KeyChain), 5x5x5 = 125
# Volume of product_id = 3 (LC-Phone), 2x10x10 = 200
# Volume of product_id = 4 (LC-T-Shirt), 4x10x20 = 800
# LCHouse1: 1 unit of LC-TV + 10 units of LC-KeyChain + 5 units of LC-Phone.
#           Total volume: 1*10000 + 10*125  + 5*200 = 12250 cubic feet
# LCHouse2: 2 units of LC-TV + 2 units of LC-KeyChain.
#           Total volume: 2*10000 + 2*125 = 20250 cubic feet
# LCHouse3: 1 unit of LC-T-Shirt.
#           Total volume: 1*800 = 800 cubic feet.

# SELECT warehouse_name, SUM(volume) AS volume
# FROM


SELECT name AS warehouse_name, SUM(units * volume) AS volume
FROM Warehouse
         LEFT JOIN (SELECT product_id, (Width * Length * Height) AS volume
                     FROM Products) AS P ON Warehouse.product_id = P.product_id
GROUP BY name;
