-- beginner-series-#2-clock
-- Beginner Series #2 Clock
-- difficulty: 8kyu
-- https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

SELECT ((((h * 60) + m) * 60) + s) * 1000 as res
FROM past;
