// [JS][6kyu] Guitar #1: Find the frets
// guitar-1-find-the-frets
// https://www.codewars.com/kata/5fa49cfb19923f00299eae22/train/javascript

const NOTE_ARR = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
const NOTE_ARR_LEN = NOTE_ARR.length

const getLine = (firstNote) => {
  return [...[...NOTE_ARR.slice(NOTE_ARR.indexOf(firstNote))], ...NOTE_ARR, ...NOTE_ARR].slice(0, MAX_FRETS)
}
const MAX_FRETS = 23
const MAX_INDEX = MAX_FRETS - 1

const getNextChar = (char) => {
  const charIdx = NOTE_ARR.indexOf(char)
  return NOTE_ARR[(charIdx + 5) % NOTE_ARR_LEN]
}

const getFrets = (note, exact, string, position) => {
  const result = []
  const lineArr = ['E', 'B', 'G', 'D', 'A', 'E'].map(getLine)
  if (exact === false) {
    lineArr.forEach((line, lineIndex) => {
      line.forEach((char, charIndex) => {
        if (char === note) {
          result.push([lineIndex + 1, charIndex])
        }
      })
    })
    return result
  }
  const tempIndex = lineArr[string - 1].indexOf(note)
  const firstIndex = exact === true && position === 2 ? lineArr[string - 1].indexOf(note, tempIndex + 1) : tempIndex
  if (firstIndex !== -1) {
    result.push([string, firstIndex])
  }

  const getUpperLinePrevIndex = (char, row, col) => {
    for (let i = col - 1; i >= 0; i -= 1) {
      if (lineArr[row - 1][i] === char) {
        return i
      }
    }
    return -1
  }

  let prevIndex = firstIndex === -1 ? MAX_INDEX : firstIndex
  for (let line = string + 1; line <= 6; line += 1) {
    prevIndex = lineArr[line - 1].indexOf(note, prevIndex + 1)
    if (prevIndex === -1 || prevIndex > MAX_INDEX) {
      break
    }
    result.push([line, prevIndex])
  }

  prevIndex = firstIndex === -1 ? MAX_INDEX : firstIndex
  for (let line = string - 1; line > 0; line -= 1) {
    prevIndex = getUpperLinePrevIndex(note, line, prevIndex)
    if (prevIndex === -1 || prevIndex > MAX_INDEX) {
      break
    }
    result.push([line, prevIndex])
  }

  return result
}

// getFrets('F#', true, 3, 2)
// getFrets('G#', true, 5, 2)
// getFrets('E', true, 1, 1)
// getFrets('E', true, 1, 2)
// getFrets('E', true, 6, 2)
// getFrets('G#', false)
