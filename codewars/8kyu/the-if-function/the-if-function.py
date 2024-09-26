# the-if-function
# The 'if' function
# difficulty: 8kyu
# https://www.codewars.com/kata/54147087d5c2ebe4f1000805

def _if(bool, func1, func2):
    return func1() if bool else func2()
