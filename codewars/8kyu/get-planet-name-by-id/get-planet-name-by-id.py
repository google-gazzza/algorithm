# get-planet-name-by-id
#
# # codewars/8kyu/Get Planet Name By ID
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/515e188a311df01cba000003/
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


def get_planet_name(id):
    planet_dict = {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }
    return planet_dict[id]
