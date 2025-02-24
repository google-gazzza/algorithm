// [Medium] 5. Longest Palindromic Substring
// 5_longest_palindromic_substring

// https://leetcode.com/problems/longest-palindromic-substring
// Runtime: 692 ms, faster than 32.00% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 46.3 MB, less than 20.45% of JavaScript online submissions for Longest Palindromic Substring.

const isPalindrome = (str) => str.split('').reverse().join('') === str

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let resultStr = ''
  let adjustS = s
    .split('')
    .reduce((acc, cur) => acc + '#' + cur, '')
    .substring(1)
  const adjustSLen = adjustS.length
  const getPalindromeFromIndex = (index) => {
    let result = adjustS[index]
    let left = index - 1
    let right = index + 1
    while (left >= 0 && right < adjustSLen) {
      const leftAdjustS = adjustS[left]
      const rightAdjustS = adjustS[right]
      if (leftAdjustS !== rightAdjustS) {
        break
      }
      left -= 1
      right += 1
      result = leftAdjustS + result + rightAdjustS
    }
    return result.split('#').join('')
  }

  for (let i = 0; i < adjustSLen; i += 1 || 0) {
    const palindromeStr = getPalindromeFromIndex(i)
    if (palindromeStr.length > resultStr.length) {
      resultStr = palindromeStr
    }
  }

  return resultStr
}

// TLE
const longestPalindrome2 = function (s) {
  const sLen = s.length
  let candidateStr = ''
  const dfs = (start, str) => {
    if (isPalindrome(str) === true && candidateStr.length < str.length) {
      candidateStr = str
    }
    if (start >= sLen) {
      return
    }
    dfs(start + 1, str + s[start])
  }
  for (let i = 0; i < sLen; i += 1 || 0) {
    dfs(i + 1, s[i])
  }

  return candidateStr
}

// longestPalindrome('babad') //?
// longestPalindrome('cbbd') //?
// longestPalindrome('a') //?
// longestPalindrome('aa') //?
// longestPalindrome('ac') //?
// longestPalindrome('aacabdkacaa') //?

// longestPalindrome('aadcbbbcaa') //?
// longestPalindrome('aadcbbbcaaa') //?

longestPalindrome('aaacbbcabaa') //?
// longestPalindrome('aacabdkacaa') //?
// longestPalindrome('aacabdkac') //?
// longestPalindrome('babaddtattarrattatddetartrateedredividerb') //?

// longestPalindrome(
//   'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
// ) //?
