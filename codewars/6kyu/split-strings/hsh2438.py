# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

def solution(s):
    len_s = len(s)
    if len_s % 2 == 1:
        s += "_"
        len_s += 1

    return [f"{s[i]}{s[i+1]}" for i in range(0, len_s, 2)]
