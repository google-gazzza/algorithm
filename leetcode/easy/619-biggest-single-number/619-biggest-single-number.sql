# leetcode/easy/619. Biggest Single Number
# 619-biggest-single-number
# URL: https://leetcode.com/problems/biggest-single-number/description/

SELECT MAX(t.num) AS num
FROM (SELECT num
      FROM MyNumbers
      GROUP BY num
      HAVING COUNT(*) = 1) AS t;
