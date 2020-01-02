// 최대공약수와 최소공배수 - https://www.acmicpc.net/problem/2609
// 시간 76ms | 메모리 12984KB
// 최대 공약수와 최소 공배수를 구하는 문제입니다.
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

        int tmp = 1;
        int a = Integer.parseInt(nums[0]);
        int b = Integer.parseInt(nums[1]);

        int b_tmp;
        int a_tmp;

        if (b > a) {
            b_tmp = a;
            a_tmp = b;
        } else{
            a_tmp = b;
            b_tmp = a;
        }

        //유클리드 호제법을 사용한다.
        while(tmp > 0) {
            tmp = a_tmp % b_tmp;
            a_tmp = b_tmp;
            b_tmp = tmp;
        }

        //최소 공배수 구하기
        int lcm = a * b / a_tmp;

        System.out.println(a_tmp);
        System.out.println(lcm);

        br.close();
        bw.flush();
        bw.close();
    }
}


