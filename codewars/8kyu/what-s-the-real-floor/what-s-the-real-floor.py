"""
what-s-the-real-floor
codewars/8kyu/What's the real floor?
Difficulty: 8kyu
URL: https://www.codewars.com/kata/574b3b1599d8f897470018f6/
"""


def get_real_floor(n):
    if n < 1:
        return n
    if n > 13:
        return n - 2
    return n - 1

# from main import get_real_floor
# 
# 
# def describe_get_floor():
#     def it_should_be_successful():
#         assert get_real_floor(1) == 0
#         assert get_real_floor(5) == 4
#         assert get_real_floor(15) == 13
#         assert get_real_floor(13) == 12


# def test():
#     pass
