"""
a-wolf-in-sheep-s-clothing
codewars/8kyu/A wolf in sheep's clothing
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/
"""


def warn_the_sheep(queue):
    reversed_list = list(reversed(queue))
    wolf_index = reversed_list.index('wolf')

    if wolf_index == 0:
        return 'Pls go away and stop eating my sheep'
    if wolf_index > 0:
        return f'Oi! Sheep number {wolf_index}! You are about to be eaten by a wolf!'

    return False


def describe_warn_the_sheep():
    def describe_normal_case():
        def it_should_succeed():
            assert (warn_the_sheep([
                'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'
            ]) == 'Oi! Sheep number 2! You are about to be eaten by a wolf!')
            assert (warn_the_sheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])
                    == 'Oi! Sheep number 5! You are about to be eaten by a wolf!')
            assert (warn_the_sheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])
                    == 'Oi! Sheep number 6! You are about to be eaten by a wolf!')
            assert (warn_the_sheep(['sheep', 'wolf', 'sheep'])
                    == 'Oi! Sheep number 1! You are about to be eaten by a wolf!')
            assert (warn_the_sheep(['sheep', 'sheep', 'wolf'])
                    == 'Pls go away and stop eating my sheep')


def test():
    pass
