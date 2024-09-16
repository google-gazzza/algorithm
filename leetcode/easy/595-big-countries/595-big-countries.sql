# 595-big-countries
# leetcode/easy/595. Big Countries
# Difficulty: easy
# URL: https://leetcode.com/problems/big-countries/

SELECT w.name,
       w.population,
       w.area
FROM World as w
WHERE w.population >= 25000000
   OR w.area >= 3000000
