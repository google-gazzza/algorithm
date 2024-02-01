// https://leetcode.com/problems/count-and-say/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Count and Say.
// Memory Usage: 36.8 MB, less than 42.10% of Java online submissions for Count and Say.
class Solution {
    public String countAndSay(int n) {
        if(n == 1) return "1";
        String result = "1";
        for(int i=1; i< n; i++){
            result = makeStr(result);
        }
        return result;
    }

    private String makeStr(String result){
        StringBuilder sb = new StringBuilder();
        char strNum = result.charAt(0);
        int count = 1;
        for(int i=1; i < result.length(); i++){
            if(result.charAt(i) == strNum){
                count++;
            }else{
                sb.append(count);
                sb.append(strNum);
                count = 1;
                strNum = result.charAt(i);
            }
        }
        sb.append(count);
        sb.append(strNum);
        return sb.toString();
    }
}