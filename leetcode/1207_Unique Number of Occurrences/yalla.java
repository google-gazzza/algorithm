// https://leetcode.com/problems/unique-number-of-occurrences/submissions/
// Runtime: 2 ms, faster than 87.56% of Java online submissions for Unique Number of Occurrences.
// Memory Usage: 35.7 MB, less than 100.00% of Java online submissions for Unique Number of Occurrences.


//배열 종류의 갯수와 각 종류별 개수가 일치하는지 판단
//Map에 넣고, Map에 넣은값의 개수를 비교
//Map쓰고, Map의 넣은 숫자의 종류를 판단 Set
class Solution {
  public boolean uniqueOccurrences(int[] arr) {
    if(arr.length == 0) return false;

    Map<Integer,Integer> map = new HashMap<>();
    int count = 0;

    for(int val : arr){
      if(map.containsKey(val) == false){
        map.put(val, 1);
      }else{
        map.put(val, map.get(val)+1);
      }
    }

    Set<Integer> set = new HashSet<>();
    set.addAll(map.values());

    return map.size() == set.size();
  }
}