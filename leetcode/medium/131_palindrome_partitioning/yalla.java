// https://leetcode.com/problems/palindrome-partitioning/
// Runtime: 7 ms, faster than 99.41% of Java online submissions for Palindrome Partitioning.
// Memory Usage: 52.9 MB, less than 52.97% of Java online submissions for Palindrome Partitioning.
// 뒤짚어도 palindrome인 모든 집합

class Solution {
	public List<List<String>> partition(String s) {
		List<List<String>> ret = new ArrayList<>();
		dfs(ret,s, new ArrayList<>(), 0);
		return ret;
	}

	private void dfs(List<List<String>> ret, String s, ArrayList<String> tempList, int position) {
		if(s.length() == position){
			ret.add(new ArrayList<>(tempList));
			return;
		}

		for (int i = position; i < s.length(); i++) {
			if(isPalindrome(s, position, i)){
				tempList.add(s.substring(position, i + 1));
				dfs(ret, s, tempList, i +1);
				tempList.remove(tempList.size() -1);
			}

		}
	}

	private boolean isPalindrome(String s, int start, int end) {
		while(start < end){
			if(s.charAt(start) != s.charAt(end)){
				return false;
			}
			start++;
			end--;
		}
		return true;
	}
}