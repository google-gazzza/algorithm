// [JS][6kyu] Lottery Ticket
// lottery-ticket
// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

const bingo = (ticket, win) => {
  return win <=
    ticket.reduce((acc, cur) => {
      const [str, num] = cur
      const isMatch = str.split('').some((char) => char.charCodeAt(0) === num)
      return acc + (isMatch ? 1 : 0)
    }, 0)
    ? 'Winner!'
    : 'Loser!'
}

bingo(
  [
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74],
  ],
  2,
)
bingo(
  [
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74],
  ],
  1,
)
bingo(
  [
    ['HGTYRE', 74],
    ['BE', 66],
    ['JKTY', 74],
  ],
  3,
)
