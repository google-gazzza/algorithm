# thinkful-logic-drills-traffic-light
#
# # codewars/8kyu/Thinkful - Logic Drills: Traffic light
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/58649884a1659ed6cb000072/
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

def update_light(current):
color = ['green', 'yellow', 'red']
return color[(color.index(current)+1)%len(color)]
