"""
https://leetcode.com/problems/top-k-frequent-words/
Runtime: 60 ms, faster than 48.98% of Python3 online submissions for Top K Frequent Words.
Memory Usage: 13.9 MB, less than 8.33% of Python3 online submissions for Top K Frequent Words.
"""


from collections import Counter


class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:                
        
        new_dict = {}
        for key, value in Counter(words).most_common():
            if value in new_dict.keys():
                new_dict[value].append(key)
            else:
                new_dict[value] = [key]

        count = 0
        results = []
        for key, value in sorted(new_dict.items(), key=lambda x:x[0], reverse=True):
            for word in sorted(value):
                results.append(word)
                count += 1
                if count == k:
                    return results
