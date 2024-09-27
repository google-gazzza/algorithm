/**
 https://leetcode.com/problems/count-items-matching-a-rule/
 Runtime: 6ms
 Memory:46.96MB
 */
class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int answer = 0;
        for(List<String> itemInfo:items){
            if(ruleKey.equals("type")&& ruleValue.equals(itemInfo.get(0))){
                answer++;
            }else if(ruleKey.equals("color")&& ruleValue.equals(itemInfo.get(1))){
                answer++;
            }else if(ruleKey.equals("name")&& ruleValue.equals(itemInfo.get(2))){
                answer++;
            }
        }
        return answer;
    }
}