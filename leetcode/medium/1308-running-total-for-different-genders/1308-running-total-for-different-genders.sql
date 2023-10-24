# leetcode/medium/1308. Running Total for Different Genders
# 1308-running-total-for-different-genders
# URL: https://leetcode.com/problems/running-total-for-different-genders/description/

# Input:
# Scores table:
# +-------------+--------+------------+--------------+
# | player_name | gender | day        | score_points |
# +-------------+--------+------------+--------------+
# | Aron        | F      | 2020-01-01 | 17           |
# | Alice       | F      | 2020-01-07 | 23           |
# | Bajrang     | M      | 2020-01-07 | 7            |
# | Khali       | M      | 2019-12-25 | 11           |
# | Slaman      | M      | 2019-12-30 | 13           |
# | Joe         | M      | 2019-12-31 | 3            |
# | Jose        | M      | 2019-12-18 | 2            |
# | Priya       | F      | 2019-12-31 | 23           |
# | Priyanka    | F      | 2019-12-30 | 17           |
# +-------------+--------+------------+--------------+
# Output:
# +--------+------------+-------+
# | gender | day        | total |
# +--------+------------+-------+
# | F      | 2019-12-30 | 17    |
# | F      | 2019-12-31 | 40    |
# | F      | 2020-01-01 | 57    |
# | F      | 2020-01-07 | 80    |
# | M      | 2019-12-18 | 2     |
# | M      | 2019-12-25 | 13    |
# | M      | 2019-12-30 | 26    |
# | M      | 2019-12-31 | 29    |
# | M      | 2020-01-07 | 36    |
# +--------+------------+-------+

SELECT gender,
       day,
       SUM(score_points) OVER (PARTITION BY gender ORDER BY gender ASC, day ASC) AS total
FROM Scores
GROUP BY gender, day
ORDER BY gender ASC, day ASC;
