-- leetcode/easy/1661. Average Time of Process per Machine
-- 1661-average-time-of-process-per-machine
-- https://leetcode.com/problems/average-time-of-process-per-machine/description/
-- # Input:
-- # Activity table:
-- # +------------+------------+---------------+-----------+
-- # | machine_id | process_id | activity_type | timestamp |
-- # +------------+------------+---------------+-----------+
-- # | 0          | 0          | start         | 0.712     |
-- # | 0          | 0          | end           | 1.520     |
-- # | 0          | 1          | start         | 3.140     |
-- # | 0          | 1          | end           | 4.120     |
-- # | 1          | 0          | start         | 0.550     |
-- # | 1          | 0          | end           | 1.550     |
-- # | 1          | 1          | start         | 0.430     |
-- # | 1          | 1          | end           | 1.420     |
-- # | 2          | 0          | start         | 4.100     |
-- # | 2          | 0          | end           | 4.512     |
-- # | 2          | 1          | start         | 2.500     |
-- # | 2          | 1          | end           | 5.000     |
-- # +------------+------------+---------------+-----------+
-- # Output:
-- # +------------+-----------------+
-- # | machine_id | processing_time |
-- # +------------+-----------------+
-- # | 0          | 0.894           |
-- # | 1          | 0.995           |
-- # | 2          | 1.456           |
-- # +------------+-----------------+

WITH processing_time_start AS (SELECT *
                               FROM Activity
                               WHERE activity_type = 'start'),
     processing_time_end AS (SELECT *
                             FROM Activity
                             WHERE activity_type = 'end'),
     processing_time AS (SELECT start_time.machine_id,
                                start_time.process_id,
                                end_time.timestamp - start_time.timestamp AS processing_time
                         FROM processing_time_start AS start_time
                                  JOIN processing_time_end AS end_time
                                       ON start_time.machine_id = end_time.machine_id
                                           AND start_time.process_id = end_time.process_id)

SELECT machine_id, ROUND(AVG(processing_time)::numeric, 3) AS processing_time
FROM processing_time
GROUP BY machine_id;
