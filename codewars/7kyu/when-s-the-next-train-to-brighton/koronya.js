// [JS][7kyu] When's the next train to Brighton?
// when-s-the-next-train-to-brighton
// https://www.codewars.com/kata/5a07620780171f61ff0000cb/train/javascript

const nextTrain = (time, minutes) => {
  const minutesNum = Number(minutes)
  let [h, m] = time.split(':').map(Number)
  const minuteSum = m + minutesNum
  m = minuteSum % 60
  if (minuteSum >= 60) {
    h += Math.floor(minuteSum / 60)
  }

  if (m > 30) {
    if (h >= 23 || h < 5) {
      return 'The next train is at 05:00.'
    }
    h += 1
    return `The next train is at ${h.toString().padStart(2, '0')}:00.`
  } else {
    if (h > 23 || h < 5) {
      return 'The next train is at 05:00.'
    }
    return `The next train is at ${h.toString().padStart(2, '0')}:30.`
  }
}

nextTrain('09:35', '10') === 'The next train is at 10:00.'
nextTrain('17:40', '30') === 'The next train is at 18:30.'
nextTrain('4:15', '60') === 'The next train is at 05:30.'
