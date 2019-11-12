// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
// Runtime: 55 ms, faster than 9.01% of Java online submissions for First Unique Character in a String.
// Memory Usage: 38.3 MB, less than 96.43% of Java online submissions for First Unique Character in a String.

//map에 담으면서 count를 확인
//map에 담은 key값과 입력받은 s를 하나씩 비교해가며 1번만 나온 값을 확인
class Solution {
  public int firstUniqChar(String s) {
    if(s == null || s == "" || s.length() == 0) return -1;
    char[] c = s.toCharArray();
    Map<Character,Integer> map = new HashMap<>();
    for(int i=0; i<s.length(); i++){
      if(map.containsKey(c[i]) == false){
        map.put(c[i], 1);
      }else{
        map.put(c[i], map.get(c[i])+1);
      }
    }

    for(int i=0; i < s.length(); i++){
      if(map.get(s.charAt(i)) == 1){
        return i;
      }
    }

    return -1;
  }
}