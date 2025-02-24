-- collect-tuition-sql-for-beginners-4
-- Collect Tuition (SQL for Beginners #4)
-- difficulty: 8kyu
-- https://www.codewars.com/kata/5910b0d378cc2ba91400000b

SELECT *
FROM students
WHERE !tuition_received;
