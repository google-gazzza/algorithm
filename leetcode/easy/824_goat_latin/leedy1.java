/*
 * https://leetcode.com/problems/goat-latin/submissions/
 * Runtime: 6 ms, faster than 36.71% of Java online submissions for Goat Latin.
 * Memory Usage: 39 MB, less than 6.67% of Java online submissions for Goat Latin.
*/

class Solution {
    public String toGoatLatin(String S) {
        String result = "";
        String[] wordArr = S.split(" ");
        HashSet<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));

        StringBuilder suffix = new StringBuilder("a");

        for(String word : wordArr) {

            StringBuilder sb = new StringBuilder();
            sb.append(word);

            char firstChar = word.toLowerCase().charAt(0);

            if(vowels.contains(firstChar)){
                sb.append("ma");
            } else {
                char temp = word.charAt(0);
                sb.deleteCharAt(0);
                sb.append(temp).append("ma");
            }

            sb.append(suffix).append(" ");
            suffix.append("a");
            result+= sb.toString();
        }
        return result.replaceAll("\\s+$", "");
    }
}
