// https://www.acmicpc.net/problem/9012
// 괄호 - https://www.acmicpc.net/problem/9012
// 시간 92ms | 메모리 13228KB
// gaebari

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        // 괄호가 주어지면 해당 괄호가 정상적인 경우인 것을 찾아라

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        Stack<Character> stack = new Stack<Character>();

        String input = "";

        String nStr = br.readLine();
        int n = Integer.parseInt(nStr);

        //라인을 읽는다.
        for (int i = 0; i < n; i++) {
            input = br.readLine();

            input += "\n";
            //마지막을 의미할 개행문자 하나를 추가

            StringBuilder sb = new StringBuilder("");
            //char들을 더 할 StringBuilder 생성

            // 문자열 길이만큼 반복하는데
            for (int j = 0; j < input.length(); j++) {
                //열린 괗로를 찾으면 스택에 넣어준다.
                if (input.charAt(j) == '(') {
                    stack.push(input.charAt(j));
                }

                if (input.charAt(j) == ')') {
                    if (stack.empty()) {
                        System.out.println("NO");
                        break;
                    } else {
                        stack.pop();
                    }
                }
                if (j == input.length() - 1) {
                    if (!stack.empty()) {
                        System.out.println("NO");
                    } else {
                        System.out.println("YES");
                    }
                    stack.clear();
                }
            }
        }

        br.close();
        bw.flush();
        bw.close();
        //reder와 writer를 닫는다.
    }
}
