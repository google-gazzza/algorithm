// https://leetcode.com/problems/valid-parentheses/submissions/
// Runtime: 7 ms, faster than 5.69% of Java online submissions for Valid Parentheses.
// Memory Usage: 39.8 MB, less than 5.06% of Java online submissions for Valid Parentheses.
class Solution {
    public boolean isValid(String s) {
        
        Stack<TOKEN> tokenStack = new Stack<>();

        for(char item : s.toCharArray()){
            TOKEN token = TOKEN.ValuOf(item);

            if(!tokenStack.empty() &&
                    tokenStack.peek().isCrash(token)){
                tokenStack.pop();
            }else{
                tokenStack.push(token);
            }
        }
        return tokenStack.empty();
    }
    
    enum TOKEN {
        CURLYLEFT('{', '}'),
        CURLYRIGHT('}', '{'),
        SQUARELEFT('[', ']'),
        SQUARERIGHT(']', '['),
        ROUNDLEFT('(', ')'),
        ROUNRIGHT(')', '('),
        EMPTY('*','*');

        private char tokenChar;
        private char tokenCrash;

        TOKEN(char tokenChar, char tokenCrash) {
            this.tokenChar = tokenChar;
            this.tokenCrash = tokenCrash;
        }

        static public TOKEN ValuOf(final char tokenChar){
            return Arrays.stream(TOKEN.values())
                    .filter(token -> token.tokenChar == tokenChar)
                    .findFirst()
                    .orElse(TOKEN.EMPTY);
        }

        public boolean isCrash(TOKEN tokenCrash){
           return this.tokenCrash == tokenCrash.tokenChar;
        }
    }
}