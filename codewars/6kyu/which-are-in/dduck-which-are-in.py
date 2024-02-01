# which-are-in
# https://www.codewars.com/kata/550554fd08b86f84fe000a58/

from unittest import TestCase


def in_array(array1, array2):
    return sorted(
        filter(
            lambda x: max(
                list(
                    map(lambda y: y.find(x), array2)
                ) + [-1]
            ) > -1,
            list(set(array1))
        )
    )


# it's imitation of JavaScript best practice

a1 = ["live", "arp", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
r = ['arp', 'live', 'strong']
TestCase().assertEqual(in_array(a1, a2), r)

a1 = ['arp', 'mice', 'bull']
a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']
r = ['arp']
TestCase().assertEqual(in_array(a1, a2), r)

a1 = ['duplicates', 'duplicates']
a2 = ['duplicates', 'duplicates']
r = ['duplicates']
TestCase().assertEqual(in_array(a1, a2), r)
