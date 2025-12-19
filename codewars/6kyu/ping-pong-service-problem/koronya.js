// [JS][6kyu] Ping-Pong service problem
// ping-pong-service-problem
// https://www.codewars.com/kata/544bdc2ec29fb3456e00064a/train/javascript

const service = (score) => {
  const [first, second] = score.split(':').map(Number)
  const totalPoints = first + second
  const target = totalPoints < 40 ? 5 : 2
  const isFirstServing = Math.floor(totalPoints / target) % 2 === 0
  return isFirstServing ? 'first' : 'second'
}

service('0:0') === 'first'
service('3:2') === 'second'
service('21:20') === 'first'
service('21:22') === 'second'
