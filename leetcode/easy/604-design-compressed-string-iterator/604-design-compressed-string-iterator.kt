fun parseString(str: String): List<Pair<Char, Int>> {
    val regex = Regex("""\d+|[a-zA-Z]+""")
    val matches = regex.findAll(str).map { it.value }.toList()
    val result = mutableListOf<Pair<Char, Int>>()

    for (i in matches.indices step 2) {
        val word = matches[i].single() // Convert String to Char
        val number = matches.getOrNull(i + 1)?.toIntOrNull() ?: continue
        result.add(Pair(word, number))
    }

    return result
}

class StringIterator(private val compressedString: String) {
    private var complessedList: List<Pair<Char, Int>>
    private var currentChar: Char = ' '  // Default empty value
    private var currentCount: Int = 0

    init {
        complessedList = parseString(compressedString)
        if (complessedList.isNotEmpty()) {
            currentChar = complessedList[0].first
            currentCount = complessedList[0].second
        }
    }

    private fun moveToNextValid() {
        while (complessedList.isNotEmpty() && currentCount == 0) {
            currentChar = complessedList[0].first
            currentCount = complessedList[0].second
            if (currentCount > 0) break
            complessedList = complessedList.drop(1)
        }
    }

    fun next(): Char {
        val result = currentChar
        currentCount--
        if (currentCount <= 0) {
            complessedList = complessedList.drop(1)
            moveToNextValid()
        }
        if (currentCount <= 0) {
            currentChar = ' '
        }
        return result
    }

    fun hasNext(): Boolean {
        return currentCount > 0 || complessedList.isNotEmpty()
    }
}
