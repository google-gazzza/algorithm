--https://www.codewars.com/kata/594323fde53209e94700012a/train/sql
--Time: 2247ms Passed: 13 Failed: 0

--PostgreSQL 9.6

SELECT CASE WHEN length(name) - length(TRANSLATE(name, ' ','')) = 3 
            THEN substring(name, 1, length(split_part(name,' ', 2)) + length(split_part(name,' ', 1)) + 1)            
            ELSE split_part(name,' ', 1) END AS name,
       CASE WHEN length(name) - length(TRANSLATE(name, ' ','')) = 3 
            THEN split_part(name,' ', 3)
            ELSE split_part(name,' ', 2) END AS first_lastname,
       CASE WHEN length(name) - length(TRANSLATE(name, ' ','')) = 3 
            THEN split_part(name,' ', 4)
            ELSE split_part(name,' ', 3) END AS second_lastname   
 FROM people