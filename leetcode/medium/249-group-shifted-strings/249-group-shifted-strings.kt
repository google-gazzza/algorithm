class Solution {
    fun getSeuqnece(str: String): String {
        val sb = StringBuilder()
        val chars = str.toCharArray()
        val offset = chars[0] - 'a'

        for (i in chars.indices) {
            var c = chars[i] - offset

            if (c < 'a') {
                c += 26
            }

            sb.append(c.toChar())
            if (i != chars.lastIndex) {
                sb.append(",")
            }
        }

        return sb.toString()
    }


    fun groupStrings(strings: Array<String>): List<List<String>> {
        val hashMap = HashMap<String, ArrayList<String>>()

        strings.forEach { str ->
            val sequence = getSeuqnece(str)

            if (hashMap.containsKey(sequence)) {
                hashMap[sequence]?.add(str)
            } else {
                hashMap[sequence] = arrayListOf(str)
            }
        }

        return hashMap.values.toList()
    }
}
