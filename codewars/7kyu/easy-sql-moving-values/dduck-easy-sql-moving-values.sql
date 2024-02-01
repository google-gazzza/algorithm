-- https://www.codewars.com/kata/594a389387a7c6a77a000005

SELECT LENGTH(name::text)            AS id,
       LENGTH(legs::text)            AS name,
       LENGTH(arms::text)            AS legs,
       LENGTH(characteristics::text) AS arms,
       LENGTH(id::text)              AS characteristics
FROM monsters
