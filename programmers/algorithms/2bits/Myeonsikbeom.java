/*https://school.programmers.co.kr/learn/courses/30/lessons/77885*/
class Solution {
    public long[] solution(long[] numbers) {
        long[] answer = new long[numbers.length];
        for(int i=0;i<numbers.length;i++){
            long n = numbers[i];
            if(n %2 == 0){
                answer[i]=n+1;
            }else{
                String s = "";
                while(n!=0){
                    s += (n%2);
                    n /= 2;
                }
                StringBuffer sb = new StringBuffer(s);
                s = sb.reverse().toString();
                s = "0" + s;
                char[] arr = s.toCharArray();
                for(int j = arr.length-2;j>=0;j--){
                    if(arr[j] == '0'){
                        arr[j] = '1';
                        arr[j+1] = '0';
                        break;
                    }
                }
                answer[i]=Long.parseLong(new String(arr),2);

            }


        }

        return answer;
    }
}