"""
well-of-ideas-easy-version
codewars/8kyu/Well of Ideas - Easy Version
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57f222ce69e09c3630000212/
"""

def well(x):
    count = x.count('good')

    if count == 0:
        return 'Fail!'
    elif count == 1 or count == 2:
        return 'Publish!'
    return 'I smell a series!'


def test_well():
    assert well(['bad', 'bad', 'bad']) == 'Fail!'
    assert well(['good', 'bad', 'bad', 'bad', 'bad']) == 'Publish!'
    assert well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) == 'I smell a series!'

