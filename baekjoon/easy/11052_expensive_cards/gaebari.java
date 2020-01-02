// 카드 구매하기 - https://www.acmicpc.net/problem/11052
// 시간 100ms | 메모리 13524KB
// 비싼 카드를 좋아하는 사람의 카드 고르는 방식을 구현한다.
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
        }

        for (int i = 1; i <= target_num; i++) {
            for (int j = 1; j <= i; j++) {
                results[i] = Math.max(results[i], results[i - j] + nCardList[j]);
            }
        }

        System.out.println(results[target_num]);

        br.close();
        bw.flush();
        bw.close();
    }
}
