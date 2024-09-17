# transportation-on-vacation
#
# # codewars/8kyu/Transportation on vacation
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/568d0dd208ee69389d000016/
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


def rental_car_cost(d):
    cost = d * 40

    if d >= 3:
        cost -= 20

    if d >= 6:
        cost -= 30

    return cost
