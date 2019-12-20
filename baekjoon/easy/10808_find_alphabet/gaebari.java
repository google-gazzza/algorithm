// 알파벳 찾기 - https://www.acmicpc.net/problem/10808
// 시간 72ms | 메모리 12996KB
// 알파벳을 찾으며 무너진 멘탈을 회복할 수 있는 힐링 문제 입니다.
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

        int [] res = new int[26];

        for (int i = 0; i < input.length(); i++) {
            res[input.charAt(i)-'a']++;
        }

        for (int i = 0; i < res.length; i++) {
            System.out.print(res[i]+" ");
        }
        System.out.println();

        br.close();
        bw.flush();
        bw.close();
    }
}


