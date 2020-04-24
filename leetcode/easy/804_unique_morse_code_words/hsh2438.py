"""
https://leetcode.com/problems/unique-morse-code-words/
Runtime: 28 ms, faster than 92.42% of Python3 online submissions for Unique Morse Code Words.
Memory Usage: 14 MB, less than 5.00% of Python3 online submissions for Unique Morse Code Words.
"""


class Solution:
    def __init__(self):
        self.dic = {"a":".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.","g":"--.","h":"....","i":"..","j":".---","k":"-.-","l":".-..","m":"--","n":"-.","o":"---","p":".--.","q":"--.-","r":".-.","s":"...","t":"-","u":"..-","v":"...-","w":".--","x":"-..-","y":"-.--","z":"--.."}
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morses = set()
        for word in words:
            morses.add(''.join([self.dic[ch] for ch in word]))
        
        return len(morses)
                
