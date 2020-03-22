-- https://www.codewars.com/kata/5abcf0f930488ff1a6000b66/train/sql

SELECT *
FROM students
WHERE (quality1 = 'evil' AND quality2 = 'cunning')
  AND (quality1 = 'brave' AND quality2 != 'evil')
  AND (quality1 = 'studious' OR quality2 = 'intelligent')
  AND (quality1 = 'hufflepuff' OR quality2 = 'hufflepuff')
ORDER BY id ASC
