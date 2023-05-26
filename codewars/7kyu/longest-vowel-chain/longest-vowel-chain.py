"""
longest-vowel-chain
codewars/7kyu/Longest vowel chain
Difficulty: 7kyu 
URL: https://www.codewars.com/kata/59c5f4e9d751df43cf000035/
"""

def solve(s):
    max = 0
    index = 0

    for i in range(0, len(s)):
        if not s[i] in ['a', 'e', 'i', 'o', 'u']:
            if i - index > max:
                max = i - index
            index = i + 1

    return max


def test_solve():
    assert solve("codewarriors") == 2
    assert solve("suoidea") == 3
    assert solve("ultrarevolutionariees") == 3
    assert solve("strengthlessnesses") == 1
    assert solve("cuboideonavicuare") == 2
    assert solve("chrononhotonthuooaos") == 5
    assert solve("iiihoovaeaaaoougjyaw") == 8
