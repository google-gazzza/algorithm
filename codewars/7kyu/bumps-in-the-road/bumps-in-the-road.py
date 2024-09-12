"""
bumps-in-the-road
codewars/7kyu/Bumps in the Road
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57ed30dde7728215300005fa/
"""

def bumps(road):
    return 'Woohoo!' if road.count('n') < 16 else 'Car Dead'


def test_bump():
    assert bumps("n") == "Woohoo!"
    assert bumps("_nnnnnnn_n__n______nn__nn_nnn") == "Car Dead"
    assert bumps("______n___n_") == "Woohoo!"
    assert bumps("nnnnnnnnnnnnnnnnnnnnn") == "Car Dead"
