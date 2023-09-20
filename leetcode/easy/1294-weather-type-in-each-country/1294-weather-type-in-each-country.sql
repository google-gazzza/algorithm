# leetcode/easy/1294. Weather Type in Each Country
# 1294-weather-type-in-each-country
# URL: https://leetcode.com/problems/weather-type-in-each-country/

# Write a solution to find the type of weather in each country for November 2019.
#
# The type of weather is:
#
# Cold if the average weather_state is less than or equal 15,
# Hot if the average weather_state is greater than or equal to 25, and
# Warm otherwise.

# Input:
# Countries table:
# +------------+--------------+
# | country_id | country_name |
# +------------+--------------+
# | 2          | USA          |
# | 3          | Australia    |
# | 7          | Peru         |
# | 5          | China        |
# | 8          | Morocco      |
# | 9          | Spain        |
# +------------+--------------+
# Weather table:
# +------------+---------------+------------+
# | country_id | weather_state | day        |
# +------------+---------------+------------+
# | 2          | 15            | 2019-11-01 |
# | 2          | 12            | 2019-10-28 |
# | 2          | 12            | 2019-10-27 |
# | 3          | -2            | 2019-11-10 |
# | 3          | 0             | 2019-11-11 |
# | 3          | 3             | 2019-11-12 |
# | 5          | 16            | 2019-11-07 |
# | 5          | 18            | 2019-11-09 |
# | 5          | 21            | 2019-11-23 |
# | 7          | 25            | 2019-11-28 |
# | 7          | 22            | 2019-12-01 |
# | 7          | 20            | 2019-12-02 |
# | 8          | 25            | 2019-11-05 |
# | 8          | 27            | 2019-11-15 |
# | 8          | 31            | 2019-11-25 |
# | 9          | 7             | 2019-10-23 |
# | 9          | 3             | 2019-12-23 |
# +------------+---------------+------------+
# Output:
# +--------------+--------------+
# | country_name | weather_type |
# +--------------+--------------+
# | USA          | Cold         |
# | Australia    | Cold         |
# | Peru         | Hot          |
# | Morocco      | Hot          |
# | China        | Warm         |
# +--------------+--------------+

SELECT country_name,
       CASE
           WHEN AVG(weather_state) <= 15 THEN 'Cold'
           WHEN AVG(weather_state) >= 25 THEN 'Hot'
           ELSE 'Warm'
           END AS weather_type
FROM Countries
         INNER JOIN
     (SELECT *
      FROM Weather
      WHERE YEAR(day) = 2019
        AND MONTH(day) = 11) AS w ON Countries.country_id = w.country_id
GROUP BY Countries.country_id
