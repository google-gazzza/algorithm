
/**
 https://leetcode.com/problems/decode-the-message/
 runtime:11ms
 memory:43.46mb
 */
class Solution {
    public String decodeMessage(String key, String message) {
        Map<Character,Character> keyMap = new HashMap<>();
        StringBuilder answer = new StringBuilder();
        key = key.replaceAll(" ","");
        char alphabat = 'a';
        for(int i=0;i<key.length();i++){
            char keyChar = key.charAt(i);
            if( !keyMap.containsKey(keyChar)){
                keyMap.put(keyChar, alphabat ++ );
            }
        }
        for(int i=0;i<message.length();i++){
            char messageChar = message.charAt(i);
            if(keyMap.containsKey(messageChar)){
                answer.append(keyMap.get(messageChar));
            }else{
                answer.append(messageChar);
            }

        }
        return answer.toString();
    }
}