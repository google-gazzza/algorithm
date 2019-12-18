// 2 x n 타일링 2 - https://www.acmicpc.net/problem/11727
// 시간 72ms | 메모리 13012KB
// 2×n 직사각형을 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램 입니다.
// from: gaebari

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        // 라인을 읽는다.
        String input = br.readLine();

        int n = Integer.parseInt(input);

        int[] results = new int[n+1];

        results[0] = 0;
        if(n >= 1) results[1] = 1;
        if(n >= 2) results[2] = 3;

        for(int i=3; i < results.length; i++) {
            results[i] = (results[i-1] + 2 * results[i-2]) % 10007;
        }
        System.out.print(results[results.length-1]);

        br.close();
        bw.flush();
        bw.close();
    }
}


