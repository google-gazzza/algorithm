// 카드 구매하기 2 - https://www.acmicpc.net/problem/16194
// 시간 100ms | 메모리 13444KB
// 가성비 좋은 카드를 고르는 방법
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

        String input = br.readLine();

        int target_num = Integer.parseInt(input);

        input = br.readLine();
        String[] cardList = input.split(" ");

        int[] nCardList = new int[target_num+1];
        int[] results = new int[target_num+1];

        for (int i = 0; i < target_num; i++) {
            nCardList[i+1] = Integer.parseInt(cardList[i]) ;
            results[i+1] = -1;
        }

        for (int i = 1; i <= target_num; i++) {
            for (int j = 1; j <= i; j++) {
                if (results[i] == -1 || results[i] > results[i-j] + nCardList[j]){
                    results[i] = results[i-j] + nCardList[j];
                }
            }
        }

        System.out.println(results[target_num]);

        br.close();
        bw.flush();
        bw.close();
    }
}
