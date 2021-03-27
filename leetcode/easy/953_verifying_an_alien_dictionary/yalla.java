// https://leetcode.com/problems/verifying-an-alien-dictionary/
// Runtime: 1 ms, faster than 47.84% of Java online submissions for Verifying an Alien Dictionary.
// Memory Usage: 39.1 MB, less than 22.00% of Java online submissions for Verifying an Alien Dictionary.
class Solution {
	Map<Character, Integer> dic = new HashMap<>();

	public boolean isAlienSorted(String[] words, String order) {
		for (int i = 0; i < order.length(); i++) {
			dic.put(order.charAt(i), i);
		}

		for (int i = 0; i < words.length - 1; i++) {
			if (!isSorted(words[i], words[i + 1])) return false;
		}
		return true;
	}

	private boolean isSorted(String w1, String w2) {
		for (int i = 0, j = 0; i < w1.length() && j < w2.length(); i++, j++) {
			if (w1.charAt(i) == w2.charAt(j)){
				continue;
			}else{
				if(dic.get(w1.charAt(i)) > dic.get(w2.charAt(j))){
					return false;
				}else{
					return true;
				}
			}
		}

		if(w1.length() > w2.length()) return false;

		return true;
	}
}