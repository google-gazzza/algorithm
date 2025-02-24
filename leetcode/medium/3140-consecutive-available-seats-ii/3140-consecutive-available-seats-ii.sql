-- // 3140-consecutive-available-seats-ii
-- // https://leetcode.com/problems/consecutive-available-seats-ii/description/
--
--
-- Cinema table:
--
-- +---------+------+
-- | seat_id | free |
-- +---------+------+
-- | 1       | 1    |
-- | 2       | 0    |
-- | 3       | 1    |
-- | 4       | 1    |
-- | 5       | 1    |
-- +---------+------+
--
-- TODO: i need to find consecutive free column 1 rows
-- and return first_set_id, last_seat_id, consecutive conesecutive_seats_len

WITH ConsecutiveGroups AS (SELECT seat_id,
                                  free,
                                  seat_id - ROW_NUMBER() OVER (ORDER BY seat_id) AS grp
                           FROM Cinema
                           WHERE free = 1),
     GroupedSeats AS (SELECT MIN(seat_id)   AS first_seat_id,
                             MAX(seat_id)   AS last_seat_id,
                             COUNT(seat_id) AS consecutive_seats_len
                      FROM ConsecutiveGroups
                      GROUP BY grp),
     MaxConsecutiveSeats AS (SELECT MAX(consecutive_seats_len) AS max_len
                             FROM GroupedSeats)
SELECT first_seat_id,
       last_seat_id,
       consecutive_seats_len
FROM GroupedSeats
WHERE consecutive_seats_len = (SELECT max_len FROM MaxConsecutiveSeats)
ORDER BY first_seat_id;
