
class N91_Decode_Ways_Solution {
	public int numDecodings(String s) {
		char[] chars = s.trim().toCharArray();
		if (s.length() == 0)
			return 0;
		int ret = decodeRecursivly(chars, 0);
		return ret;
	}

	private int decodeRecursivly(char[] chars, int i) {
		int ret = 0;
		if (chars.length == i)
			return 1;
		if (parse(chars, i, 1))
			ret += decodeRecursivly(chars, i + 1);
		if (parse(chars, i, 2))
			ret += decodeRecursivly(chars, i + 2);
		return ret;
	}

	private boolean parse(char[] chars, int i, int length) {

		if (length == 1 && chars.length - i >= length && isValiate(Integer.parseInt(chars[i] + "")))
			return true;
		if (length == 2 && chars.length - i >= length && chars[i] != '0'
				&& isValiate(Integer.parseInt(chars[i] + "" + chars[i + 1])))
			return true;
		return false;
	}

	private boolean isValiate(int n) {
		return n > 0 && n < 27 ? true : false;
	}

}
