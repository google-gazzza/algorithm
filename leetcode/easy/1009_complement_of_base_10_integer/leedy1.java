/*
* https://leetcode.com/problems/complement-of-base-10-integer/
* Runtime: 1 ms, faster than 30.74% of Java online submissions for Complement of Base 10 Integer.
* Memory Usage: 36.6 MB, less than 11.11% of Java online submissions for Complement of Base 10 Integer.
*/

class Solution {
    public int bitwiseComplement(int N) {
        char[] binaryChars = Integer.toBinaryString(N).toCharArray();
        StringBuilder builder = new StringBuilder();
        for(char chr : binaryChars){
            if(chr == '1'){
                builder.append('0');
            }else{
                builder.append('1');
            }
        }
        return Integer.parseInt(builder.toString(),2);
    }
}
