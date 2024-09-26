"""
fixme-get-full-name
codewars/7kyu/FIXME: Get Full Name
Difficulty: 7kyu
URL: https://www.codewars.com/kata/597c684822bc9388f600010f/
"""

class Dinglemouse(object):
    def __init__(self, first_name='', last_name=''):
        self.first_name = first_name
        self.last_name = last_name

    def get_full_name(self):
        return (self.first_name + ' ' + self.last_name).strip()


def test_cases():
    assert Dinglemouse('Clint', 'Eastwood').get_full_name() == 'Clint Eastwood'
    assert Dinglemouse('', 'Eastwood').get_full_name() == 'Eastwood'
    assert Dinglemouse('Clint', '').get_full_name() == 'Clint'
    assert Dinglemouse('', '').get_full_name() == ''