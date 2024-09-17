//https://leetcode.com/problems/group-anagrams/submissions/
//Runtime: 6 ms, faster than 81.35% of Java online submissions for Group Anagrams.
// Memory Usage: 42.1 MB, less than 64.21% of Java online submissions for Group Anagrams.

class Solution {
	public List<List<String>> groupAnagrams(String[] strs) {
		if(strs.length == 0) return new ArrayList<>();

		List<List<String>> ret = new ArrayList<>();
		// 1. anagram이 같은지 판단하는 기준을 map으로 비교
		Map<String, List<String>> map = new HashMap<>();

		// 2.put map
		for (String str : strs) {
			char[] chars = str.toCharArray();
			Arrays.sort(chars);
			String sortedKey = String.valueOf(chars);
			if(!map.containsKey(sortedKey)){
				List<String> inner = new ArrayList<>();
				inner.add(str);
				map.put(sortedKey, inner);
			}else{
				List<String> innerArray = map.get(sortedKey);
				innerArray.add(str);
			}
		}

		map.forEach((key, value) -> {
			ret.add(value);
		});

		return ret;
	}
}