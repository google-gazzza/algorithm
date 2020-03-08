// 알파벳 찾기 - https://www.acmicpc.net/problem/2743
// 시간 72ms | 메모리 12996KB
// 알고리즘 보다는 문법 확인하는 것에 가깝습니다. 힐링을 위해 쉬운 문제를 선택했으나 힐링보다는 김빠지는 문제입니다.
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

        System.out.println(input.length);

        br.close();
        bw.flush();
        bw.close();
    }
}


