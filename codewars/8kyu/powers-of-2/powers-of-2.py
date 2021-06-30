# powers-of-2
#
# # codewars/8kyu/Powers of 2
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/57a083a57cb1f31db7000028/
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

def powers_of_two(n):
    return list(map(lambda x: 2 ** x, range(n + 1)))


# best practice
def powers_of_two(n):
    return [2**x for x in range(n+1)]

