# switch-it-up
#
# # codewars/8kyu/Switch it Up!
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/
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

def switch_it_up(number):
    switch_dict = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        0: 'Zero',
    }

    return switch_dict[number]

def switch_it_up(n):
    return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][n]

