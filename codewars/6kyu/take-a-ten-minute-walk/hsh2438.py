# https://www.codewars.com/kata/54da539698b8a2ad76000228

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    start = 0
    for w in walk:
        if w == "n":
            start += 1
        elif w == "s":
            start -= 1
        elif w == "w":
            start += 2
        elif w == "e":
            start -= 2
    return True if start is 0 else False
