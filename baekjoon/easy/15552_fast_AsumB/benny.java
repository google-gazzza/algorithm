// https://www.acmicpc.net/problem/15552
// 시간 : 996ms ,  자바로 구현
// 메모리 : 285452 KB
// BufferedReader와 BufferedWriter을 어떤 식으로 활용하는지 몰라 https://hongku.tistory.com/227 블로그의 글을 이해하며 따라 하였습니다.
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
    public static void main(String[] args) {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        try {
            int n = Integer.parseInt(bufferedReader.readLine());
            for(int i=0; i<n; i++) {
                String[] temp = bufferedReader.readLine().split(" ");
                bufferedWriter.write(Integer.parseInt(temp[0])+Integer.parseInt(temp[1])+"\n");
            }

            bufferedWriter.flush();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }
}