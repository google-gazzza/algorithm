// https://leetcode.com/problems/most-common-word/
// Runtime: 14 ms, faster than 58.61% of Java online submissions for Most Common Word.
// Memory Usage: 39 MB, less than 80.53% of Java online submissions for Most Common Word.
class Solution {
	public String mostCommonWord(String paragraph, String[] banned) {
		String result = "";
		//1. banned를 검증
		Set<String> bannedWords = new HashSet<>(Arrays.asList(banned));

		// 2.paragraph의 문자열 제거
		String[] filterWords = paragraph.replaceAll("\\W+" , " ").toLowerCase().split("\\s+");

		//3. 문자열 map 생성
		Map<String, Integer> map = new HashMap<>();
		for (String word : filterWords) {
			if(!bannedWords.contains(word)){
				map.put(word, map.getOrDefault(word, 0) + 1);
			}
		}

		//4. 가장 높은값 찾기
		int count = 0;
		for(Map.Entry<String, Integer> entry : map.entrySet()){
			if(entry.getValue() > count){
				count = entry.getValue();
				result = entry.getKey();
			}
		}

		return result;
	}
}