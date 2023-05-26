"""
alphabet-war
codewars/7kyu/Alphabet war
Difficulty: 7kyu
URL: https://www.codewars.com/kata/59377c53e66267c8f6000027/
"""

def alphabet_war(fight=''):
    char_values = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1,
        'm': -4,
        'q': -3,
        'd': -2,
        'z': -1,
    }

    result = sum(map(lambda x: char_values.get(x, 0), fight))

    if result == 0:
        return "Let's fight again!"
    if result > 0:
        return "Left side wins!"
    return "Right side wins!"


def test_alphabet_war():
    assert alphabet_war("z") == "Right side wins!"
    assert alphabet_war("zdqmwpbs") == "Let's fight again!"
    assert alphabet_war("wq") == "Left side wins!"
    assert alphabet_war("zzzzs") == "Right side wins!"
    assert alphabet_war("wwwwww") == "Left side wins!"