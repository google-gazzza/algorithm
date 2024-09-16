"""
find-the-position
codewars/8kyu/Find the position!
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5808e2006b65bff35500008f/
"""

def position(alphabet):
    return f'Position of alphabet: {ord(alphabet) - 96}'


def test_positio():
    assert position('a') == 'Position of alphabet: 1'
    assert position('z') == 'Position of alphabet: 26'
    assert position('e') == 'Position of alphabet: 5'