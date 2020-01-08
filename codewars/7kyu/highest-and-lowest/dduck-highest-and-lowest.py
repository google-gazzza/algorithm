# https://www.codewars.com/kata/554b4ac871d6813a03000035

high_and_low = lambda n: ' '.join(str(x) for x in [sorted([int(x) for x in n.split()])[i] for i in (-1, 0)])

numString = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'

print(high_and_low(numString))
