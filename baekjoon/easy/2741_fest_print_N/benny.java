// https://www.acmicpc.net/problem/2741
// 시간 : 196 ms ,  자바 언어로 구현
// 메모리 : 31004 KB

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main{
    public static void main(String[] args){
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder stringBuilder = new StringBuilder();
        try {
            int n = Integer.parseInt(bufferedReader.readLine());
            for(int i = 1; i <= n; i++){
                stringBuilder.append(i + "\n");
            }
            System.out.println(stringBuilder.toString());
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}