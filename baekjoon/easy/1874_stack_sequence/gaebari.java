// https://www.acmicpc.net/problem/1874
// 멘탈이 붕괴된 문제
// @TODO 시간 초과 코드
// stack 문제라고 만만하게 보았는데 풀 수가 없다... 무엇이 문제일까... 시간 초과가 뜬다.
// from: gaebari

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        // 괄호가 주어지면 해당 괄호가 정상적인 경우인 것을 찾아라

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        Stack<String> stack = new Stack<String>();

        String input = "";

        input = br.readLine();
        int n = Integer.parseInt(input);

        List<String> outputList = new ArrayList<String>();
        List<String> results = new ArrayList<String>();
        int count = 0;
        int while_count = 0;
        //라인을 읽는다.
        for (int i = 0; i < n; i++) {
            input = br.readLine();

            //뺀 숫자중에 앞으로 넣을 숫자가 있으면 수열을 만들 수 없으으로 No를 return 한다.
            String tmp = input;
            if ( !outputList.isEmpty() && outputList.indexOf(input) > -1 && stack.search(input) == -1 ) {
                System.out.println("NO");
                return;
            }
            // 값이 위에 있으며 값을 채워주고 아래면 값을 빼준다.
            int last_num = stack.empty() ? 0 : Integer.parseInt(stack.peek());
            int tmp_i = Integer.parseInt(input);
            if ( last_num < tmp_i) {
                if (stack.empty()) {
                    results.add("+");
                    stack.push(Integer.toString(++count));
                    while_count++;
                }

                while (count < tmp_i) {
                    results.add("+");
                    stack.push(Integer.toString(++count));
                }
                while_count = 0;

                //마지막에 숫자를 꺼낸다.
                results.add("-");
                outputList.add(stack.pop());

            } else if (last_num > tmp_i ) {
                while ( !stack.empty() && while_count++ < Math.abs(count - Integer.parseInt(stack.peek()))) {
                    results.add("-");
                    outputList.add(stack.pop());
                }
                while_count = 0;
            } else {
                results.add("-");
                outputList.add(stack.pop());
            }

        }

        int results_count = 0;
        while (results_count++ < results.size() - 1) {
            System.out.println(results.get(results_count));
        }
        br.close();
        bw.flush();
        bw.close();

    }
}


