// [JS][6kyu] Create a frame!
// create-a-frame
// https://www.codewars.com/kata/5672f4e3404d0609ec00000a/train/javascript

const frame = (text, char) => {
  const result = []
  const maxLen = Math.max(...text.map((word) => word.length))
  result.push(char.repeat(maxLen + 4))
  text.forEach((word) => {
    const space = ' '.repeat(maxLen - word.length)
    result.push(`${char} ${word}${space} ${char}`)
  })
  result.push(char.repeat(maxLen + 4))
  return result.join('\n')
}

frame(['Create', 'a', 'frame'], '+')
