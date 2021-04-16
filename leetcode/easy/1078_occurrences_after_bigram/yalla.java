// https://leetcode.com/problems/occurrences-after-bigram
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Occurrences After Bigram.
// Memory Usage: 36.9 MB, less than 82.18% of Java online submissions for Occurrences After Bigram.

class Solution {
	public String[] findOcurrences(String text, String first, String second) {
		String[] strs = text.split(" ");
		List<String> result = new ArrayList<>();
		for(int i = 0; i < strs.length -2; i++){
			if(first.equals(strs[i]) && second.equals(strs[i+1])){
				result.add(strs[i+2]);
			}
		}
		return result.toArray(new String[result.size()]);

	}
}