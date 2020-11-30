https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

	// Complete the twoStrings function below.
	static String twoStrings(String s1, String s2) {
		Set<String> dic1 = new HashSet<>();
		Set<String> dic2 = new HashSet<>();
		String[] sp1 = s1.split("");
		String[] sp2 = s2.split("");
		for(String s : sp1){
			dic1.add(s);
		}
		for(String s : sp2){
			dic2.add(s);
		}
		for(String s : dic1){
			if(dic2.contains(s)){
				return "YES";
			}
		}
		return "NO";
	}

	static String timeOver(String s1, String s2){
		char[] c2 = s2.toCharArray();
		for(char c : c2){
			if(s1.indexOf(c) > -1){
				return "YES";
			}
		}
		return "NO";
	}

	private static final Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) throws IOException {
		BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

		int q = scanner.nextInt();
		scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

		for (int qItr = 0; qItr < q; qItr++) {
			String s1 = scanner.nextLine();

			String s2 = scanner.nextLine();

			String result = twoStrings(s1, s2);

			bufferedWriter.write(result);
			bufferedWriter.newLine();
		}

		bufferedWriter.close();

		scanner.close();
	}
}
