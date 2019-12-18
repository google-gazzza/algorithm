// https://www.acmicpc.net/problem/10818
// 시간 : 440 ms ,  자바 언어로 구현
// 메모리 : 117880 KB

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.io.IOException;
import java.util.StringTokenizer;


public class Main{
    public static void main(String[] args) throws IOException {
        // TODO Auto-generated method stub
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int parseValue;

        StringTokenizer st = new StringTokenizer(br.readLine());
        int max = -1000000;
        int min = 1000000;
        for(int i = 0; i < N; i++) {
            parseValue = Integer.parseInt(st.nextToken());
            if(parseValue > max) max = parseValue;
            if(parseValue < min) min = parseValue;
        }
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.write(min + " " + max);
        bw.flush();
        bw.close();
    }

}