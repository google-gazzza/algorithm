// https://leetcode.com/problems/valid-anagram
// Runtime: 3 ms, faster than 72.29% of Java online submissions for Valid Anagram.
// Memory Usage: 39.6 MB, less than 28.11% of Java online submissions for Valid Anagram.
class Solution {
	public boolean isAnagram(String s, String t) {
		if(s.length() != t.length()) return false;

		int[] arr = new int[26];

		for (int i = 0; i < s.length(); i++) {
			arr[s.charAt(i)-'a']++;
			arr[t.charAt(i)-'a']--;
		}

		for (int i : arr) {
			if(i != 0) return false;
		}

		return true;
	}
}