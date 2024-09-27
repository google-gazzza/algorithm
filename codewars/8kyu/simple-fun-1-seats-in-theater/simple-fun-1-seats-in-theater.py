# simple-fun-1-seats-in-theater
#
# # codewars/8kyu/Simple Fun #1: Seats in Theater
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/588417e576933b0ec9000045/
# Tags:
#
# ## Approach
#
# ### en
#
# ### kr
#
# ## Solution
# ### python

def seats_in_theater(tot_cols, tot_rows, col, row):
    return (tot_cols - (col - 1)) * (tot_rows - row)
