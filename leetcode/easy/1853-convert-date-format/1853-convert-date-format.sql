# 1853-convert-date-format
# leetcode/easy/1853. Convert Date Format
# URL: https://leetcode.com/problems/convert-date-format/
#
# Input:
# Days table:
# +------------+
# | day        |
# +------------+
# | 2022-04-12 |
# | 2021-08-09 |
# | 2020-06-26 |
# +------------+
# Output:
# +-------------------------+
# | day                     |
# +-------------------------+
# | Tuesday, April 12, 2022 |
# | Monday, August 9, 2021  |
# | Friday, June 26, 2020   |
# +-------------------------+
# Explanation: Please note that the output is case-sensitive.

SELECT date_format(day, '%W, %M %e, %Y')AS day
FROM Days
