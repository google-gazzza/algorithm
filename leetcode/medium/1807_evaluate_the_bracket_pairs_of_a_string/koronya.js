// [Medium] 1807. Evaluate the Bracket Pairs of a String
// 1807_evaluate_the_bracket_pairs_of_a_string

// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string
// Runtime: 308 ms, faster than 50.20% of JavaScript online submissions for Evaluate the Bracket Pairs of a String.
// Memory Usage: 76.7 MB, less than 69.39% of JavaScript online submissions for Evaluate the Bracket Pairs of a String.

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = function (s, knowledge) {
  const knowMap = new Map()
  knowledge.forEach((item) => {
    const [key, value] = item
    knowMap.set(key, value)
  })
  let resultStr = ''
  const getMatchedStr = (str) => (knowMap.has(str) ? knowMap.get(str) : '?')
  s.split('(').map((item, index) => {
    if (index === 0) {
      resultStr += item
    } else {
      item.split(')').map((str, index) => {
        if (index === 0) {
          resultStr += getMatchedStr(str)
        } else {
          resultStr += str
        }
      })
    }
  })

  return resultStr
}

evaluate('(name)is(age)yearsold', [
  ['name', 'bob'],
  ['age', 'two'],
]) //?

evaluate('koro(name)is(age)yearsold', [
  ['name', 'bob'],
  ['age', 'two'],
]) //?

evaluate('hi(name)', [['a', 'b']]) //?
evaluate('(a)(a)(a)aaa', [['a', 'yes']]) //?
evaluate('(a)(b)', [
  ['a', 'b'],
  ['b', 'a'],
]) //?
