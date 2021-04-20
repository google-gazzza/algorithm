// [Medium] 1807. Evaluate the Bracket Pairs of a String
// 1807_evaluate_the_bracket_pairs_of_a_string

// https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string
// Runtime: 284 ms, faster than 86.67% of TypeScript online submissions for Evaluate the Bracket Pairs of a String.
// Memory Usage: 74.5 MB, less than 60.00% of TypeScript online submissions for Evaluate the Bracket Pairs of a String.


/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
function evaluate(s: string, knowledge: string[][]): string {
  const knowMap = new Map<string, string>()
  knowledge.forEach((item) => {
    const [key, value] = item
    knowMap.set(key, value)
  })
  let resultStr: string = ''
  const getMatchedStr = (str: string): string => (knowMap.has(str) ? knowMap.get(str)! : '?')
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
