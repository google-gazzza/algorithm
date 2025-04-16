// [JS][7kyu] Counting in the Amazon
// counting-in-the-amazon
// https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/javascript

const countArara = (n) => {
  const adakCount = Math.floor(n / 2)
  const ananeCount = n % 2
  return `${'adak '.repeat(adakCount)}${ananeCount === 1 ? 'anane' : ''}`.trim()
}

countArara(3)
countArara(8)
