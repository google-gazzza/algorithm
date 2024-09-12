"""
grasshopper-if-else-syntax-debug
codewars/8kyu/Grasshopper - If/else syntax debug
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57089707fe2d01529f00024a/
"""

def check_alive(health):
    if health <= 0:
        return False
    else:
        return True


from functools import wraps
from inspect import ismethod


def showinfo(f):
    @wraps(f)
    def wrapper(*args, **kwds):
        print(f.__name__, f.__hash__)
        return f(*args, **kwds)

    return wrapper


def call(func):
    @showinfo
    def wrapper(*args, **kwds):
        f = func()
        attrs = (getattr(f, name) for name in dir(f))
        methods = filter(ismethod, attrs)
        for method in methods:
            try:
                method()
            except TypeError:
                # Can't handle methods with required arguments.
                pass

    return wrapper


@call
def test_check_alive():
    class Test:
        def should_be_successful(self):
            assert check_alive(1) == True

        def should_be_fail(self):
            assert check_alive(-1) == False

    return Tes