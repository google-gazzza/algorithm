// [JS][6kyu] Palindrome for your Dome
// palindrome-for-your-dome
// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

const palindrome = (string) => {
  const cleaned = string
    .split('')
    .filter((char) => char.match(/[a-z0-9]/i))
    .join('')
    .toLowerCase()
  return cleaned === cleaned.split('').reverse().join('')
}

palindrome('') === true
palindrome('101') === true
palindrome('911') === false
palindrome('RotaTor') === true
palindrome('A man, a plan, a canal - Panama') === true
palindrome("Abba Zabba, you're my only friend") === false
palindrome('Under_scores; Serocsrednu') === true
palindrome('Eva: Can I see bees in a cave?') === true
palindrome("Madam? I'm Adam!") === true
