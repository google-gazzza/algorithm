"""
love-vs-friendship
codewars/7kyu/Love vs friendship
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59706036f6e5d1e22d000016/
"""

def words_to_marks(s: str):
    return sum([ord(x) - 96 for x in [*s]])


def words_to_marks(s):
    return sum(ord(c) - 96 for c in s)


def test_words_to_marks():
    assert words_to_marks('attitude') == 100
    assert words_to_marks('friends') == 75
    assert words_to_marks('family'), 66
    assert words_to_marks('selfness'), 99
    assert words_to_marks('knowledge'), 96
