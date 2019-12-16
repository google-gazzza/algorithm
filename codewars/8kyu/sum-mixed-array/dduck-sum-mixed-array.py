# https://www.codewars.com/kata/sum-mixed-array

sum_mix = lambda nums: sum(map(lambda num: int(num), nums))

print(sum_mix([9, 3, '7', '3']))
# , 22);
print(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
# , 42);
print(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))\
# , 41);
