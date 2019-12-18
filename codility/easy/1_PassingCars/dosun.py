"""https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

Count the number of passing cars on the road.
Task Score  : 70%
Correctness : 100%
Performance : 40%

result : https://app.codility.com/demo/results/trainingX2A7KY-C4A/
"""
def solution(A):
    cars = 0
    result = 0
    for a in A:
        if a == 0: cars += 1
        else: result += cars
    return result
