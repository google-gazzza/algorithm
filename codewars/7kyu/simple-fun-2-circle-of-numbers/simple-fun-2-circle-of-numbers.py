"""
simple-fun-2-circle-of-numbers
codewars/7kyu/Simple Fun #2: Circle of Numbers
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58841cb52a077503c4000015/
"""

def circle_of_numbers(n, fst):
    return (fst + (n / 2)) % n


def test_circle_of_numbers():
    assert circle_of_numbers(10, 2) == 7
    assert circle_of_numbers(10, 7) == 2
    assert circle_of_numbers(4, 1) == 3
    assert circle_of_numbers(6, 3) == 