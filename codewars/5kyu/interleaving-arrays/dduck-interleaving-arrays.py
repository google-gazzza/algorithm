# https://www.codewars.com/kata/523d2e964680d1f749000135

def interleave(*args):
    result = []
    for i in range(max([len(x) for x in args])):
        result.append([x[i] if len(x) > i else None for x in args])

    while len(result) > 0 and type(result[0]) == list:
        temp = []
        for item in result:
            [temp.append(x[1]) for x in enumerate(item)]
            result = temp

    return result


"""
best clever solution

from itertools import chain, zip_longest

def interleave(*args):
    return [*chain.from_iterable(zip_longest(*args))]
"""

# assert (interleave([1, 2, 3], ["c", "d", "e"]), [1, "c", 2, "d", 3, "e"])
# assert interleave([1, 2, 3], [4, 5]) == [1, 4, 2, 5, 3, None]
# assert (interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 4, 7, 2, 5, 8, 3, 6, 9])
assert (interleave([]) == [])
