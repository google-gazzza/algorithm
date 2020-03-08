// https://www.acmicpc.net/problem/4344
// 시간 : 120 ms ,  자바 언어로 구현
// 메모리 : 15212 KB

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class Main{
    public static void main(String[] args) throws IOException {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int sum = 0;
        int average;
        int averageOverCount = 0;
        int caseCount;
        int n = Integer.parseInt(bufferedReader.readLine());

        for (int i = 0; i < n; i++) {
            String[] temp = bufferedReader.readLine().split(" ");
            caseCount = Integer.parseInt(temp[0]);
            for (int j = 1; j <= caseCount; j++) {
                sum += Integer.parseInt(temp[j]);
            }
            average = sum / caseCount;
            for (int j = 1; j <= caseCount; j++) {
                if (Integer.parseInt(temp[j]) > average) averageOverCount++;
            }

            bufferedWriter.write(String.format("%04.3f%%%n", Math.round(((float) averageOverCount / (float) caseCount) * 100000) / 1000.0));

            sum = 0;
            averageOverCount = 0;
        }
        bufferedWriter.flush();
    }
}