# https://www.codewars.com/kata/sum-mixed-array

# Additional info
# sum_mix1 = lambda nums: sum(map(lambda num: int(num), nums))
# --- 1.96412992477417 seconds ---

# sum_mix2 = lambda nums: functools.reduce(lambda x, y: x + y, map(int, nums))
# --- 1.8984999656677246 seconds ---

# sum_mix3 = lambda nums: sum(list(map(int, nums)))
# --- 0.9914741516113281 seconds ---

import time
import functools

sum_mix = lambda nums: sum(map(lambda num: int(num), nums))

print(sum_mix([9, 3, '7', '3']))
# , 22);
print(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
# , 42);
print(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])) \
    # , 41);


# measure some different way

arr = []

for i in range(1000000):
    arr.extend(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])

start_time = time.time()
sum_mix1 = lambda nums: sum(map(lambda num: int(num), nums))
sum_mix1(arr)
print("--- %s seconds ---" % (time.time() - start_time))
# --- 1.96412992477417 seconds ---

start_time = time.time()
sum_mix2 = lambda nums: functools.reduce(lambda x, y: x + y, map(int, nums))
sum_mix2(arr)
print("--- %s seconds ---" % (time.time() - start_time))
# --- 1.8984999656677246 seconds ---

start_time = time.time()
sum_mix3 = lambda nums: sum(list(map(int, nums)))
sum_mix3(arr)
print("--- %s seconds ---" % (time.time() - start_time))
# --- 0.9914741516113281 seconds ---
