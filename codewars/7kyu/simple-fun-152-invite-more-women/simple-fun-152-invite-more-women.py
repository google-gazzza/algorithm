"""
simple-fun-152-invite-more-women
codewars/7kyu/Simple Fun #152: Invite More Women?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58acfe4ae0201e1708000075/
"""


def invite_more_women(arr):
    return sum(arr) > 0


def test_invite_more_women():
    assert invite_more_women([1, -1, 1]) == True
    assert invite_more_women([-1, -1, -1]) == False
    assert invite_more_women([1, -1]) == False
    assert invite_more_women([1, 1, 1]) == True
