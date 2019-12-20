// 나머지 - https://www.acmicpc.net/problem/10430
// 시간 76ms | 메모리 13052KB
// 세개의 숫자를 받아서 연산을 하는 간단한 문제입니다.
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

        String[] nums = input.split(" ");

        int a = Integer.parseInt(nums[0]);
        int b = Integer.parseInt(nums[1]);
        int c = Integer.parseInt(nums[2]);

        System.out.println((a + b) % c);
        System.out.println((a % c + b % c) %c);
        System.out.println((a * b) % c);
        System.out.println((a % c * b % c) %c);

        br.close();
        bw.flush();
        bw.close();
    }
}


