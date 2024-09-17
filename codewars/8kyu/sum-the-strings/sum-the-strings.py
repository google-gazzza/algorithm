# sum-the-strings
#
# # codewars/8kyu/Sum The Strings
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/5966e33c4e686b508700002d/
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

def sum_str(*params):
    return str(sum(map(lambda x: int(x) if len(x) else 0, params)))


# clever practice
def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))
