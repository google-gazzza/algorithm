// https://www.acmicpc.net/problem/4344
// 시간 : 116 ms ,  자바 언어로 구현
// 메모리 : 15192 KB

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main{
    public static void main(String[] args) {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int sum = 0;
        int average;
        int averageOverCount = 0;
        int caseCount;

        try {
            int n = Integer.parseInt(bufferedReader.readLine()); // 1. n을 받는다.

            for (int i = 0; i < n; i++) { // 2. n개의 값을 받기 위해 n만큼 for문을 돌린다.
                String[] temp = bufferedReader.readLine().split(" "); // 3. 값의 갯수와 값들을 분리한
                caseCount = Integer.parseInt(temp[0]); // 4. 값의 갯수
                for (int j = 1; j <= caseCount; j++) { // 5. 합을 구하기 위해 값의 갯수만큼 반복
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
        } catch (Exception e){
            e.printStackTrace();
        }

    }
}