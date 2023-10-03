# leetcode/easy/2669. Count Artist Occurrences On Spotify Ranking List
# 2669-count-artist-occurrences-on-spotify-ranking-list
# URL: https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/

# Input:
# Spotify table:
# +---------+--------------------+------------+
# | id      | track_name         | artist     |
# +---------+--------------------+------------+
# | 303651  | Heart Won't Forget | Sia        |
# | 1046089 | Shape of you       | Ed Sheeran |
# | 33445   | I'm the one        | DJ Khalid  |
# | 811266  | Young Dumb & Broke | DJ Khalid  |
# | 505727  | Happier            | Ed Sheeran |
# +---------+--------------------+------------+
# Output:
# +------------+-------------+
# | artist     | occurrences |
# +------------+-------------+
# | DJ Khalid  | 2           |
# | Ed Sheeran | 2           |
# | Sia        | 1           |
# +------------+-------------+
#
# Explanation: The count of occurrences is listed in descending order under the column name "occurrences". If the number of occurrences is the same, the artist's names are sorted in ascending order.

SELECT artist, COUNT(*) AS occurrences
FROM Spotify
GROUP BY artist
ORDER BY occurrences DESC, artist ASC;
