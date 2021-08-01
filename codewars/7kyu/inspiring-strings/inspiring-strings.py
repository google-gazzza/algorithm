"""
inspiring-strings
codewars/7kyu/Inspiring Strings
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5939ab6eed348a945f0007b2/
"""

def longest_word(x):
    splited_words = x.split(' ')
    max_length = max(list(map(lambda x: len(x), splited_words)))
    filtered_words = list(filter(lambda x: len(x) == max_length, splited_words))

    return filtered_words[-1]


def longest_word(string_of_words):
    return max(reversed(string_of_words.split()), key=len)


def longest_word(s):
    return sorted(s.split(), key=len)[-1]


def test_longest_word():
    assert longest_word('a b c d e fgh') == "fgh"
    assert longest_word('one two three') == "three"
    assert longest_word('red blue grey') == "grey"