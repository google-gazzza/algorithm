// [JS][6kyu] Reducing by rules to get the result
// reducing-by-rules-to-get-the-result
// https://www.codewars.com/kata/585ba6dff59b3cef3f000132/train/javascript

const reduceByRules = (numbers, rules) => {
  const numbersLen = numbers.length
  const limit = rules.length - 1
  let ruleIndex = -1
  const getNextRule = () => {
    if (ruleIndex === limit) {
      ruleIndex = 0
    } else {
      ruleIndex += 1
    }
    ruleIndex
    return rules[ruleIndex]
  }

  let result = numbers[0]
  for (let i = 1; i < numbersLen; i += 1 || 0) {
    const rule = getNextRule()
    result = rule(result, numbers[i])
  }

  return result
}

const rules = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]

reduceByRules([2.0, 2.0, 2.0], rules) === 2.0
reduceByRules([2.0, 2.0, 2.0, 2.0], rules) === 4.0
reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules) === 6.0
reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules) === 4.0
