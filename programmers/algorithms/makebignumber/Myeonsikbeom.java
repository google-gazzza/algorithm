class Solution {
    public String solution(String number, int k) {
        String answer = "";
        int i =0;
        int length = number.length()-k;
        int start = 0;
        while(i<length){
            char max='0';
            for(int j=start;j<number.length();j++){
                char c = number.charAt(j);
                if(j+(length-i) > number.length()){
                    break;
                }
                if(c > max){
                    max = c;
                    start = j+1;
                    if(c=='9'){
                        break;
                    }
                }
            }
            answer += Character.toString(max);
            i++;
        }
        return answer;
    }
}