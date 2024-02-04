"""
https://leetcode.com/problems/minimum-index-sum-of-two-lists/
Runtime: 356 ms, faster than 16.18% of Python3 online submissions for Minimum Index Sum of Two Lists.
Memory Usage: 13.9 MB, less than 11.11% of Python3 online submissions for Minimum Index Sum of Two Lists.
"""


class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        
        results = []
        
        dic = {}
        
        for idx, restaurant in enumerate(list1):
            if restaurant in list2:
                dic[restaurant] = idx + list2.index(restaurant)
                
        previous = -1
        for k, v in sorted(dic.items(), key=lambda x: x[1]):
            if previous == -1:
                previous = v
                results.append(k)
            else:
                if v == previous:
                    results.append(k)
                else:
                    break
        
        return results       
