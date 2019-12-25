// https://leetcode.com/problems/count-and-say/
// Runtime: 2 ms, faster than 68.38% of Java online submissions for Count and Say.
// Memory Usage: 34 MB, less than 100.00% of Java online submissions for Count and Say.

class Solution {
    public String countAndSay(int n) {
        String str = "1";
        for (int i = 1; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            int count = 1;
            char prev = str.charAt(0);
            for (int j = 1; j < str.length(); j++) {
                if (prev != str.charAt(j)) {
                    sb.append(count);
                    sb.append(prev);
                    count = 0;
                }
                count++;
                prev = str.charAt(j);
            }
            sb.append(count);
            sb.append(prev);
            str = sb.toString();
        }
        return str;
    }
}