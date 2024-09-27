// https://leetcode.com/problems/letter-case-permutation/submissions/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Letter Case Permutation.
// Memory Usage: 39.6 MB, less than 77.20% of Java online submissions for Letter Case Permutation.
class Solution {
	// 알파벳이면 대문자경우와 소문자경우를 모두 결과값에 반환,
	// 숫자면 그냥 반환
	// backtracking
	public List<String> letterCasePermutation(String S) {
		char[] chars = S.toCharArray();
		List<String> ret = new ArrayList<>();
		backTracking(chars, ret, 0);
		return ret;
	}

	private void backTracking(char[] chars, List<String> ret, int position){
		if(position == chars.length){
			ret.add(new String(chars));
		}else {
			char c = chars[position];
			if(isAlphabet(c)){
				chars[position] = Character.toLowerCase(c);
				backTracking(chars, ret, position +1);
				chars[position] = Character.toUpperCase(c);
				backTracking(chars, ret, position +1);
			}else{
				backTracking(chars, ret, position +1);
			}
		}
	}

	private boolean isAlphabet(char c){
		return (c >= 'a' && c<= 'z') || (c >= 'A' && c<= 'Z');
	}


}