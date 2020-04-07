//https://leetcode.com/problems/print-words-vertically/
//Runtime: 15 ms, faster than 6.09% of Java online submissions for Print Words Vertically.
//Memory Usage: 42.2 MB, less than 100.00% of Java online submissions for Print Words Vertically.

class Solution {
    public List<String> printVertically(String s) {
        List<String> result = new ArrayList<>();

        String[] splitArr = s.split(" ");
        int maxLength = 0;
        for(String arr : splitArr){
            if(maxLength < arr.length()){
                maxLength = arr.length();
            }
        }
        for(int i = 0; i<maxLength; i++){
            StringBuilder builder = new StringBuilder();
            for(int j = 0; j<splitArr.length; j++){
                String[] temp = splitArr[j].split("");
                if(i>temp.length-1){
                    builder.append(" ");
                }else{
                    builder.append(temp[i]);
                }
            }
            result.add(builder.toString().replaceAll("\\s+$", ""));
        }
        return result;
    }
}
