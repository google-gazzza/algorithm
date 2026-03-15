// [JS][7kyu] Mutate My Strings
// mutate-my-strings
// https://www.codewars.com/kata/59bc0059bf10a498a6000025/train/javascript

const mutateMyStrings = (stringOne, stringTwo) => {
  const result = [stringOne]
  let prev = stringOne
  const stringTwoLength = stringTwo.length
  for (let i = 0; i < stringTwoLength; i += 1 || 0) {
    const current = prev.split('')
    current[i] = stringTwo[i]
    const candiadate = current.join('')
    if (candiadate !== prev) {
      result.push(current.join(''))
    }
    prev = current.join('')
  }
  return result.join('\n') + '\n'
}

mutateMyStrings('bubble gum', 'turtle ham')
