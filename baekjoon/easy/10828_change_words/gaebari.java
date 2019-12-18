// 단어 변환하기 - https://www.acmicpc.net/problem/9093
// 시간 736ms | 메모리 83532KB
// gaebari
// 인터넷에 나와있는 코드를 작성한 것 입니다.
// java에 아직 능숙하지 못해 입력 값을 읽어오는 것, 사용하는 것 같이 간단한 사용법 먼저 익숙해지려고 합니다.
// 어느 정도 능숙해 지면 해당 부분은 다른 방법으로 접근해서 다시 풀어보도록 하겠습니다.

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        // 값을 읽어오기
        // 읽어온 값을 조건에 마춰서 출력한다.
        // 1. 태그로 시작하는지 / 2. 태그의 끝을 만났는지 / 3. 태그의 끝을 만났다면 출력한다.
        // 태그가 없는 경우 스페이스가 나타나면 이전에 쌓았던 값들을 출력한다.
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

            // 문자열 길이만큼 반복하느데
            for (int j = 0; j < input.length(); j++) {
                if (input.charAt(j) == ' ' || input.charAt(j) == '\n') {
                    //띄어쓰기를 만난 경우
                    while (!stack.isEmpty()) {
                        //stac이 빌 때까지
                        sb.append(stack.peek());
                        //stack의 가장 윗 값을 sb에 더하고
                        stack.pop();
                        //stack을 비운다.
                    }
                    // stack이 모두 비고 마지막이 아니며 띄어쓰기도 더한다.
                    // 마지막에 띄어쓰기나 줄바꿈이 안볼게 추가
                    if (input.charAt(j) == ' ') {
                        sb.append(input.charAt(j));
                    }

                } else {
                    // 문자인 경우 스택에 집어 넣는다.
                    stack.push(input.charAt(j));
                }
            }
            bw.write(sb.toString() + "\n");
            //그렇게 모인 sb를 출력하고
        }

        br.close();
        bw.flush();
        bw.close();
        //reder와 writer를 닫는다.
    }
}
