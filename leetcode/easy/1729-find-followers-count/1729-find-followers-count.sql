# leetcode/easy/1729. Find Followers Count
# 1729-find-followers-count
# URL: https://leetcode.com/problems/find-followers-count/

# Input:
# Followers table:
# +---------+-------------+
# | user_id | follower_id |
# +---------+-------------+
# | 0       | 1           |
# | 1       | 0           |
# | 2       | 0           |
# | 2       | 1           |
# +---------+-------------+
# Output:
# +---------+----------------+
# | user_id | followers_count|
# +---------+----------------+
# | 0       | 1              |
# | 1       | 1              |
# | 2       | 2              |
# +---------+----------------+

SELECT user_id,
       COUNT(user_id) AS followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id ASC;
