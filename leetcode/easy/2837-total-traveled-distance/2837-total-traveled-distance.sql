# leetcode/easy/2837. Total Traveled Distance
# 2837-total-traveled-distance
# URL: https://leetcode.com/problems/total-traveled-distance/

# Input:
# Users table:
# +---------+---------+
# | user_id | name    |
# +---------+---------+
# | 17      | Addison |
# | 14      | Ethan   |
# | 4       | Michael |
# | 2       | Avery   |
# | 10      | Eleanor |
# +---------+---------+
# Rides table:
# +---------+---------+----------+
# | ride_id | user_id | distance |
# +---------+---------+----------+
# | 72      | 17      | 160      |
# | 42      | 14      | 161      |
# | 45      | 4       | 59       |
# | 32      | 2       | 197      |
# | 15      | 4       | 357      |
# | 56      | 2       | 196      |
# | 10      | 14      | 25       |
# +---------+---------+----------+
# Output:
# +---------+---------+-------------------+
# | user_id | name    | traveled distance |
# +---------+---------+-------------------+
# | 2       | Avery   | 393               |
# | 4       | Michael | 416               |
# | 10      | Eleanor | 0                 |
# | 14      | Ethan   | 186               |
# | 17      | Addison | 160               |
# +---------+---------+-------------------+
# Explanation:
# -  User id 2 completed two journeys of 197 and 196, resulting in a combined travel distance of 393.
# -  User id 4 completed two journeys of 59 and 357, resulting in a combined travel distance of 416.
# -  User id 14 completed two journeys of 161 and 25, resulting in a combined travel distance of 186.
# -  User id 16 completed only one journey of 160.
# -  User id 10 did not complete any journeys, thus the total travel distance remains at 0.
# Returning the table orderd by user_id in ascending order.

SELECT Users.user_id,
       Users.name,
       IFNULL(SUM(Rides.distance), 0) AS 'traveled distance'
FROM Users
         LEFT JOIN Rides ON Users.user_id = Rides.user_id
GROUP BY user_id
ORDER BY user_id ASC;
