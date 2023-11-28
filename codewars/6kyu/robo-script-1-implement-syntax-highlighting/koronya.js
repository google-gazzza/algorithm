// [JS][6kyu] RoboScript #1 - Implement Syntax Highlighting
// robo-script-1-implement-syntax-highlighting
// https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript

const getMatchedString = (str) => {
  const firstChar = str[0]
  if (firstChar === 'F') {
    return `<span style="color: pink">${str}</span>`
  }
  if (firstChar === 'L') {
    return `<span style="color: red">${str}</span>`
  }
  if (firstChar === 'R') {
    return `<span style="color: green">${str}</span>`
  }
  if (isNumber(firstChar)) {
    return `<span style="color: orange">${str}</span>`
  }
  return str
}

const isNumber = (n) => !Number.isNaN(Number(n))

const highlight = (code) => {
  const codeLen = code.length
  let i = 1
  let prev = code[0]
  let prevAccString = prev
  const result = []
  while (i < codeLen) {
    const char = code[i]
    if (isNumber(prevAccString) && isNumber(char)) {
      prevAccString += char
    } else if (prev === char) {
      prevAccString += char
    } else {
      result.push(getMatchedString(prevAccString))
      prev = char
      prevAccString = char
    }
    i += 1
  }
  result.push(getMatchedString(prevAccString))

  return result.join('')
}

highlight('F3RF5LF7') ===
  '<span style="color: pink">F</span><span style="color: orange">3</span><span style="color: green">R</span><span style="color: pink">F</span><span style="color: orange">5</span><span style="color: red">L</span><span style="color: pink">F</span><span style="color: orange">7</span>'

highlight('FFFR345F2LL') ===
  '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
