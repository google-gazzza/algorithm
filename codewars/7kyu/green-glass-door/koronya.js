// [JS][7kyu] Green Glass Door
// green-glass-door
// https://www.codewars.com/kata/5642bf07a586135a6f000004/train/javascript

const stepThroughWith = (s) => {
  return s.split('').some((char, index) => {
    if (index === 0) {
      return false
    }
    if (char === s[index - 1]) {
      return true
    }
    return false
  })
}

stepThroughWith('moon') === true
stepThroughWith('test') === false
stepThroughWith('glasses') === true
stepThroughWith('airplane') === false
stepThroughWith('free') === true
stepThroughWith('branch') === false
