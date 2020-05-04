''' 
https://leetcode.com/problems/unique-number-of-occurrences/
  
Runtime: 28 ms, faster than 94.55% of Python3 online submissions for Unique Number of Occurrences.
Memory Usage: 13.9 MB, less than 100.00% of Python3 online submissions for Unique Number of Occurrences.
'''
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        arr_counter_values = Counter(arr).values()
        unique_arr_count_values = set(arr_counter_values)
     
        return len(arr_counter_values) == len(unique_arr_count_values)
