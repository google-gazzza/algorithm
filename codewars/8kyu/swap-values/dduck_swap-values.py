# https://www.codewars.com/kata/swap-values/

swap_values = lambda arr: [arr, arr.reverse()][0]

arr = [1, 2]
# print()
print(swap_values(arr))
