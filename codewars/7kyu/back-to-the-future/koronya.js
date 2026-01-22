// [JS][7kyu] Back to the Future?
// back-to-the-future
// https://www.codewars.com/kata/5964e8fcfc9cf7749000005e/train/javascript

const monthMap = new Map([
  ['January', 'October'],
  ['April', 'July'],
  ['September', 'December'],
  ['February', 'March'],
  ['March', 'November'],
])

const backToTheFuture = (str) => {
  const [dayOfWeek, day, month] = str.split(' ')
  if (!monthMap.has(month)) {
    return "Doc, I can't get back to the future!"
  }
  const newMonth = monthMap.get(month)
  if (newMonth === 'November' && day === '31') {
    return "Doc, I can't get back to the future!"
  }
  return `I'm leaving here on ${dayOfWeek} ${day} ${newMonth}!`
}

// backToTheFuture('Monday 3 January') === "I'm leaving here on Monday 3 October!"
// backToTheFuture('Friday 20 October') === "Doc, I can't get back to the future!"
// backToTheFuture('Tuesday 31 March') === "Doc, I can't get back to the future!", 'Matching months do not necessarily have same number of days'
// backToTheFuture('Saturday 26 July') === "Doc, I can't get back to the future!"
