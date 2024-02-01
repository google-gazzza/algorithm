/*
* https://leetcode.com/problems/maximum-number-of-balloons/
* Runtime: 4 ms, faster than 42.50% of Java online submissions for Maximum Number of Balloons.
* Memory Usage: 38.7 MB, less than 100.00% of Java online submissions for Maximum Number of Balloons.
*/


class Solution {
    public int maxNumberOfBalloons(String text) {
        int min= 2147483647;
        HashSet<Character> vowels = new HashSet<>(Arrays.asList('b','a','l','o','n'));
        Map<Character, Integer> map = new HashMap<>();

        char[] textArray = text.toCharArray();
        for(int i = 0; i<textArray.length ; i++){
            if(vowels.contains(textArray[i])){
                map.put(textArray[i], map.getOrDefault(textArray[i], 0)+1);
            }
        }
        if(map.size()!= 5){
            return 0;
        }
        for(char ch : map.keySet()){
            int frequency = 0;
            if(ch == 'l' || ch == 'o'){
                frequency = map.get(ch)/2;
            }else{
                frequency = map.get(ch);
            }
            if(min > frequency){
                min = frequency;
            }
        }
        return min;
    }
}
