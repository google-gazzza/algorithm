# 511-game-play-analysis-i
# leetcode/easy/511. Game Play Analysis I
# URL: https://leetcode.com/problems/game-play-analysis-i/
#
# Input:
# Activity table:
# +-----------+-----------+------------+--------------+
# | player_id | device_id | event_date | games_played |
# +-----------+-----------+------------+--------------+
# | 1         | 2         | 2016-03-01 | 5            |
# | 1         | 2         | 2016-05-02 | 6            |
# | 2         | 3         | 2017-06-25 | 1            |
# | 3         | 1         | 2016-03-02 | 0            |
# | 3         | 4         | 2018-07-03 | 5            |
# +-----------+-----------+------------+--------------+
# Output:
# +-----------+-------------+
# | player_id | first_login |
# +-----------+-------------+
# | 1         | 2016-03-01  |
# | 2         | 2017-06-25  |
# | 3         | 2016-03-02  |
# +-----------+-------------+

SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id;
