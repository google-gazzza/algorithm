# leetcode/easy/2377. Sort the Olympic Table
# 2377-sort-the-olympic-table
# URL: https://leetcode.com/problems/sort-the-olympic-table/

# +---------------+---------+
# | Column Name   | Type    |
# +---------------+---------+
# | country       | varchar |
# | gold_medals   | int     |
# | silver_medals | int     |
# | bronze_medals | int     |
# +---------------+---------+


SELECT country, gold_medals, silver_medals, bronze_medals
FROM Olympic
ORDER BY gold_medals DESC, silver_medals DESC, bronze_medals DESC, country ASC;
