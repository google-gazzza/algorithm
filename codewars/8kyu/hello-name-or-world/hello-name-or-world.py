"""
hello-name-or-world

codewars/8kyu/Hello, Name or World!
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57e3f79c9cb119374600046b/
"""


# python 3.6+
def hello(name=''):
    return f'Hello, {name.capitalize() if len(name) else "World"}!'


# old
def hello(name=''):
    return "Hello, {}!".format(name.title() if name else 'World')


# very old
def hello(name=None):
    if not name:
        return "Hello, World!"
    return "Hello, %s!" % (name.capitalize())


def test_hello():
    assert hello() == 'Hello, World!'
    assert hello('alice') == 'Hello, Alice!'
    assert hello('aLIce') == 'Hello, Alice!'
