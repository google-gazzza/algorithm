# https://www.codewars.com/kata/64fc03a318692c1333ebc04c/

def best_friend(txt, a, b):
    for word in txt.split():
        for i, ch in enumerate(word):
            if ch == a:
                if len(word) - 1 == i:
                    return False
                elif word[i+1] != b:
                    return False
    return True
