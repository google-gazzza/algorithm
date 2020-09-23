# sort-my-textbooks
# Sort My Textbooks
# difficulty: 8kyu
# https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/solutions/python

def sorter(textbooks):
    return list(sorted(textbooks, key=lambda e: e.lower()))


from unittest import TestCase

TestCase().assertEqual(sorter(['Algebra', 'History', 'Geometry', 'English']),
                       ['Algebra', 'English', 'Geometry', 'History'], 'Does not sort strings')
TestCase().assertEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
                       ['Algebra', 'english', 'Geometry', 'history'], 'Does not handle capitalization')
TestCase().assertEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']),
                       ['$istory', '**english', 'Alg#bra', 'Geom^try'], 'Does not handle symbols')
