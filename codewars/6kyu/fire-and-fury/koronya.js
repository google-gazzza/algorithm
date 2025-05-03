// [JS][6kyu] FIRE and FURY
// fire-and-fury
// https://www.codewars.com/kata/59922ce23bfe2c10d7000057/train/javascript

const getFireMessage = (fireCount) => `You${' and you'.repeat(fireCount - 1)} are fired!`
const getFuryMessage = (furyCount) => `I am${' really'.repeat(furyCount - 1)} furious.`

const fireAndFury = (tweet) => {
  const filteredStr = tweet.replace(/[^EFIRUY]/g, '')
  const filteredStrLen = filteredStr.length
  if (tweet.length !== filteredStrLen) {
    return 'Fake tweet.'
  }
  const resultArr = []
  let fireCount = 0
  let furyCount = 0
  let start = 0
  let end = 4
  let window = filteredStr.substring(start, end)

  while (end <= filteredStrLen) {
    if (window === 'FIRE') {
      fireCount += 1
      start += 4
      end += 4
      if (furyCount > 0) {
        resultArr.push(getFuryMessage(furyCount))
        furyCount = 0
      }
    } else if (window === 'FURY') {
      furyCount += 1
      start += 4
      end += 4
      if (fireCount > 0) {
        resultArr.push(getFireMessage(fireCount))
        fireCount = 0
      }
    } else {
      start += 1
      end += 1
    }
    window = filteredStr.substring(start, end)
  }
  if (fireCount > 0) {
    resultArr.push(getFireMessage(fireCount))
  }
  if (furyCount > 0) {
    resultArr.push(getFuryMessage(furyCount))
  }

  return resultArr.length > 0 ? resultArr.join(' ') : 'Fake tweet.'
}

// fireAndFury('FURYYYFIREYYFIRE') === 'I am furious. You and you are fired!'
// fireAndFury('FIREYYFURYYFURYYFURRYFIRE') === 'You are fired! I am really furious. You are fired!'
// fireAndFury('FYRYFIRUFIRUFURE') === 'Fake tweet.'
// fireAndFury('AAFIREBBFURYCC')
