// 설탕 배달 - https://www.acmicpc.net/problem/2839
// 시간 224ms | 메모리 18180KB
// 그리디
public class Main {
	// 5키로 봉지와 3키로 봉지가 있다.
	// N 킬로그램의 설탕을 옮길때 봉지 몇개를 가져가야 하는지 구하시오.
	// Greedy로 풀기
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = Integer.parseInt(sc.next());
		int result = solution(N);
		System.out.println(result);
	}

	private static int solution(int n) {
		int result = 0;
		while (true) {
			if (n % 5 == 0) {
				result = n / 5 + result;
				break;
			} else if (n <= 0) {
				result = -1;
				break;
			}
			n = n - 3;
			result++;
		}
		return result;
	}
}
