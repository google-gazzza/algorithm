# leetcode/medium/1715. Count Apples and Oranges
# 1715-count-apples-and-oranges
# URL: https://leetcode.com/problems/count-apples-and-oranges/description/

# Input:
# Boxes table:
# +--------+----------+-------------+--------------+
# | box_id | chest_id | apple_count | orange_count |
# +--------+----------+-------------+--------------+
# | 2      | null     | 6           | 15           |
# | 18     | 14       | 4           | 15           |
# | 19     | 3        | 8           | 4            |
# | 12     | 2        | 19          | 20           |
# | 20     | 6        | 12          | 9            |
# | 8      | 6        | 9           | 9            |
# | 3      | 14       | 16          | 7            |
# +--------+----------+-------------+--------------+
# Chests table:
# +----------+-------------+--------------+
# | chest_id | apple_count | orange_count |
# +----------+-------------+--------------+
# | 6        | 5           | 6            |
# | 14       | 20          | 10           |
# | 2        | 8           | 8            |
# | 3        | 19          | 4            |
# | 16       | 19          | 19           |
# +----------+-------------+--------------+
# Output:
# +-------------+--------------+
# | apple_count | orange_count |
# +-------------+--------------+
# | 151         | 123          |
# +-------------+--------------+

SELECT SUM(b.apple_count + COALESCE(c.apple_count, 0))   AS apple_count,
       SUM(b.orange_count + COALESCE(c.orange_count, 0)) AS orange_count
FROM Boxes b
         LEFT JOIN
     Chests c ON b.chest_id = c.chest_id;
